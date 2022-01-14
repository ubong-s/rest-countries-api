import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCountryDetails = ({ country }) => {
   const {
      name,
      flags,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
      timezones,
   } = country;

   // native name
   const nativeNameKey = Object.keys(name.nativeName);
   const nativeName = name.nativeName[nativeNameKey[0]].official;

   // currency
   const currencyKey = Object.keys(currencies);
   const currency = currencies[currencyKey[0]].name;

   // language
   const languageKey = Object.keys(languages);
   const language = languages[languageKey];
   console.log(language);

   return (
      <section className='country-section'>
         <div className='container'>
            <Link to='/'>
               <button className='btn back-btn'>
                  <FaArrowLeft className='icon' />
                  Back
               </button>
            </Link>
            <div>
               <article className='single-country'>
                  <div className='flag'>
                     <img src={flags.png} alt={name.common} />
                  </div>
                  <div className='single-country-info'>
                     <h4>{name.common}</h4>
                     <div className='top-section'>
                        <div className='inner-1'>
                           <p>
                              Native name: <span>{nativeName}</span>
                           </p>
                           <p>
                              Population:{' '}
                              <span>{population.toLocaleString()}</span>
                           </p>
                           <p>
                              Region: <span>{region}</span>
                           </p>
                           <p>
                              Sub Region: <span>{subregion}</span>
                           </p>
                           <p>
                              Capital: <span>{capital}</span>
                           </p>
                        </div>
                        <div className='inner-2'>
                           <p>
                              Timezones: <span>{timezones[0]}</span>
                           </p>
                           <p>
                              Top Level Domain: <span>{tld[0]}</span>
                           </p>
                           <p>
                              Currencies: <span>{currency}</span>
                           </p>
                           <p>
                              Languages: <span>{language}</span>
                           </p>
                        </div>
                     </div>
                     {borders && (
                        <div className='btm-section'>
                           <h5>Border Countries:</h5>
                           <div className='bd-container'>
                              {borders.map((border, index) => {
                                 return <p key={index}>{border}</p>;
                              })}
                           </div>
                        </div>
                     )}
                  </div>
               </article>
            </div>
         </div>
      </section>
   );
};

export default SingleCountryDetails;
