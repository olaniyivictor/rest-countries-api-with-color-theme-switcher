import PropTypes from 'prop-types'
import './main.css';
import { IoMoonSharp } from 'react-icons/io5';
export default function Header({onSwitcher,theme}){
    return(
        <div className={`${theme === 'light' ? 'bg-White':'bg-DarkBlue'  }`} >
            <nav className='flex justify-between w-[full] h-[4rem]  md:h-[5rem] xl:h-[5rem] lg:h-[5rem] xl:pt-[0.4rem]  md:pt-[0.2rem] md:pl-[3.8rem] md:pr-[3.8rem] pl-[1.4rem] pr-[1.4rem] pt-[0.2rem]  items-center content-center shadow-red-500  md:shadow-lg font-custom '>
                <div className='font-extrabold text-[0.8rem] sm:text-[1rem]  md:text-[1.5rem]'>Where in the world?</div>
                <div className='flex flex-row items-center justify-center content-center gap-[0.4rem]'>
                <div className={`${theme === 'light' ? 'color=white':'color=black'}`} onClick={onSwitcher}><IoMoonSharp size={20}  /></div>
                <h1 className='font-semi md:text-[1.2rem] text-[0.8rem] sm:text-[1rem]'>Dark Mode</h1>
               </div>
            </nav>
        </div>
    )
}
Header.propTypes={
    onSwitcher:PropTypes.func.isRequired,
    theme:PropTypes.string.isRequired,
}
