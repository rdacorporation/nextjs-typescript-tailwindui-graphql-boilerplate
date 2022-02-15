import React, { useMemo } from 'react';
import { action, makeAutoObservable, observable } from 'mobx';
import { enableStaticRendering } from 'mobx-react';

import UIStore from './UIStore';

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(typeof window === 'undefined');

export class AppStore {
  @observable lastUpdate?: Date;
  @observable uiStore: UIStore;

  constructor() {
    this.uiStore = new UIStore(this);
    makeAutoObservable(this);
  }

  @action hydrate = (initialProps: any) => {
    if (!initialProps) return;

    this.lastUpdate = initialProps.lastUpdate !== null ? initialProps.lastUpdate : Date.now();
  };
}

function initializeStore(initialProps = null) {
  const _appStore = appStore ?? new AppStore();

  if (initialProps) {
    _appStore.hydrate(initialProps);
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _appStore;

  // Create the store once in the client
  if (!appStore) appStore = _appStore;

  return _appStore;
}

export function useAppStore(initialProps?: any) {
  const store = useMemo(() => initializeStore(initialProps), [initialProps]);
  return store;
}

let appStore: AppStore = new AppStore();
export const AppStoreContext = React.createContext<AppStore>(appStore);
