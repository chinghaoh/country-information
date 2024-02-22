import { useState } from "react";
function SearchFilterComponent({searchCountry, filterRegion}) {


    const [searchTerm, setSearchTerm] = useState('');

    // Handler function to update the searchTerm state
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };


    const countryInput = () =>{
        searchCountry(searchTerm)
    }

    const handleRegion = (region) => {
        filterRegion(region);
    };

    return (
        <div className='search-filter-bar'>
            <div className='search'>
                <input type='text' placeholder='Search for a country' onChange={handleInputChange} value={searchTerm}></input>
                <button onClick={countryInput}>Search</button>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Filter by region</button>
                <div class="dropdown-content">
                    <p onClick={() => handleRegion("")}>All</p>
                    <p onClick={() => handleRegion("africa")}>Africa</p>
                    <p onClick={() => handleRegion("america")}>America</p>
                    <p onClick={() => handleRegion("asia")}>Asia</p>
                    <p onClick={() => handleRegion("europe")}>Europe</p>
                    <p onClick={() => handleRegion("oceania")}>Oceania</p>
                </div>
            </div>
        </div>)
}

export default SearchFilterComponent