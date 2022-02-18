import { useContext } from 'react';

import { AppStoreContext } from '@stores/AppStore';

export function useMyAppFetcher<TData, TVariables>(
  query: string,
  options?: RequestInit['headers'],
): (variables?: TVariables) => Promise<TData> {
  // it is safe to call React Hooks here.
  const { graphQLUrl, graphQLHeaders } = useContext(AppStoreContext);

  return async (variables?: TVariables) => {
    const res = await fetch(graphQLUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...graphQLHeaders,
        ...(options ?? {}),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
}
