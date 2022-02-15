import { Fragment } from 'react';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
import { observer } from 'mobx-react';

export interface DialogProps {
  title: string;
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
}

const Dialog = ({ title, open = false, setOpen, children }: DialogProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <HeadlessDialog as="div" static className="fixed z-20 inset-0 overflow-y-auto" open={open} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessDialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-2 pt-5 pb-4 sm:p-4 sm:pb-4">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <HeadlessDialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                  </HeadlessDialog.Title>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </HeadlessDialog>
    </Transition.Root>
  );
};

export default observer(Dialog);
