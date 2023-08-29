/* eslint-disable react/prop-types */
const Project = ({ name, description, link, technologies, subInfo, time = "2023 — Present", underMaintenance, }) => {
  return (
    <li className="mb-12 relative z-[50]" aria-label={name}>
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:!opacity-100 group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 block bg-violet-800/20 group-hover:bg-violet-800/30 group-hover:shadow-[inset_0_1px_0_0_#FF72E11A] group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">{time} {underMaintenance && <span>🚧</span>}</header>
        <div className="z-10 sm:col-span-6">
          <h2 className="font-medium leading-snug text-slate-200">
            <div>
              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-[#FF72E1] focus-visible:text-teal-300 group/link text-base transition-colors duration-200" href={link} target="_blank" rel="noreferrer" aria-label="Visit website">
                <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4 block"></span>
                <span>{name} · <span className="inline-block">{link.split("://")[1].split("/")[0]}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                  </svg>
                </span>
                </span>
              </a>
            </div>
            {
              subInfo.map((info, index) => {
                return (
                  <div key={index}>
                    <div className="text-slate-500" aria-hidden="true">{info}</div>
                  </div>
                )
              })
            }
          </h2>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {
              technologies.map((tech, index) => {
                return (
                  <li key={index} className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-[#ff84e5]/10 px-3 py-1 text-xs font-medium leading-5 text-[#FF72E1] ">{tech}</div></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Project;
