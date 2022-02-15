import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import classNames from '@src/utils/classNames';

type Props = {
  title: string;
  icon: any;
  items: any[];
  onAdd: () => void;
};

export default function MenuWidget({ title, icon, items, onAdd }: Props) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button>{icon}</Menu.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="z-20 origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="flex justify-between items-center py-1 border-b-2">
                  <h1 className="px-2 text-gray-800">{title}</h1>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={onAdd}
                        className={classNames(
                          active ? 'text-gray-900 font-bold' : 'text-gray-500',
                          'px-4 py-2 text-sm cursor-pointer',
                        )}
                      >
                        <div className="flex flex-row items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div>Add</div>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  {items.map((item, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'w-full text-left px-4 py-2 text-sm cursor-pointer',
                          )}
                        >
                          <div>{item}</div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
}
