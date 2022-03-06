import { projectsData } from "../data/data.js";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap lg:flex-nowrap justify-center px-1 py-4">
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
              className="w-sm sm:max-w-sm bg-white dark:shadow-transparent dark:shadow-md dark:bg-dark-gray overflow-hidden shadow rounded-lg my-4 mx-2"
              key={id}
            >
              <h3 className="px-4 py-5 sm:px-6 text-xl font-bold text-black dark:text-custom-magenta">
                {title}
              </h3>
              <div className="min-h-56">
                <img
                  alt={title}
                  filename={img}
                  src={img}
                  rel="noopener noreferrer"
                  className="w-full shadow"
                />
              </div>

              <ol className="py-6 pl-4 md:h-56 list-disc marker:text-black dark:marker:text-custom-magenta">
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
                  className="inline-flex justify-center w-36 mt-4 py-2 border border-transparent rounded-md shadow-sm bg-custom-purple dark:bg-custom-magenta opacity-90 hover:bg-custom-magenta dark:hover:bg-custom-purple"
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
    </div>
  );
}
