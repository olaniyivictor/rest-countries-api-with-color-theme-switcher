import { useEffect, useState } from 'react';
import './main.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import the necessary components
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';

export default function App() {
  // Store the theme in useState
  const [theme, setTheme] = useState('light');
  // Set a useState for the searchbar
  const [search, setSearch] = useState('');
  // Set a useState for the selected region
  const [selected, setSelected] = useState('');
  //setting a useStare for Countries
  const [countries, setCountries] = useState([]);
  //set up a useState for loading state
  const [loading,setLoading] =useState(false);
  //set up a useState for Error handling
  const [error,setError] = useState('');
  // Using useEffect to render the theme
  useEffect(() => {
    // Get the theme from local storage or use the default
    const savedTheme = localStorage.getItem('themeStorage') || theme;
    // Update the useState
    setTheme(savedTheme);
  }, [theme]);

  function handleSwitcher() {
    console.log('a');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    // Store the theme in local storage by assigning a key and a value
    localStorage.setItem('themeStorage', newTheme);
    setTheme(newTheme);
  }

  return (
    <Router>
      <div className='w-full h-[100vh]'>
        <div className={`${theme === 'light' ? 'bg-VeryLightGray text-VeryDarkBlue' : 'bg-VeryDarkBlue text-White'} w-full min-h-[100vh]`}>
          <Header onSwitcher={handleSwitcher} theme={theme} />
          <Routes>
            <Route path='/' element={<CountryList theme={theme} regions={["Africa", "Asia", "Europe", "Oceania", 'America']} search={search} setSearch={setSearch} selected={selected} setSelected={setSelected} countries={countries} setCountries={setCountries}  loading={loading} setLoading={setLoading} error={error} setError={setError}/>} />
            <Route path='/country/:alpha3code' element={<CountryDetails  theme={theme} countries={countries} setCountries={setCountries}/>} />
            
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
