import getConfig from 'next/config';
import { NextPageContext } from 'next';

import DefaultLayout from '@layouts/DefaultLayout';
interface EnvPageProps {
  message: string;
}
function EnvPage({ message }: EnvPageProps) {
  // Only holds serverRuntimeConfig and publicRuntimeConfig
  const { publicRuntimeConfig } = getConfig();

  return (
    <DefaultLayout>
      <h1>Runtime Environment Variables:</h1>
      <p>HELLO_WORLD: {message}</p>
      <p>PUBLIC_HELLO_WORLD: {publicRuntimeConfig.PUBLIC_HELLO_WORLD}</p>
    </DefaultLayout>
  );
}

EnvPage.getInitialProps = async (_: NextPageContext): Promise<EnvPageProps> => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  // Will only be available on the server-side
  console.log(serverRuntimeConfig.HELLO_WORLD);

  // Will be available on both server-side and client-side
  console.log(publicRuntimeConfig.PUBLIC_HELLO_WORLD);

  // Exporting the server runtime config as a prop will make it available via the prop
  return { message: serverRuntimeConfig.HELLO_WORLD };
};

export default EnvPage;
