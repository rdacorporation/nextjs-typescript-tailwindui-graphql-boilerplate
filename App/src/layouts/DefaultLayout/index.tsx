import React, { ReactNode } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';

import app from '@src/data/app';

import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import AppSettings from './AppSettingsSlideOver';

type Props = {
  children?: ReactNode;
  title?: string;
};

const CortexLayout = ({ children, title = 'Home' }: Props) => {
  return (
    <main className="min-h-screen h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
      <Head>
        <title>
          {app.name} - {title}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppHeader />
      <Sidebar />
      <AppSettings />
      <div className="ml-14 mt-14 md:ml-64 content h-screen">{children}</div>
    </main>
  );
};

export default observer(CortexLayout);
