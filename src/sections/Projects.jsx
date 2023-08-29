//Projects.jsx

import Project from "../comps/Project";
import { projects } from "../consts/ProjectsInfo";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-[120px] relative z-[50] md:pb-[80px] pb-[0px]">
            <div className="xl:w-[1000px] m:w-[788px] md:w-[642px] w-full flex flex-col items-center justify-center box-border">
                <h1
                    className={`tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b relative z-[50] text-4xl md:text-5xl lg:text-[3.75rem] font-bold poppins transition-all duration-150 text-center md:text-left leading-tight md:leading-tight leading-[1.25]`}
                >
                    My Projects
                </h1>

                <div 
                className="flex flex-col items-center justify-center w-full"
                >
                    <ol className="group/list mt-12 w-[85%] md:w-[auto] z-[50] relative" aria-label="Projects">
                        {
                            projects?.map((project, index) => {
                                return (
                                    <Project key={index} {...project} />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Projects;
