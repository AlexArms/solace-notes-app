import debounce from "@/utility/debounce";
import { create } from "zustand";

interface NewNoteStore {
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

export const useNewNoteStore = create<NewNoteStore>()(
  (set) => ({
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
