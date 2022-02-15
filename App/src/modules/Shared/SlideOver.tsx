import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

interface SlideoverProps {
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export default function SlideOver({ title, open, setOpen, children }: SlideoverProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
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
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-14 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-skin-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col mt-14 py-6 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 flex-1 px-4 sm:px-6">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
