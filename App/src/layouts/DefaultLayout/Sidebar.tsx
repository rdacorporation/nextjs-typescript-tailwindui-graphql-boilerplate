import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { templateSettings, template } from 'lodash';

import app from '@src/data/app';
import nav from '@src/data/navigation';
import classNames from '@src/utils/classNames';

import SidebarItem from './SidebarItem';

const Sidebar = () => {
  templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  const [urlTemplateData, setUrlTemplateData] = React.useState({ host: '' });
  useEffect(() => {
    setUrlTemplateData({
      ...urlTemplateData,
      host: window.location.host,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="fixed flex flex-col top-14 left-0 w-14 md:w-64 h-full text-white transition-all duration-300 border-none z-10 sidebar bg-base-200">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          {nav.map((item) =>
            !item.children ? (
              <li key={item.title}>
                <SidebarItem
                  title={item.title}
                  url={template(item.url)(urlTemplateData)}
                  icon={item.icon}
                  target={item.target}
                />
              </li>
            ) : (
              <Disclosure as="div" key={item.title} className="space-y-1" defaultOpen={item.defaultOpen}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="relative flex flex-row w-full">
                      <span className="w-full flex flex-row items-center h-11 hover:bg-base-300 text-base-content hover:text-base-content border-l-4 border-transparent hover:border-accent-focus pr-6">
                        <span className="flex-none justify-center items-center ml-3">{item.icon}</span>
                        <span className="ml-2 text-sm flex-grow text-left tracking-wide truncate">{item.title}</span>
                        <span className="flex-none">
                          <svg
                            className={classNames(
                              open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                              'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                            )}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children &&
                        item.children.map((subItem) => (
                          <SidebarItem
                            key={subItem.title}
                            className="md:ml-11"
                            title={subItem.title}
                            url={template(subItem.url)(urlTemplateData)}
                            icon={subItem.icon}
                            target={subItem.target}
                          />
                        ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ),
          )}
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">{app.copyright}</p>
      </div>
    </nav>
  );
};

export default observer(Sidebar);
