import { observer } from 'mobx-react';

const AppSettingsContent = () => {
  return (
    <div className="absolute inset-0 px-4 sm:px-6">
      <a target="_blank" href="/api/getServerCertificate">
        <button className="btn btn-primary">Download Device Certificate</button>
      </a>
    </div>
  );
};

export default observer(AppSettingsContent);
