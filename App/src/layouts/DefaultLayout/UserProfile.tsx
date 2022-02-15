import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { observer } from 'mobx-react';
import Link from 'next/link';

import DummyAvatar from '@public/dummy-avatar.jpeg';
import classNames from '@src/utils/classNames';

const userNavigation = [
  { name: 'Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

const UserProfile = () => {
  return (
    <div className="flex flex-col">
      <div className="relative z-10 flex-shrink-0 flex h-14 py-2 bg-base-200">
        <Menu as="div" className="px-3 py-1 relative">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8">
                    <Image
                      className="rounded-full"
                      placeholder="blur"
                      src={DummyAvatar}
                      alt="avatar"
                      width={256}
                      height={256}
                    />
                  </div>
                </Menu.Button>
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
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1 border-b-2">
                    <h1 className="px-2 text-gray-800 font-bold">My App</h1>
                  </div>
                  {userNavigation.map((item, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <div
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          <Link href={item.href}>{item.name}</Link>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default observer(UserProfile);
