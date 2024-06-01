import Projects from "@/components/projects";

export default function Home() {
  return (
    <div >
      <div className="w-full max-w-3xl">
        <div>
          <p className="text-gray-500">
            I am a Front-End Developer with extensive experience in complex
            projects. My passion for technological innovation is reflected in my
            continuous pursuit of improving my skills. I specialize in languages
            like JavaScript and TypeScript, utilizing leading frameworks such as
            React and NodeJS. These skills enable me to create high-quality web
            applications with a positive impact.
          </p>
        </div>

        <div className="mt-16">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
          <ol className="relative border-s border-gray-200">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="flex flex-row items-center gap-2">
                <div className="text-md font-medium text-gray-900">
                  QA Engineer | Front-end Developer
                </div>
                <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
                  present
                </div>
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                People Interactive Brasil
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Front-end Developer
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Infinity Tec 
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
              <div className="text-md font-medium text-gray-900">
                Front-end Developer
              </div>
              <div className="mb-4 text-sm font-normal text-gray-500">
                Amaré Publicidade E Marketing Ltda 
              </div>
            </li>
          </ol>
        </div>

        <div className="my-16">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">Projects</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
}
