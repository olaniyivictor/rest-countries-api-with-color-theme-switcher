import PropTypes from 'prop-types';
import './main.css';
import SearchBar from './SearchBar';
import OptionList from './OptionList';
import { useEffect } from 'react';
import Country from './Country';
import {Link} from 'react-router-dom'
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';


export default function CountryList({ search, setSearch, theme, regions, selected, setSelected,countries,setCountries,loading,setLoading,error,setError }) {
 
  function handleregion(e){
    const selectedvalue =(e.target.options[e.target.selectedIndex].value);
    setSelected(selectedvalue === 'all' ? '' : selectedvalue)

  }
  
  useEffect(function () {
    async function fetchCountries() {

      try { 
        
        const response = await fetch(`../src/data.json`);
        if (!response.ok) {
          throw new Error(`Something went wrong while fetching the data`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error(err.message);
      
  //settheError
      }
      finally{
        setLoading(false)
      }
    
    }
    fetchCountries();
  }, []);
  // Filter countries based on the search query and selected
 const filteredCountries = countries.filter((country)=>{
  //if the country name is in lowercase,the incldes return true and search it. 
  const nameMatch = country.name.toLowerCase().includes(search.toLowerCase());
  const selectMatch = !selected || country.region === selected;
  return nameMatch && selectMatch

 })
  
  return (
    <div>
      <div className='flex flex-col md:flex md:justify-between md:p-[4rem] p-[1.2rem] md:flex-row'>
        <div>
          <SearchBar>
            <input
              type='search'
              placeholder='Search for a country...'
              name='search'
              className={`${theme === 'light' ? 'bg-White' : 'bg-DarkBlue'} md:w-[20rem] lg:w-[28rem] xl:w-[32rem] w-[99%] h-[3rem] pl-[3rem] sm:w-[99%] flex justify-center items-center content-center shadow-red-500 md:shadow-lg rounded-[0.3rem] focus:outline-none`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchBar>
        </div>
        <div>
          <OptionList>
            <div className={`${theme === 'light' ? 'bg-White' : 'bg-DarkBlue text-VeryLightGray'} flex justify-between rounded-[0.3rem] items-center flex-row shadow-red-500 md:shadow-lg mt-[2.4rem] md:mt-[0rem] whitespace-nowrap  z-[100] md:w-[100%] w-[60%] sm:w-[43%] `}>
              <select  name='devices'className={`${theme === 'light' ? 'bg-White': 'bg-DarkBlue'} flex justify-center gap-[6rem] w-[90%]  md:w-[12rem] h-[3rem] pl-[1rem] focus:outline-none rounded-[0.3rem] `} onClick={handleregion}>
                <option value='all'>All</option>
                {regions.map((region)=>(
                  <option value={region} key={region}>{region}</option>
                ))}
              </select>
            </div>
          </OptionList>
        </div>
      </div>
      
       <div className='p-[2rem] flex flex-col md:flex-row flex-wrap gap-[2rem] md:gap-[3rem] md:pl-[4rem] md:pt-[0.1rem] xl:gap-[3.3rem]'>
        {filteredCountries.map((country) => (
          <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
          <Country country={country} theme={theme} search={search} setSearch={setSearch} selected={selected} />
        </Link>
        ))}
      </div>
      

    </div>
  );
}

CountryList.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  theme: PropTypes.string.isRequired,
  regions: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  countries:PropTypes.array.isRequired,
  setCountries:PropTypes.func.isRequired,
  loading:PropTypes.bool.isRequired,
  setLoading:PropTypes.func.isRequired,
  error:PropTypes.string.isRequired,
  setError:PropTypes.func.isRequired,
};
