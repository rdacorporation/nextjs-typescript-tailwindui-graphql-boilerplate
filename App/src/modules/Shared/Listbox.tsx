import { Fragment } from 'react';
import { Listbox as HeadlessListbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';

interface ListboxProps {
  value: {
    name: string;
  };
  onChange: (value: { name: string }) => void;
  items: {
    name: string;
  }[];
}

export default function Listbox({ value, onChange, items }: ListboxProps) {
  return (
    <HeadlessListbox value={value} onChange={onChange}>
      <div className="relative mt-1">
        <HeadlessListbox.Button className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
          <span className="block truncate">{value.name}</span>
        </HeadlessListbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <HeadlessListbox.Options className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items.map((item, idx) => (
              <HeadlessListbox.Option
                key={idx}
                className={({ active }) =>
                  `${active ? 'text-skin-900 bg-skin-100' : 'text-gray-900'}
                        cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{item.name}</span>
                    {selected ? (
                      <span className={`text-skin-600 absolute inset-y-0 left-0 flex items-center pl-3`}>
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </HeadlessListbox.Option>
            ))}
          </HeadlessListbox.Options>
        </Transition>
      </div>
    </HeadlessListbox>
  );
}
