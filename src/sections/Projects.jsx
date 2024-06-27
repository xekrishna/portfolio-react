import { recentProjects } from "../constants/data";

const Projects = () => {
  const card = 'overflow-hidden lg:max-h-[40%] lg:h-[400px] h-[300px] lg:w-[400px] w-[300px]  border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,0.3)] to-[rgba(75,30,133,0.01)] filter grayscale-[50%] hover:grayscale-0 backdrop-blur-[12px] text-white group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-color-6 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 lg:hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 lg:hover:before:blur origin-left lg:hover:decoration-2 hover:text-color-6 relative text-left p-3 text-gray-50 text-base font-bold overflow-hidden before:absolute before:w-24 before:h-24 before:right-1 before:top-1 before:z-10 lg:before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-40 after:h-40 lg:after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg';
  const cardBottom = "flex justify-end items-left flex-col gap-[0.75em] h-full rounded-[1.5em] z-50";
  const button = "h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200";
  const lang = "hidden lg:block p-2 transition font-size-[2em] border-2 rounded-3xl hover:border-color-5 hover:text-color-5 min-w-0 text-[0.9em]";

  return (
    <>
      <main className="bg-sec w-full h-full">
        <div className="bg-gradient-to-t from-black from-5% via-transparent via-80% to-black to-95% w-full h-full items-center flex flex-col py-10 overflow-x-scroll hide-scrollbar">
          <div className="flex flex-col h-[20%] items-center justify-center gap-5 overflow-hidden absolute lg:relative">
            <h1 className="h2 font-bold font-Palanquin  mt-1 bg-gradient-to-r from-color-1 to-white text-transparent bg-clip-text">My Recent Projects</h1>
            <p className="text-wrap lg:w-[600px] p-2 text-center text-gray-400">Shaping your visions and desires into a web project that captivates and inspires, showcasing our development and skills.</p>
          </div>
          <div className="relative overflow-x-scroll flex items-center justify-center p-5 h-full w-max 
          lg:w-[80%] lg:left-0 left-[500px] ">
            <div className="flex gap-x-10 gap-y-3  lg:items-center items-end lg:justify-center justify-start min-w-[100%] lg:w-[60%] lg:h-[80%] h-full lg:flex-wrap sm:flex-wrap overflow-x-scroll overflow-y-hidden hide-scrollbar">
            {recentProjects.map((item, index) => (
              <div className={card} key={index}>
                <div className={cardBottom}>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[2em] font-medium">{item.name}</h1>
                    <p className="text-[0.85em]">
                      {item.about}
                    </p>
                    <div className="text-sm flex overflow-hidden gap-5 p-2 w-full max-h-[100%]">
                      {item.used.map((c, index) => (
                        <p className={lang} key={index}>{c.lang}</p>
                      ))}
                    </div>
                  </div>
                  <form action={item.link} className={button}>
                    <input type="Submit" readOnly value="View More">
                    </input>
                    <svg
                      className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </form>
                </div>
              </div>
            ))}
          </div>
          </div>
          
        </div>
      </main>
    </>
  );
}

export default Projects;
