import getConfig from 'next/config';

import DefaultLayout from '@layouts/DefaultLayout';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig.HELLO_WORLD);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.PUBLIC_HELLO_WORLD);

export default function EnvPage() {
  return (
    <DefaultLayout>
      <h1>Runtime Environment Variables:</h1>
      <p>HELLO_WORLD: {publicRuntimeConfig.PUBLIC_HELLO_WORLD}</p>
    </DefaultLayout>
  );
}
