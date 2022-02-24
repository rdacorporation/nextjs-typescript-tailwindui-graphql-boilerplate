import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import DefaultLayout from '@layouts/DefaultLayout';
import { GetBooksQuery, useGetBooksQuery } from '@src/graphql/myapp';

dayjs.extend(utc);

const Home: NextPage = () => {
  const [currentTime, setCurrentTime] = useState<string>(dayjs.utc().format('MM/DD/YYYY  h:mm:ss'));
  const { isLoading, isError, data, error } = useGetBooksQuery<GetBooksQuery, any>();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs.utc().format('MM/DD/YYYY  h:mm:ss'));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentTime]);

  return (
    <DefaultLayout>
      <div className="pt-4 pl-5 pr-4 pb-4 h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 bg-base-200 rounded-md text-base-content text-2xl">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>My App&apos;s Data</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <span>Loading...</span>}
              {!isLoading && isError && error && <span>Error: {error.message}</span>}
              {!isLoading && !isError && data && (
                <tr>
                  <td>
                    {data.book.title} by {data.book.author.name}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-span-2 bg-neutral-focus rounded-md flex justify-center items-center text-neutral-content text-2xl font-extrabold">
          <div>{currentTime}</div>
        </div>
        <div className="row-span-2 col-span-2 bg-base-200 rounded-md flex justify-center items-center text-base-contenttext-2xl font-extrabold"></div>
      </div>
      <div className="pt-4 pl-5 pr-4 h-72"></div>
    </DefaultLayout>
  );
};

export default observer(Home);
