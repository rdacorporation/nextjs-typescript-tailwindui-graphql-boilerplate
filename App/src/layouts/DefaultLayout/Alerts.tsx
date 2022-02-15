import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

import alerts from '@src/data/alerts';
import NotificationIcon from '@modules/Shared/NotificationIcon';

export default function Alerts() {
  return (
    <div className="flex flex-col">
      <div className="relative z-10 flex-shrink-0 flex h-14 bg-base-200">
        <Popover className="relative py-2">
          {({}) => (
            <>
              <Popover.Button>
                <NotificationIcon
                  count={3}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <title>Notifications</title>
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
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
                <Popover.Panel className="absolute z-10 w-72 px-4 mt-1 right-0 sm:px-0 ">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-white text-gray-900 py-2 px-4">
                      <h1>Notifications</h1>
                      <ul>
                        {alerts.map((item) => (
                          <li key={item.headline}>
                            <div className="py-2 border-t-2">
                              <p className="text-sm font-medium text-gray-900">{item.headline}</p>
                              <p className="text-sm text-gray-500">{item.body}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 text-center">
                      <Link href="/notifications" passHref={true}>
                        <a className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                          <span className="block text-sm text-blue-500">View All</span>
                        </a>
                      </Link>
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
