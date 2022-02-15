import React from 'react';

import { AppStoreContext } from '@stores/AppStore';

export const useMyAppFetcher = <TData, TVariables>(query: string): (() => Promise<TData>) => {
  const isServer = typeof window === 'undefined';

  // it is safe to call React Hooks here.
  const { uiStore } = React.useContext(AppStoreContext);
  let route = '/graphql';
  let headers = {};

  // Only add the forwarded header if we're not on the server
  // otherwise, the sidecar will handle it
  if (!isServer) {
    route = `/graphql`;
  }

  if (!isServer) {
    headers = {
      // Pass any custom headers here (the following is just an example of doing so)
      'X-App-Locale': uiStore.locale,
    };
  }

  return async (variables?: TVariables) => {
    const res = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      console.dir(json.errors);
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};
