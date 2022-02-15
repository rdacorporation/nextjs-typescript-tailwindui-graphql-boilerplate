import React, { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { observer } from 'mobx-react';

import app from '@src/data/app';
import { AppStoreContext } from '@stores/AppStore';

import AppSettingsContent from './AppSettingsContent';

const AppSettings = () => {
  const appStore = useContext(AppStoreContext);
  const { uiStore } = appStore;
  return (
    <Transition.Root show={uiStore.appSettingsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => {
          /* noop */
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-secondary shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6 pt-12">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-secondary-content">
                        {app.name} Settings
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-accent rounded-md text-accent-content hover:text-accent-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-focus"
                          onClick={() => uiStore.toggleAppSettings()}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <AppSettingsContent />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default observer(AppSettings);
