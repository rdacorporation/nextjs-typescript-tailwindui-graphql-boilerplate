import { observer } from 'mobx-react';

const AppSettingsContent = () => {
  return (
    <div className="absolute inset-0 px-4 sm:px-6">
      <a target="_blank" href="/api/test123">
        <button className="btn btn-primary">Some Setting</button>
      </a>
    </div>
  );
};

export default observer(AppSettingsContent);
