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
import { useEffect } from "react";

const useNotes = () => {
  const queryClient = useQueryClient();
  const newNoteStore = useNewNoteStore();
  const userStore = useUserStore();
  const { data: fetchedNotes } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(),
    enabled: !!userStore.user,
  });

  useEffect(() => {
    if (!userStore.user) {
      queryClient.removeQueries({ queryKey: ["notes"] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.user, queryClient]);

  const fetchNotes = async () => {
    try {
      const notes = await axios.get<Note[]>(
        "http://localhost:4000/notes/get-all",
        {
          params: {
            user: userStore.user,
          },
        }
      );
      console.log("notes: ", notes);

      return notes.data;
    } catch (error: any) {
      console.log("fetchNotesError: ", error);

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
      console.log("createNote running");
      const noteHasTitle =
        newNoteStore.newNoteData.title.length > 0;
      const validNoteLength =
        newNoteStore.newNoteData.content.length >= 20 &&
        newNoteStore.newNoteData.content.length <= 300;

      if (noteHasTitle && validNoteLength) {
        const createRequest = await axios.post(
          "http://localhost:4000/notes/create-note",
          {
            note: {
              ...newNoteStore.newNoteData,
              user: userStore.user,
            },
          }
        );
        NiceModal.remove("create-or-edit-note");
      } else {
        // todo show alert about needing a title and content length parameters
      }
    } catch (error) {
      console.error("createNote error: ", error);
    }
  };
  const deleteNote = async (note: Note) => {
    console.log("deleteNote note:", note);
    try {
      const deleteNoteRequest = await axios.delete(
        "http://localhost:4000/notes/delete-note",
        {
          data: note,
        }
      );
      NiceModal.remove("confirm-note-deletion");
    } catch (error: any) {
      console.log("deleteNote error: ", error);
    }
  };
  const updateNote = async (currentNote: Note) => {
    try {
      const updateNoteRequest = await axios.patch(
        "http://localhost:4000/notes/update-note",
        {
          data: {
            ...currentNote,
            ...newNoteStore.newNoteData,
          },
        }
      );
      NiceModal.remove("create-or-edit-note");
    } catch (error: any) {
      console.log("updateNote error: ", error);
    }
  };
  const searchNotes = (searchTerm: string) => {
    // GET or POST request todo
    console.log("searchNotes searchTerm: ", searchTerm);
  };

  return {
    notes: fetchedNotes,
    mutateNotes,
    searchNotes,
  };
};

export default useNotes;
