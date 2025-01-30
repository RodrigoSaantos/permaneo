import { User } from "@/app/data/user";
import { create } from "zustand";

interface UserState {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    courses: [],
  },
  setUser: (user) => set({ user }),
}));