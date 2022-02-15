export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? 'border-skin-400 text-skin-400 focus:outline-none focus:text-skin-500 focus:border-skin-500'
        : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
