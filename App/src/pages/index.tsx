import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';

import DefaultLayout from '@layouts/DefaultLayout';

const Home: NextPage = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(dayjs());
    }, 250);
  });

  return (
    <DefaultLayout>
      <div className="pt-4 pl-5 pr-4 pb-4 h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 bg-base-200 rounded-md text-base-content text-2xl">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>Host</th>
                <th>Service</th>
                <th>Version</th>
                <th>Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {/* {Object.values(beholderStore.beholderServices).map((service) => (
                <tr key={service.key}>
                  <td>{service.hostName}</td>
                  <td>{service.serviceName}</td>
                  <td>{service.version}</td>
                  <td>{currentTime.diff(service.lastSeen, 'second')}s</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
        <div className="col-span-2 bg-neutral-focus rounded-md flex justify-center items-center text-neutral-content text-2xl font-extrabold">
          <div>{currentTime.format('MM/DD/YYYY  h:mm:ss')}</div>
        </div>
        <div className="row-span-2 col-span-2 bg-base-200 rounded-md flex justify-center items-center text-base-contenttext-2xl font-extrabold"></div>
      </div>
      <div className="pt-4 pl-5 pr-4 h-72">
        {/* Filter out hosts that are not daemon hosts and display the number of services that are running on each host */}
        {/* {Object.values(beholderStore.beholderServices)
          .filter((service) => service.serviceName === 'daemon')
          .map((service) => (
            <DaemonStatus service={service as BeholderDaemonServiceInfo} key={service.key} />
          ))} */}
      </div>
    </DefaultLayout>
  );
};

export default observer(Home);
