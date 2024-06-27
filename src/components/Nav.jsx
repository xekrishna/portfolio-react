import { Link } from 'react-scroll'
import Buttons from '../components/Buttons'

const Nav = () => {
  return (
    <>
        <nav className="flex items-center p-[8px] lg:p-[25px] overflow-hidden h-30 max-h-30 sticky backdrop:blur-md border-b-[0.5px] border-zinc-600 lg:w-full w-380px">
            <div className='flex items-center justify-start w-full lg:pl-20'>
                <span className=' lg:h6 border-b-[3px] border-transparent hover:border-color-1 transition-all px-1 rounded-sm'>contact.sanzu@gmail.com</span>
            </div>
            <div className='flex justify-end items-center gap-10 w-full lg:pr-20 '>
                <div className='lg:flex gap-5 hidden'>
                  <Link to="projects" smooth={true} duration={500} className='cursor-pointer'>
                    <button className='top-ul-button'>
                      <span className='transition-hover'>Projects</span>
                    </button>
                  </Link>
                  <Link to="skills" smooth={true} duration={500} className='cursor-pointer'>
                    <button className='top-ul-button'>
                      <span className='transition-hover'>Skills</span>
                    </button>
                  </Link>
                  <Link to="resume" smooth={true} duration={500} className='cursor-pointer'>
                    <button className='top-ul-button'>
                      <span className='transition-hover'>Resume</span>
                    </button>
                  </Link>
                </div>
                <div>
                    <Buttons  href="mailto:support.sanzu@gmail.com">
                      <span>Contact</span>
                    </Buttons>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Nav