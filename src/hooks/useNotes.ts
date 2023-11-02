import notes from "@/dummyData/dummyNotes";
import { useNotesStore } from "@/stores/NotesStore";
import { Note, NoteAction } from "@/types/Note";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const useNotes = () => {
  const queryClient = useQueryClient();
  const notesStore = useNotesStore();
  const { data: fetchedNotes } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: () => notes,
  });

  const mutationFn = async ({
    mutationType,
    mutationData,
  }: {
    mutationType: NoteAction;
    mutationData: any; // todo: fix typing
  }): Promise<void> => {
    switch (mutationType) {
      case "create":
        createNote();
        break;
      case "delete":
        deleteNote();
      case "update":
        updateNote();
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

  const createNote = () => {
    // POST request todo
    const createdAt = new Date();
    const noteHasTitle =
      notesStore.newNoteData.title.length > 0;
    const validNoteLength =
      notesStore.newNoteData.content.length >= 20 &&
      notesStore.newNoteData.content.length <= 300;

    if (noteHasTitle && validNoteLength) {
      console.log(
        "creating note with: ",
        notesStore.newNoteData,
        " and ",
        createdAt
      );
    } else {
      // todo show alert about needing a title and content length parameters
    }
  };
  const deleteNote = () => {
    // DELETE request todo
    console.log("deleting note");
  };
  const updateNote = () => {
    // PATCH request todo
    console.log("updating note");
  };
  const searchNotes = () => {
    // GET or POST request todo
    console.log("searching notes");
  };

  return {
    notes: fetchedNotes,
    mutateNotes,
    searchNotes,
  };
};

export default useNotes;
