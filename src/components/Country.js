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
   return (
      <Link to={`/country/${name}`} className='country'>
         <img src={flag} alt={name} className='flag' />
         <div className='country-info'>
            <h4 className='country-name'>{name}</h4>
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
