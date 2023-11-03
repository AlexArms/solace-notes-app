import { useNewNoteStore } from "@/stores/NewNoteStore";
import { useUserStore } from "@/stores/UserStore";
import { Note, NoteAction } from "@/types/Note";
import NiceModal from "@ebay/nice-modal-react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import fuzzysort from "fuzzysort";

const useNotes = () => {
  const queryClient = useQueryClient();
  const newNoteStore = useNewNoteStore();
  const userStore = useUserStore();
  const { data: fetchedNotes } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(),
    enabled: !!userStore.user,
  });
  const [notesToRender, setNotesToRender] = useState<
    Note[]
  >([]);

  useEffect(() => {
    if (!userStore.user) {
      queryClient.removeQueries({ queryKey: ["notes"] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.user, queryClient]);

  const fetchNotes = async () => {
    try {
      const notes = await axios.get<Note[]>("/api/notes", {
        params: {
          user: userStore.user,
        },
      });

      return notes.data;
    } catch (error: any) {
      return [];
    }
  };

  const mutationFn = async ({
    mutationType,
    mutationData,
  }: {
    mutationType: NoteAction;
    mutationData: { note?: Note };
  }): Promise<void> => {
    switch (mutationType) {
      case "create":
        createNote();
        break;
      case "delete":
        //@ts-ignore - // todo: fix typing
        deleteNote(mutationData?.note);
      case "update":
        //@ts-ignore - // todo: fix typing
        updateNote(mutationData?.note);
      default:
        break;
    }
  };

  const { mutate: mutateNotes } = useMutation({
    mutationKey: ["notes"],
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      }),
  });

  const createNote = async () => {
    try {
      const noteHasTitle =
        newNoteStore.newNoteData.title.length > 0;
      const validNoteLength =
        newNoteStore.newNoteData.content.length >= 20 &&
        newNoteStore.newNoteData.content.length <= 300;

      if (noteHasTitle && validNoteLength) {
        await axios.post("/api/notes", {
          note: {
            ...newNoteStore.newNoteData,
            user: userStore.user,
          },
        });
        NiceModal.remove("create-or-edit-note");
      } else {
        newNoteStore.setShowSnackbar(true);
        // todo show alert about needing a title and content length parameters - toast or modal?
      }
    } catch (error) {
      console.error("createNote error: ", error);
    }
  };
  const deleteNote = async (note: Note) => {
    try {
      await axios.delete("/api/notes", {
        data: note,
      });
      NiceModal.remove("confirm-note-deletion");
    } catch (error: any) {}
  };
  const updateNote = async (currentNote: Note) => {
    try {
      await axios.patch("/api/notes", {
        data: {
          ...currentNote,
          ...newNoteStore.newNoteData,
        },
      });
      NiceModal.remove("create-or-edit-note");
    } catch (error: any) {}
  };
  const searchNotes = (searchTerm: string) => {
    if (fetchedNotes !== undefined) {
      if (searchTerm === "") {
        return setNotesToRender(fetchedNotes);
      }
      const searchResults = fuzzysort.go(
        searchTerm,
        fetchedNotes,
        {
          key: "content",
        }
      );

      setNotesToRender(
        searchResults.map((result) => result.obj)
      );
    }
  };

  const sortNotes = (event: any) => {
    const sort = event.target.value;
    const newNotes = [...notesToRender];

    if (sort === "longest") {
      newNotes.sort((noteA, noteB) => {
        return noteB.content.length - noteA.content.length;
      });
    } else if (sort === "shortest") {
      newNotes.sort((noteA, noteB) => {
        return noteA.content.length - noteB.content.length;
      });
    } else if (sort === "oldest") {
      newNotes.sort((noteA, noteB) => {
        return noteA.createdAt - noteB.createdAt;
      });
    } else {
      newNotes.sort((noteA, noteB) => {
        return noteB.createdAt - noteA.createdAt;
      });
    }

    setNotesToRender(newNotes);
  };

  useEffect(() => {
    if (fetchedNotes !== undefined) {
      setNotesToRender(fetchedNotes);
    }
  }, [fetchedNotes]);

  return {
    notes: notesToRender,
    mutateNotes,
    searchNotes,
    sortNotes,
  };
};

export default useNotes;
