// ***
// This page demonstrates how to use dynamic runtime environment variables.
// Values are passed through via the `serverRuntimeConfig` and `publicRuntimeConfig` objects in `next.config.js`.
// See https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration for more information.
// ***
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

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
export const getServerSideProps: GetServerSideProps = async (_) => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  // Will only be available on the server-side
  console.log(serverRuntimeConfig.HELLO_WORLD);

  // Will be available on both server-side and client-side
  console.log(publicRuntimeConfig.PUBLIC_HELLO_WORLD);

  // Exporting the server runtime config as a prop will make it available via the prop
  return {
    props: { message: serverRuntimeConfig.HELLO_WORLD },
  };
};

export default EnvPage;
