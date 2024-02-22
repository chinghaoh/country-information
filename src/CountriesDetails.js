import React from 'react';

function CountryDetails({ country, returnHomepage }) {

  const back = () => {
    returnHomepage()
  }

  /*Misschien svg gebruiken ipv png */
  return (
    <div>
      <button className='back-button' onClick={back}>Back</button>
      <div className='country-card country-details-grid' key={country.name.common}>
        <div className='country-flag-container'>
          <img className="country-flag-specific" src={country.flags.svg} alt='country flag'></img>
        </div>
        <div className='country-card-information'>
          <h2>{country.name.common}</h2>
          <br />
          <div className='information-flex'>
            <div>
              <p>Native name: {country.name.official}</p>
              <p><span style={{ fontWeight: 'bold' }}>Population</span>: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
            </div>
            <br />
            <div>
              <p>Top Level Domain: {country.tld}</p>
              <p>Currencies: {Object.entries(country.currencies).map(([key, currencyInfo]) => (
                <span key={key}>{currencyInfo.name}</span>
              ))}</p>
              <p>Languages: {Object.values(country.languages).join(', ')}</p>
            </div>
          </div>
          <br />
          <p>Border countries:</p>
          <div className='border-countries-container'>
            {country.borders.map(border =>
              <div className='border-countries'>
                {border}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;