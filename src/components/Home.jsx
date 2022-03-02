import memojiMacbook from "../images/memojiMacbook.png";
import getDate from "../utils/getDate.js";

export default function Home() {
  const date = getDate();

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-60 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-300 dark:opacity-50"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-400 dark:opacity-50"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
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
              <span className="block sm:ml-6 text-center sm:text-left text-custom-magenta dark:text-gray-200 text-lg md:text-xl font-semibold tracking-wide">
                Hello!
              </span>
              <span className="mt-2 sm:ml-6 block text-2xl text-center sm:text-left font-extrabold tracking-wide text-black dark:text-custom-magenta sm:text-4xl">
                I'm Nathaniel Hotchkiss
              </span>
            </div>
          </h1>
        </div>
        <div className="mt-6 leading-8 max-w-prose mx-auto">
          <p className="h2 mb-6 text-base md:text-xl">
            I'm a web developer from Northern Virginia. I leverage my knowledge
            of JavaScript to create simple, user-friendly websites and
            applications. I'm looking for an opportunity to join a team of
            developers.
          </p>

          <div className="flex justify-center w-4/5 md:w-2/3 mx-auto my-10">
            <div className="flex flex-wrap justify-center">
              <i className="devicon-javascript-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-react-original text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-nodejs-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-express-original text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-postgresql-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-html5-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-css3-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-tailwindcss-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-bootstrap-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-github-original text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-git-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
              <i className="devicon-vscode-plain text-4xl md:text-5xl text-black dark:text-gray-200 opacity-90 my-4 mr-4"></i>
            </div>
          </div>
          <p className="mb-6 text-md md:text-xl">
            Feel free to connect, or check out my repositories on GitHub. Look
            out for future updates to my portfolio and new projects. Enjoy the
            rest of your {date}!
          </p>
        </div>
      </div>
    </div>
  );
}
