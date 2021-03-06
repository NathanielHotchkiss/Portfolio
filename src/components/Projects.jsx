import { projectsData } from "../data/data.js";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center py-8 xl:px-24 2xl:px-80">
      {projectsData.map((project) => {
        const { title, info, img, repo, url, id } = project;

        const liveAppButton = () => {
          if (url) {
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white dark:text-black"
              >
                <button
                  type="button"
                  className="justify-center border border-transparent rounded-md shadow-lg w-40 py-2 bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-100"
                >
                  Live Application
                </button>
              </a>
            );
          } else {
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white dark:text-black"
              >
                <button
                  type="button"
                  className="justify-center border border-transparent rounded-md shadow-lg w-40 py-2 bg-neutral-700 dark:bg-neutral-200"
                >
                  Not Available
                </button>
              </a>
            );
          }
        };

        return (
          <div
            className="w-sm sm:max-w-md bg-white dark:bg-black shadow-md rounded-lg mb-8 mx-2"
            key={id}
          >
            <h3 className="font-bold text-2xl text-zinc-900 dark:text-zinc-200 px-4 py-5">
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

            <ol className="list-disc marker:text-black dark:marker:text-custom-magenta py-6 pl-4 sm:h-48">
              {info.map((detail) => {
                const { id, description } = detail;
                return (
                  <li className="mx-4 my-2" key={id}>
                    {description}
                  </li>
                );
              })}
            </ol>
            <div className="flex flex-end justify-around my-6">
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-medium text-white"
              >
                <button
                  type="button"
                  className="justify-center border border-transparent rounded-md shadow-lg w-40 py-2 text-white dark:text-black bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-100"
                >
                  Source Code
                </button>
              </a>
              {liveAppButton()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
