import { User } from "@/api/getUserById";
import { create } from "zustand";

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    courses: [],
    favorites: [],
  },
  setUser: (user) => set({ user }),
}));