import notes from "@/dummyData/dummyNotes";
import { useNewNoteStore } from "@/stores/NewNoteStore";
import { Note, NoteAction } from "@/types/Note";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

const useNotes = () => {
  const queryClient = useQueryClient();
  const newNoteStore = useNewNoteStore();
  const { data: fetchedNotes } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: () => notes,
  });

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
          { note: newNoteStore.newNoteData }
        );
        console.log("createNote response: ", createRequest);
      } else {
        // todo show alert about needing a title and content length parameters
      }
    } catch (error) {
      console.error("createNote error: ", error);
    }
  };
  const deleteNote = (note: Note) => {
    // DELETE request todo
    console.log("deleteNote:", note);
  };
  const updateNote = (note: Note) => {
    // PATCH request todo
    console.log("updateNote: ", note);
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
