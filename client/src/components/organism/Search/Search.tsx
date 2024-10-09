import { useState } from 'react';

import useGithubUserStore from '../../../store';

import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

export const Search = () => {
  const [searchUserName, setSearchUserName] = useState<string>('');
  const { setUserSearch } = useGithubUserStore();

  const onSearch = (searchText: string) => {
    if (!searchText) {
      return;
    }
    setUserSearch(searchUserName);
  };

  return (
    <div className='w-full md:w-[30%] sticky top-0 bg-white py-3'>
      <div className='h-min flex md:sticky md:top-4 flex-col gap-2'>
        <Input
          name='username'
          label='Enter Github Username:'
          placeholder='Username'
          type='search'
          onChange={(e) => setSearchUserName(e.target.value)}
        />
        <Button
          text='Search'
          isFluid
          onClick={() => onSearch(searchUserName)}
        />
      </div>
    </div>
  );
};
