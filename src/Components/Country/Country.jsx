import { useState } from 'react';
import React from 'react';
import './County.css';


const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  // console.log(country.area.area);
  // console.log('handle Visited Countries ');
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // console.log('button clicked')
    // setVisited(true)

    //1.System
    // if(visited){
    //    setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
    // 2.System
    // setVisited(visited? false : true)
    // 3.System
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    // <div className={ `country ${visited &&'country-visited'}`}>
    <div
      className={`country border-lg text-center ${
        visited ? "country-visited" : "country-not-visited"
      }`}
    >
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.png}></img>

      <h3>Name: {country.name.common}</h3>
      <p>Population:{country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>

      <button onClick={() =>{handleVisitedFlags(country?.flags?.flags?.png);}}>
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;


// 1. inline css (style object)

//2.




