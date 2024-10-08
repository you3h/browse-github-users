import type { FC } from 'react';

import { Search, SearchResults } from '../components';

export const Home: FC = () => {
  return (
    <div className='flex flex-col items-center justify-center rounded-md p-6 md:p-12 md:border md:border-gray-200'>
      <div className='max-w-[1280px] w-full flex flex-col md:flex-row gap-4'>
        <Search />
        <SearchResults />
      </div>
    </div>
  );
};
