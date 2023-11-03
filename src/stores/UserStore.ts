import { create } from "zustand";

interface UserStore {
  user: string | null;
  setUser: (user: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (username: string) => {
    localStorage.setItem("solace-notes-user", username);
    set(() => {
      return {
        user: username,
      };
    });
  },
  logout: () => {
    localStorage.removeItem("solace-notes-user");
    set(() => {
      return {
        user: null,
      };
    });
  },
}));
