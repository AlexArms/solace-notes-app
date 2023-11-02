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
    mutationData: { note?: Note };
  }): Promise<void> => {
    switch (mutationType) {
      case "create":
        createNote();
        break;
      case "delete":
        deleteNote(mutationData?.note);
      case "update":
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

  const createNote = () => {
    console.log("creating note running");
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
  const deleteNote = (note: Note) => {
    // DELETE request todo
    console.log("deleting note:", note);
  };
  const updateNote = (note: Note) => {
    // PATCH request todo
    console.log("updating note: ", note);
  };
  const searchNotes = (searchTerm: string) => {
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
