import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({
   name,
   flags,
   population,
   region,
   capital,
   numericCode: id,
}) => {
   const slug = name.common.replace(/ /g, '-');

   return (
      <Link to={`/country/${slug}`} className='country'>
         <img src={flags.png} alt={name.common} className='flag' />
         <div className='country-info'>
            <h2 className='country-name'>{name.common}</h2>
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
