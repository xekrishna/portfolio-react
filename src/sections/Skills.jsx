import { mySkills } from '../constants/data'

const Skills = () => {

  return (
    <>
    <main className="bg-[#0f0217] w-full h-full overflow-hidden">
      <div className="bg-gradient-to-t from-black from-5% via-transparent via-80% to-black to-95%
       w-full h-full items-center flex flex-col">
        <div className="flex flex-col mt-10 items-center h-[90%] lg:w-[90%] w-full">
          <h1 className="h1 font-bold font-Palanquin bg-gradient-to-r from-color-1 to-white text-transparent bg-clip-text">My Skills</h1>
          {mySkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center lg:p-10 lg:w-[1200px] w-[100%] h-max over">
              <h1 className="h4">{skill.name}</h1>
              <div className="flex gap-10 p-5 flex-[0_0_33.33%] h-max w-[80%] items-start flex-wrap justify-center">
                {skill.components.map((i, index) => (
                  <div key={index} className="flex h-[250px] w-[220px] rounded-[20px] p-[2px] shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] bg-gradient-to-br from-[#AF40FF] via-[#5B42F3] via-50% to-[#00DDEB] min-w-0 min-h-0 gap-5 filter grayscale-[80%] transition hover:grayscale-0 items-center justify-center relative hover:scale-105">
                    <div className='flex flex-col items-center gap-2 justify-center bg-[#240438] h-full w-full rounded-[18px]'>
                      <span className="z-10 h6">{i.value}</span>
                      <img src={i.link} alt={i.object} className="h-20 w-20 object-contain" />
                      <p className='h6'>{i.object}</p>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          ))}


        </div>
       </div>


    </main>
    </>
  )
}

export default Skills