import React from 'react';

function CountryCard({ selectedCountry, country }) {


    const selectCountry = () =>{
        selectedCountry(country)
    }
    return (
        <div className='country-card' key={country.name.common} onClick={selectCountry}>
            <img className="country-flag" src={country.flags.png} alt='country flag'></img>
            <div className='country-card-information'>
                <h2>{country.name.common}</h2>
                <br />
                <div>
                    <p><span>Population</span>: {country.population}</p>
                    <p><span>Region</span>: {country.region}</p>
                    <p><span>Capital</span>: {country.capital}</p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;