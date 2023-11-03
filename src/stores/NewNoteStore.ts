import debounce from "@/utility/debounce";
import { create } from "zustand";

interface NewNoteStore {
  newNoteData: {
    title: string;
    content: string;
  };
  updateNewNoteData: (noteFields: {}) => void;
  clearNewNoteData: () => void;
  showSnackbar: boolean;
  setShowSnackbar: (showSnackbar: boolean) => void;
}

export const useNewNoteStore = create<NewNoteStore>()(
  (set) => ({
    newNoteData: {
      title: "",
      content: "",
    },
    updateNewNoteData: debounce((noteFields) => {
      set((state) => ({
        newNoteData: {
          ...state.newNoteData,
          ...noteFields,
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
    showSnackbar: false,
    setShowSnackbar: (showSnackbar: boolean) =>
      set(() => ({
        showSnackbar,
      })),
  })
);
