import { projectsData } from "../data/data.js";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center xl:px-24 2xl:px-80">
      {projectsData.map((project) => {
        const { title, info, img, repo, url, id } = project;

        const liveAppButton = () => {
          if (url) {
            return (
              <button
                type="button"
                className="inline-flex justify-center w-36 mt-4 py-2 border border-transparent rounded-md shadow-sm bg-custom-purple dark:bg-custom-magenta hover:bg-custom-magenta dark:hover:bg-custom-purple"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-white"
                >
                  Live Application
                </a>
              </button>
            );
          } else {
            return (
              <button
                type="button"
                className="inline-flex justify-center w-36 mt-4 py-2 border border-transparent rounded-md shadow-sm bg-gray-600"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-white"
                >
                  Coming Soon
                </a>
              </button>
            );
          }
        };

        return (
          <div
            className="w-sm sm:max-w-md bg-white dark:bg-neutral-900 dark:shadow-transparent shadow-md rounded-lg my-4 mx-2"
            key={id}
          >
            <h3 className="px-4 py-5 text-xl font-bold text-black dark:text-custom-magenta">
              {title}
            </h3>

            <div className="min-h-56">
              <img
                alt={title}
                filename={img}
                src={img}
                rel="noopener noreferrer"
                className="w-full shadow-md"
              />
            </div>

            <ol className="py-6 pl-4 sm:h-56 list-disc marker:text-black dark:marker:text-custom-magenta">
              {info.map((detail) => {
                const { id, description } = detail;
                return (
                  <li className="mx-4 my-2" key={id}>
                    {description}
                  </li>
                );
              })}
            </ol>
            <div className="flex flex-end justify-around mb-8">
              <button
                type="button"
                className="inline-flex justify-center w-36 mt-4 py-2 border border-transparent rounded-md shadow-sm bg-custom-purple dark:bg-custom-magenta hover:bg-custom-magenta dark:hover:bg-custom-purple"
              >
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium text-white"
                >
                  Source Code
                </a>
              </button>
              {liveAppButton()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
