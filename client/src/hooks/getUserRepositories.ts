import { useQuery } from '@tanstack/react-query';

import { fetchGitHubUserRepository } from '../services/github';

export const GET_USER_REPOSITORIES = 'user_repositories';

export const useGetUserRepositories = (userName?: string, page?: number) => {
  const { data, isLoading, isFetched, isError } = useQuery({
    queryKey: [`${GET_USER_REPOSITORIES}`, userName, page],
    enabled: !!userName,
    queryFn: () => fetchGitHubUserRepository(userName as string, page),
    retry: false,
  });

  return {
    isError,
    isLoading,
    isFetched,
    hasNextPage: data?.hasNextPage,
    repositories: data?.repositories,
  };
};
