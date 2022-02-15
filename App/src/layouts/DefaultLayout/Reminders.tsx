import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Link from 'next/link';

import NotificationIcon from '../../modules/Shared/NotificationIcon';

const data = [
  {
    description: 'Ask Mary about repo letter for this account',
    url: '/accounts/1234',
    complete: false,
    due: '6/7/2021',
  },
  {
    description:
      'Call Sarah at Durham Chevrolet about this titleCall Sarah at Durham Chevrolet about this titleCall Sarah at Durham Chevrolet about this title',
    url: '/accounts/1234',
    complete: false,
    due: '7/4/2021',
  },
  {
    description: 'Revisit work item 1234',
    url: '/work-items/1234',
    complete: false,
    due: '7/5/2021',
  },
];

export default function Reminders() {
  return (
    <div className="flex flex-col">
      <div className="relative z-10 flex-shrink-0 flex h-14 py-2 bg-base-200">
        <Popover>
          {({}) => (
            <>
              <Popover.Button>
                <NotificationIcon
                  count={3}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <title>Reminders</title>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-40 w-max px-4 mt-1 right-0 sm:px-0 ">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-white text-gray-900 p-4">
                      Reminders
                      <table>
                        <tbody className="bg-white divide-y divide-gray-200 align-top">
                          {data.map((item) => (
                            <tr key={item.description}>
                              <td className="p-4">
                                <input type="checkbox" />
                              </td>
                              <td className="p-4 w-20 sm:w-40 lg:w-96">{item.description}</td>
                              <td className="p-4">
                                <Link href={item.url} passHref={true}>
                                  <a>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                      />
                                    </svg>
                                  </a>
                                </Link>
                              </td>
                              <td className="p-4">{item.due}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
