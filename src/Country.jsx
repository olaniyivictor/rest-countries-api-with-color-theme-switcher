import './main.css';
import PropTypes from 'prop-types';
export default function Country({country,theme}){
    return(
        <div >
            <figure className={`${theme === 'light' ? 'bg-White': 'bg-DarkBlue'} w-[100%] h-[20rem] rounded-[0.5rem]  shadow-red-500  md:shadow-lg `}><img src={country.flag} className='w-[100%] h-[10rem] md:w-[39vw]  object-cover md:object-cover  custom-md:w-[39.5vw] custom-d:w-[40vw] custom-m:w-[40.3vw] custom-c:w-[40.8vw] custom-v:w-[16.2rem]  lg:w-[16.4rem] custom-g:w-[17.2rem] custom-a:w-[17.8rem] custom-h:w-[18.1rem] custom-i:w-[18.4rem] custom-j:w-[18.7rem] custom-k:w-[19rem] custom-l:w-[19.4rem] custom-n:w-[19.8rem] custom-o:w-[20.2rem] custom-p:w-[20.6rem] custom-r:w-[27.4vw] xl:w-[19.4vw] custom-s:w-[19.5vw] custom-t:w-[19.6vw] custom-z:w-[19.9vw]'  alt='country.flag'/>
            <hgroup className='p-[1.5rem]'>
                <h1 className='font-custom font-extrabold text-[0.9rem] sm:text-[1.2rem] md:text-[0.5rem] custom-v:text-[0.5rem] custom-d:text-[0.8rem]'>{country.name}</h1>
                <div className='pt-[0.6rem] font-custom font-light text-[0.9rem]'>
                <h2>Population: {country.population}</h2>
                <h3>Region: {country.region}</h3>
                <h4>Capital: {country.capital}</h4>
                </div>
            </hgroup>
            </figure>
        </div>
    )
}
Country.propTypes={
country:PropTypes.object.isRequired,
theme:PropTypes.string.isRequired,
}

