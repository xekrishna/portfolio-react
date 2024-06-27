import { statistics } from '../constants/data'
import avatar from '../assets/avatar.jpg'

const Hero = () => {
  const classes="rounded-full border-color-1 border-[2px] min-h-4 min-w-[35px] text-color-1 p-1 hover:bg-color-1 hover:border-transparent hover:text-white transition";

  return (
    <>
    <main className='h-full bg-main slide-fade-in '>
      <div className='bg-gradient-to-t from-black from-5% via-transparent via-80% to-black to-95%'>
        <div className='flex w-full p-2 '>
          <div className="p-5 lg:p-32 lg:w-[60%] h-[75%] flex flex-col justify-center gap-2">
          <p className="text-4xl font-semibold">I am Mayank</p>
          <h1 className=" h1 font-bold font-Palanquin bg-gradient-to-r from-color-1 to-white text-transparent bg-clip-text">Web Developer + UI/UX Designer</h1>
          <h1></h1>
          <span className=" text-gray-00 text-lg p-2">Transforming your ideas into visually stunning web projects. With expertise in web development, UI/UX design, and data handling, I deliver efficient, impactful solutions that inspire.
          </span>
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center min-h-[60px] w-max p-2 ">
            <button className="flex gap-2 rounded-full border-color-1 border-[2px] min-h-4 min-w-max text-color-1 p-3 hover:bg-color-1 hover:border-transparent hover:text-white transition peer ml-[-40px] lg:ml-0">
              <span>Download CV</span>
              <i className='bx bx-download text-lg h-[20px] mt-[-2px]'></i>
              <span className=""></span>
            </button>
            <ul className="flex gap-5">
              <a href="https://twitter.com/mayankbisht69" target="_blank" rel="noopener noreferrer">
                <button className={classes}>
                  <i className="bi bi-twitter-x"></i>
                </button>
              </a>
              <a href="https://instagram.com/kwishy.kun" target="_blank" rel="noopener noreferrer">
                <button className={classes}>
                  <i className="bi bi-instagram"></i>
                </button>
              </a>
              <a href="https://github.com/xekrishna" target="_blank" rel="noopener noreferrer">
                <button className={classes}>
                  <i className="bi bi-github"></i>
                </button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <button className={classes}>
                  <i className="bx bxl-linkedin"></i>
                </button>
              </a>
            </ul>

          </ul>
        </div>

        <div className='hidden lg:flex items-center justify-center lg:min-w-[40%] lg:min-h-[75%]'>
        <div className='max-w-[350px] max-h-[400px] mr-40'>
          <img src={avatar} alt="" className='h-full w-full filter grayscale-[50%] hover:grayscale-0 brightness-50 hover:brightness-100 transition rounded-3xl shadow-[0px_0px_80px_rgba(255,255,255,0.438)] hover:shadow-[0px_0px_80px_rgba(174,0,255,0.438)] hue-rotate-30 border-[3px] border-n-12 hover:border-color-1 rotate-6 hover:scale-[1.1] hover:rotate-0' />
        </div>
      </div>
      </div>
        
      <div className='hidden lg:flex justify-start items-center flex-wrap w-full gap-16 h-[25%] px-5 lg:px-[120px] lg:pb-20'>
          {statistics.map((stat, index) => (
            <div key={index} className='flex justify-center items-end gap-5 w-[190px]'>
              <p className='text-6xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-gray-400 text-wrap w-[100px]'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div> 
    </main>
    
    </>
  )
}

export default Hero