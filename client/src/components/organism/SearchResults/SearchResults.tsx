import { Tooltip } from 'react-tooltip';

import useGithubUserStore from '../../../store';
import { useGetUsersByUserName } from '../../../hooks/getAllusers';

import { Accordion } from '../../atoms/Accordion/Accordion';
import { SkeletonLoading } from '../../atoms/SkeletonLoading/SkeletonLoading';
import { UserNameWithAvatar } from '../../atoms/UserNameWithAvatar/UserNameWithAvatar';
import { UserRepositories } from '../UserRepositories/UserRepositories';

import infoIcon from '/info.svg';

const IntialState = () => {
  return (
    <div className='border mt-[20px] rounded-md border-gray-200 flex-grow bg-gray-100 p-4 h-[255px] flex items-center justify-center text-center'>
      <span>Please type in your search parameter in the Input field</span>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className='border rounded-md border-gray-200 flex-grow bg-gray-100 p-4 h-[255px] flex items-center justify-center text-center'>
      <span>No result was found.</span>
    </div>
  );
};

export const SearchResults = () => {
  const { userSearch } = useGithubUserStore();

  const { users, isLoading, isFetched } = useGetUsersByUserName(userSearch);

  if (!users && !isLoading && !isFetched) {
    return <IntialState />;
  }

  if (isLoading) {
    return (
      <div className='flex flex-col flex-grow'>
        <span>Please wait while we are loading the data...</span>
        <SkeletonLoading className=' h-[255px] w-full' />
      </div>
    );
  }

  return (
    <div className='flex-grow min-h-[255px] flex flex-col'>
      <div className='text-lg flex gap-2 items-center'>
        Showing users for: "{userSearch}"
        <img
          data-tooltip-id='info-tooltip'
          data-tooltip-content='This will always show 5 users at a time at max.'
          src={infoIcon}
          className='h-4 w-4 cursor-pointer'
        />
      </div>
      <div className='flex flex-col gap-2'>
        {users && users.length > 0 ? (
          users?.map((user) => {
            return (
              <Accordion
                title={
                  <UserNameWithAvatar
                    userName={user.login}
                    avatarUrl={user.avatar_url}
                  />
                }
                key={user.id}
              >
                <UserRepositories userName={user.login} />
              </Accordion>
            );
          })
        ) : (
          <EmptyState />
        )}
      </div>
      <Tooltip id='info-tooltip' />
    </div>
  );
};
