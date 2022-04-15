import { resumeData } from "../data/data.js";

export default function Resume() {
  const { resumeExperience, resumeSummary, resumeContact } = resumeData;
  const { email, phone, location } = resumeContact;

  return (
    <div className="flex justify-center min-h-screen py-10">
      <div className="shadow-lg bg-white dark:bg-neutral-900 md:max-w-2xl lg:max-w-3xl px-4 md:px-16 py-6 md:py-8">
        <div className="sm:flex justify-center py-4">
          <h1 className="md:text-lg lg:text-xl text-center font-semibold">
            Nathaniel Hotchkiss - Web Developer
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mx-6 mb-2">
          <p className="text-xs md:text-sm text-center ">
            {email}
            <span className="hidden sm:inline text-sm md:text-base px-1">|</span>
          </p>
          <p className="text-xs md:text-sm text-center ">
            {phone}
            <span className="inline text-sm md:text-base px-1">|</span>
            {location}
          </p>
        </div>

        <>
          <h3 className="font-semibold text-base py-1">
            Summary
          </h3>
          <p className="text-xs sm:text-sm px-2 py-1">
            {resumeSummary}
          </p>
          <div className="w-full border-t border-gray-300 my-2"></div>
        </>

        <>
          <h3 className="font-semibold text-base py-1">
            Technical Skills
          </h3>
          <p className="text-xs sm:text-sm px-2 py-1">
            <span className="font-semibold">Front End:</span> JavaScript ES6,
            React, React Hooks, React Router, HTML5, CSS3, Bootstrap, TailwindCSS
          </p>
          <p className="text-xs sm:text-sm px-2 py-1">
            <span className="font-semibold">Back End:</span> Node.js,
            Express.js, Knex.js, PostgreSQL
          </p>
          <p className="text-xs sm:text-sm px-2 py-1">
            <span className="font-semibold">Additional Tools & Skills: </span>
            Git, Github, Figma, Heroku, Unit testing(Mocha, Chai), Algorithms, Data structures, RESTful APIs
          </p>
          <div className="w-full border-t border-gray-300 my-2"></div>
        </>

        <>
          <h3 className="font-semibold text-base pb-2">
            Experience
          </h3>
          {resumeExperience.map((resume) => {
            const {
              id,
              title,
              company,
              location,
              startDate,
              endDate,
              responsibilities,
            } = resume;
            return (
              <div className="py-1" key={id}>
                <h4 className="text-xs sm:text-sm font-semibold">
                  {title}
                </h4>
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="flex">
                    <p className="text-xs sm:text-sm pl-2">
                      {company}
                    </p>
                    <span className="text-xs sm:text-sm px-1">
                      |
                    </span>
                    <p className="text-xs sm:text-sm">{location}</p>
                  </div>
                  <p className="text-xs sm:text-sm px-2 py-1">
                    {startDate} - {endDate}
                  </p>
                </div>
                {responsibilities.map((responsibility) => {
                  const { id, description } = responsibility;
                  return (
                    <p
                      className="text-xs sm:text-sm px-2 py-1"
                      key={id}
                    >
                      {"- "}
                      {description}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </>

        <>
          <div className="w-full border-t border-gray-300 my-2"></div>
          <h3 className="font-semibold text-base pb-2">
            Education
          </h3>
          <p className="text-xs sm:text-sm font-semibold">
            Software Engineering Certificate
          </p>
          <div className="flex">
            <a
              href="https://www.thinkful.com/"
              className="text-blue-500 text-xs sm:text-sm py-1"
            >
              Thinkful
            </a>
            <p className="text-xs sm:text-sm py-1 pl-1">July 2021</p>
          </div>
        </>
      </div>
    </div>
  );
}
