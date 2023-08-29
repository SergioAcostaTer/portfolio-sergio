import RandomPlacer from '../comps/RandonPlacer';
import Tornado from '../comps/Tornado';

const techStyles = [
  "tracking-tight inline font-semibold from-[#A5E65A] to-[#5FD667] bg-clip-text text-transparent bg-gradient-to-b",
  "tracking-tight inline font-semibold from-[#72D0FF] to-[#389BFF] bg-clip-text text-transparent bg-gradient-to-b",
  "tracking-tight inline font-semibold from-[#FFAC72] to-[#FF4F33] bg-clip-text text-transparent bg-gradient-to-b",
  "tracking-tight inline font-semibold from-[#5ED3F3] to-[#01CEED] bg-clip-text text-transparent bg-gradient-to-b",
  "tracking-tight inline font-semibold from-[#5A67D8] to-[#4B5B6F] bg-clip-text text-transparent bg-gradient-to-b",
  "tracking-tight inline font-semibold from-[#F472B6] to-[#ED64A6] bg-clip-text text-transparent bg-gradient-to-b",
  "tracking-tight inline font-semibold from-[#38BDF8] to-[#06A5C1] bg-clip-text text-transparent bg-gradient-to-b"
];

const Stack = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[190px] pb-[40px] relative z-[50]">
      {/* <RandomPlacer size={700}  /> */}
      <div className="xl:w-[1000px] m:w-[788px] md:w-[642px] w-[370px] flex flex-col items-center justify-center box-border">
        <h1
          className={`tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b relative z-[50] text-4xl md:text-5xl lg:text-6xl font-bold poppins transition-all duration-150 text-center md:text-left leading-tight md:leading-tight`}
        >
          My tech Stack
        </h1>

        <div className="relative flex justify-center z-[50] w-full pt-[15px] md:pt-[40px] flex-col md:flex-row items-center px-[0px]">
          <p
            className={`text-center md:text-left text-lg md:text-xl lg:text-[1.75rem] lg:leading-[2.08rem] font-bold poppins w-full md:w-[35ch] text-[color:var(--text)] transition-all duration-150 px-[20px]`}
          >
            As a Computer Science student at <a href="https://www.ulpgc.es/" target="_blank" rel="noopener noreferrer" className="text-[#F59B09] underline">ULPGC</a>, I excel in crafting impactful web applications. I leverage{" "}
            <span className={techStyles[0]}>MongoDB</span>
            or <span className={techStyles[1]}>PostgreSQL</span>
             for data, utilize{" "}
            <span className={techStyles[1]}>Express.js</span>, and{" "}
            <span className={techStyles[2]}>Node.js</span> for a robust backend, and elevate user interfaces with{" "}
            <span className={techStyles[3]}>React</span>,{" "}
            <span className={techStyles[4]}>Next.js</span>,{" "}
            <span className={techStyles[5]}>TypeScript</span>, and{" "}
            <span className={techStyles[6]}>Tailwind CSS</span>.
          </p>
          <Tornado />
        </div>
      </div>
    </div>
  );
};

export default Stack;
