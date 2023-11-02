import { Note } from "@/types/Note";
import debounce from "@/utility/debounce";
import { create } from "zustand";

interface NotesStore {
  notes: Note[];
  newNoteData: {
    title: string;
    content: string;
  };
  updateNewNoteData: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}

export const useNotesStore = create<NotesStore>()(
  (set) => ({
    notes: [],
    newNoteData: {
      title: "",
      content: "",
    },
    updateNewNoteData: debounce((event) => {
      set((state) => ({
        newNoteData: {
          ...state.newNoteData,
          [event.target.name]: event.target.value,
        },
      }));
    }, 200),
    clearNewNoteData: () =>
      set(() => ({
        newNoteData: {
          title: "",
          content: "",
        },
      })),
  })
);
