import './main.css';
import PropTypes from 'prop-types'
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CountryDetails({ countries, theme }) {
  const { alpha3code } = useParams();
  const navigate = useNavigate();

  // Use useEffect to check if the country exists and navigate accordingly
  useEffect(() => {
    const country = countries.find((country) => country.alpha3Code === alpha3code);
    if (!country) {
      // Programmatically navigate to the CountryList component
      navigate('/country');
    }
  }, [alpha3code, countries, navigate]);

  // Before accessing country properties, check if country exists
  const country = countries.find((country) => country.alpha3Code === alpha3code);

  if (!country) {
    return <div>Country not found</div>;
  }

  // Check if borders exist before mapping over them
  const borderCountries = country.borders || [];

  return (
    <div className='md:p-[4rem] p-[1.7rem]'>
      <Link to='/country'>
        <button type='text' className={`${theme === 'light' ? 'bg-White' : 'bg-DarkBlue'} 'bg-red-600 flex flex-row items-center content-center gap-[0.4rem] 
            pr-[2.5rem] pl-[1.8rem] md:pl-[2.3rem] md:pr-[2.8rem] pt-[0.5rem] pb-[0.5rem] font-custom font-light text-[1rem]  shadow-red-500  md:shadow-lg rounded-[0.4rem]'}`}>
          <div><FaArrowLeft/></div> Back
        </button>
      </Link>
      <div className='flex flex-col pt-[3.5rem] md:flex-row'>
        <div className='h-[12rem] md:h-[15rem] md:w-[100%] lg:h-[90%]'>
          <img src={country.flag} className='w-[100%] h-[13rem] md:w-[100%] md:h-[18rem] lg:w-[85%] lg:h-[20rem] xl:h-[21rem] object-cover' alt={`Flag of ${country.name}`} />
        </div>
        <div className='pt-[3rem] flex flex-col md:ml-[2rem] xl:pr-[8rem] whitespace-nowrap'>
          <hgroup>
            <h1 className='font-custom font-extrabold text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.4rem]'>{country.name}</h1>
            <h2 className='font-custom font-light text-[0.8rem] pt-[1rem] md:pt-[1.4rem] lg:text-[1rem]'>Native Name: {country.nativeName}</h2>
            <h2 className='pt-[0.1rem] md:pt-[0.2rem] font-custom text-[1rem] font-light lg:text-[1rem]'>Population: {country.population}</h2>
            <h2 className='pt-[0.1rem] md:pt-[0.2rem] font-custom text-[1rem] font-light lg:text-[1rem]'>Region: {country.region}</h2>
            <h2 className='pt-[0.1rem] md:pt-[0.2rem] font-custom text-[1rem] font-light lg:text-[1rem]'>Sub Region: {country.subregion}</h2>
            <h2 className='pt-[0.1rem] md:pt-[0.2rem] font-custom text-[1rem] font-light lg:text-[1rem]'>Capital: {country.capital}</h2>
            <div className='hidden md:block md:pt-[1.5rem] lg:pt-[3rem]'>
              <hgroup className='md:flex md:flex-row md:gap-[0.6rem]'>
                <h2>Border Countries: </h2>
                <section className='md:flex md:flex-row gap-[0.8rem]'>
                  {borderCountries.map((border) => (
                    <h2 key={border}><Link to={`/country/${border}`}>{border}</Link></h2>
                  ))}
                </section>
              </hgroup>
            </div>
          </hgroup>
        </div>
        <div className='flex flex-col md:flex-row pt-[3rem] whitespace-nowrap'>
          <hgroup>
            <h2 className='pt-[0.1rem] m font-custom text-[1rem] font-light md:pt-[2.7rem] lg:text-[1rem]'>Top Level Domain: {country.topLevelDomain}</h2>
            <h2 className='pt-[0.1rem] md:pt-[0.2rem] font-custom text-[1rem] font-light lg:text-[1rem]'>Currencies: {country.currencies[0].code}</h2>
            <h2 className='pt-[0.1rem] md:pt-[0.2rem] font-custom text-[1rem] font-light lg:text-[1rem]'>Languages: {country.languages[0].name}</h2>
          </hgroup>
          <div className='block md:hidden pt-[2rem]'>
            <hgroup className='flex flex-col'>
              <h1 className='pt-[0.1rem] font-custom text-[1rem] font-light'>Border Countries</h1>
              <section className='flex flex-row gap-[0.3rem] pt-[0.6rem] text-[0.5rem] sm:gap-[1rem] sm:text-[1rem]'>
                {borderCountries.map((border) => (
                  <h2 key={border}><Link to={`/country/${border}`}>{border}</Link></h2>
                ))}
              </section>
            </hgroup>
          </div>
        </div>
      </div>
    </div>
  );
}

CountryDetails.propTypes = {
  countries: PropTypes.array.isRequired,
  theme: PropTypes.string.isRequired,
};
