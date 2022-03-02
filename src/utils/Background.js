export default function Background({ children }) {
  return (
    <div className="transition-all duration-600 ease-in-out bg-gray-100 dark:bg-dark-gray dark:bg-opacity-90 text-gray-900 dark:text-gray-100">{children}</div>
  );
}
