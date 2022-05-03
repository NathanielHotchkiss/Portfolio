import memojiMacbook from "../images/memojiMacbook.png";

export default function Home() {
  return (
    <div className="flex place-items-center justify-center min-h-screen">
      <div className="relative">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="sm:mr-4 flex-shrink-0 self-center">
            <img
              className="h-24 w-24 mb-1 sm:mb-0 rounded-full shadow-lg dark:shadow-transparent dark:opacity-85"
              src={memojiMacbook}
              alt="a memeoji version of Nathan"
            />
            <span className="relative inline-block sm:hidden ml-12 before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-rose-500">
              <span className="relative text-center text-neutral-100 dark:text-gray-200 text-2xl font-bold tracking-wide">
                Hello!
              </span>
            </span>
          </div>

          <div className="mt-6 mx-auto md:mx-2">
            <span className="hidden sm:relative sm:inline-block before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-rose-500">
              <span className="relative text-left text-neutral-100 dark:text-gray-200 text-xl font-bold tracking-wide">
                Hello!
              </span>
            </span>
            <div className="mx-6">
              <span className="mt-4 text-5xl sm:text-6xl font-lora font-extrabold tracking-wide text-black dark:text-rose-500">
                I'm Nathaniel Hotchkiss
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-prose my-6 mx-8 sm:mx-auto">
          <p className="text-lg">
            I leverage my knowledge of JavaScript to create simple,
            user-friendly websites and applications.
          </p>
        </div>
      </div>
    </div>
  );
}
