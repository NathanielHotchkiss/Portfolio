export default function Background({ children }) {
  return (
    <div className="transition-all duration-600 ease-in-out bg-neutral-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}
