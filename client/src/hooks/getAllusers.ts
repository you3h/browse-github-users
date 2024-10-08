import { useQuery } from '@tanstack/react-query';

import { fetchGitHubUsers } from '../services/github';

export const GET_USERS = 'users';

export const useGetUsersByUserName = (userName?: string) => {
  const { data, isLoading, isFetched, isError } = useQuery({
    queryKey: [`${GET_USERS}`, userName],
    enabled: !!userName,
    queryFn: () => fetchGitHubUsers(userName as string),
    retry: false,
  });

  return {
    isError,
    isLoading,
    isFetched,
    users: data,
  };
};
