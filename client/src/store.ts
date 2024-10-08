import { create } from 'zustand';

interface GithubUsersState {
  userSearch: string;
  setUserSearch: (userSearch: string) => void;
  userRepositories: Record<string, any>;
  setUserRepositories: (
    userName: string,
    repositories: Record<string, any>[]
  ) => void;
}

const useGithubUserStore = create<GithubUsersState>((set) => ({
  userSearch: '',
  setUserSearch: (userSearch: string) => set(() => ({ userSearch })),
  userRepositories: {},
  setUserRepositories: (
    userName: string,
    repositories: Record<string, any>[]
  ) =>
    set((state) => ({
      userRepositories: {
        ...(state.userRepositories || {}),
        [userName]: [
          ...(state.userRepositories[userName] || []),
          ...repositories,
        ],
      },
    })),
}));

export default useGithubUserStore;
