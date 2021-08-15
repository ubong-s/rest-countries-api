import React from 'react';
import Country from './Country';
import Loading from './Loading';

const CountryList = ({ loading, nations }) => {
   if (loading) {
      return <Loading />;
   }

   if (nations.length < 1) {
      return (
         <div className='section-center'>
            <h2> No countries match your search</h2>
         </div>
      );
   }

   return (
      <section className='section container'>
         <div className='countries'>
            {nations.map((item) => {
               return <Country key={item.numericCode} {...item} />;
            })}
         </div>
      </section>
   );
};

export default CountryList;
