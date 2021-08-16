import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({
   name,
   flag,
   population,
   callingCodes,
   region,
   capital,
   numericCode: id,
}) => {
   const newName = name.replace(/ /g, '-');

   console.log(newName);

   return (
      <Link to={`/country/${newName}`} className='country'>
         <img src={flag} alt={name} className='flag' />
         <div className='country-info'>
            <h2 className='country-name'>{name}</h2>
            <p>
               Population: <span>{population.toLocaleString('en')}</span>
            </p>
            <p>
               Region: <span>{region}</span>
            </p>
            <p>
               Capital: <span>{capital}</span>
            </p>
         </div>
      </Link>
   );
};

export default Country;
