import React, { ReactNode } from 'react';

type Props = {
  count?: number;
  icon?: ReactNode;
};

const NotificationIcon = ({ count = 0, icon }: Props) => (
  <div className="relative p-3">
    <div className="text-secondary hover:text-secondary-focus">{icon}</div>
    {count > 0 && (
      <div className="flex justify-center items-center h-5 w-5 text-xs font-semibold font-mono rounded-full absolute top-0 right-0 bg-accent text-neutral">
        {count}
      </div>
    )}
  </div>
);

export default NotificationIcon;
