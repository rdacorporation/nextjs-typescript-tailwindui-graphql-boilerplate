import { observable, action, makeObservable } from 'mobx';

import { AppStore } from './AppStore';

export interface Locale {
  languageId: string;
  locale: string;
  name: string;
  icon: string;
}

export default class UIStore {
  appStore: AppStore;

  @observable appSettingsOpen = false;
  @observable navCollapsed = false;
  @observable locale: Locale = {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  };

  constructor(appStore: AppStore) {
    this.appStore = appStore;
    makeObservable(this);
  }

  @action toggleAppSettings() {
    this.appSettingsOpen = !this.appSettingsOpen;
  }

  @action toggleNavCollapsed() {
    this.navCollapsed = !this.navCollapsed;
  }
}
