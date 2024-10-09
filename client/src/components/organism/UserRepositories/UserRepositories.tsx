import { useEffect, useState } from 'react';
import useGithubUserStore from '../../../store';

import { useGetUserRepositories } from '../../../hooks/getUserRepositories';
import { Button } from '../../atoms/Button/Button';

import starIcon from '/star.svg';

interface UserRepositoriesProps {
  userName: string;
}

export const UserRepositories = ({ userName }: UserRepositoriesProps) => {
  const { userRepositories, setUserRepositories } = useGithubUserStore();
  const [repositoryPage, setRepositoryPage] = useState<number>(1);
  const { repositories, hasNextPage, isLoading, isFetched } =
    useGetUserRepositories(userName, repositoryPage);

  useEffect(() => {
    if (repositories) {
      setUserRepositories(userName, repositories);
    }
  }, [repositories, userName, setUserRepositories, isFetched]);

  if (
    isFetched &&
    !isLoading &&
    (!userRepositories[userName] || userRepositories[userName].length <= 0)
  ) {
    return (
      <div className='italic flex items-center justify-center'>
        No public repository available for this user
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-1'>
      {userRepositories[userName]?.map((repo: Record<string, any>) => {
        return (
          <div
            key={repo.id}
            className='flex justify-between border gap-2 border-gray-500 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200'
            onClick={() => window.open(repo.html_url, '_blank')}
          >
            <div className='flex flex-col gap-1 flex-grow max-w-max overflow-hidden px-1'>
              <span className='font-bold text-ellipsis overflow-hidden'>
                {repo.name}
              </span>
              <span className='text-xs line-clamp-5 text-ellipsis'>
                {repo.description}
              </span>
            </div>
            <div className='flex gap-2 justify-center items-center min-w-[44px]'>
              <span className='text-sm'>{repo.stargazers_count}</span>
              <img className='h-4 w-4' src={starIcon} />
            </div>
          </div>
        );
      })}
      <div className='italic text-md text-center'>
        {isLoading ? (
          <span>Loading...</span>
        ) : hasNextPage ? (
          <Button
            text='Load more repositories'
            isFluid
            variant='secondary'
            onClick={() => setRepositoryPage(repositoryPage + 1)}
            className='mt-4'
          />
        ) : (
          <span>There is nothing more to show</span>
        )}
      </div>
    </div>
  );
};
