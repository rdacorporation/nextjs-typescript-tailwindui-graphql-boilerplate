import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { AppStoreContext } from '@stores/AppStore';
import NotificationIcon from '@modules/Shared/NotificationIcon';

export default function Settings() {
  const appStore = useContext(AppStoreContext);
  const { uiStore } = appStore;
  return (
    <div className="flex flex-col">
      <div className="relative z-10 flex-shrink-0 flex bg-base-200">
        <button onClick={() => uiStore.toggleAppSettings()}>
          <NotificationIcon count={0} icon={<FontAwesomeIcon icon={faCog} size="2x" />} />
        </button>
      </div>
    </div>
  );
}
