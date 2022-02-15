import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const AppHeaderBar = () => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="relative z-10 flex-shrink-0 flex h-14 shadow bg-base-200">
        <div className="flex-1 px-4 flex justify-between">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm input bg-base-200 input"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppHeaderBar;
