import memojiMacbook from "../images/memojiMacbook.png";

export default function Home() {
  return (
    <div className="flex relative py-16 md:place-items-center justify-center min-h-screen">
      <div className="relative">
        <div className="max-w-prose mx-auto mb-18">
          <h1 className="sm:flex justify-center">
            <div className="flex justify-center mb-6">
              <img
                className="inline-block h-24 sm:w-24 rounded-full shadow-lg dark:shadow-transparent dark:opacity-75"
                src={memojiMacbook}
                alt="a memeoji version of Nathan"
              />
            </div>
            <div className="sm:mt-3">
              <span className="block sm:ml-6 text-center sm:text-left text-rose-600 dark:text-gray-200 text-lg md:text-xl font-semibold tracking-wide">
                Hello!
              </span>
              <span className="mt-2 sm:ml-6 block text-2xl text-center sm:text-left font-extrabold tracking-wide text-black dark:text-custom-magenta sm:text-4xl">
                I'm Nathaniel Hotchkiss
              </span>
            </div>
          </h1>
        </div>
        <div className="my-6 max-w-prose ml-24">
          <p className="text-xl">
            I leverage my knowledge of JavaScript to create simple,
            user-friendly websites and applications.
          </p>
        </div>
      </div>
    </div>
  );
}
