import React, { useEffect, useState } from 'react';
import './Style.css'
import HeaderComponent from './HeaderComponent';
import CountryDetails from './CountriesDetails';
import CountryCard from './CountryCard';
import SearchFilterComponent from './SearchFilterComponent';


function App() {

  let [countries, setCountries] = useState(null)
  let [copyCountries, setCopyCountries] = useState(null)

  let [selectedCountry, setSelectedCountry] = useState(null)
  

  const selectCountry = (selectCountry) => {
    setSelectedCountry(selectCountry)
  };


  const filterRegion = (selectRegion) =>{
    if(selectRegion === ''){
      setCountries(copyCountries);
      return
    }

    fetch(`https://restcountries.com/v3.1/region/${selectRegion}`)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const searchCountry = (input) =>{

    if(input === ''){
      setCountries(copyCountries);
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${input}`)
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const returnHomepage = () => {
    setSelectedCountry(null)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,population,capital,region,subregion,tld,currencies,languages,borders,flags")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCountries(data);
        setCopyCountries(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"></meta>
      </head>
      <HeaderComponent></HeaderComponent>
      <main>
      {countries && selectedCountry === null &&<SearchFilterComponent searchCountry={searchCountry} filterRegion={filterRegion}></SearchFilterComponent>}
        <div className='country-card-container'>
          {countries && selectedCountry === null && countries.map(country => (
            <CountryCard key={country.name.common} country={country} selectedCountry={selectCountry}/>
          ))}
        </div>
        <div className='country-details-container'>
          {selectedCountry && <CountryDetails country={selectedCountry} returnHomepage={returnHomepage}></CountryDetails>}
        </div>
      </main>
    </div>
  );
}

export default App;