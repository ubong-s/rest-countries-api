import React, { useState, useEffect, useCallback } from 'react';
import Loading from '../components/Loading';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

const url = `https://restcountries.eu/rest/v2/callingcode`;

const SingleCountry = ({ loading, setLoading }) => {
   const [country, setCountry] = useState([]);
   let { id } = useParams();

   const fetchCountry = useCallback(async () => {
      setLoading(true);
      try {
         const response = await fetch(`${url}/${id}`);
         const data = await response.json();
         setLoading(false);
         setCountry(data);
      } catch (error) {
         console.log(error);
      }
   }, [id, setLoading]);

   useEffect(() => {
      fetchCountry();
   }, [fetchCountry]);

   if (loading) {
      return <Loading />;
   }

   return (
      <>
         <section className='country-section'>
            <div className='container'>
               <Link to='/'>
                  <button className='btn back-btn'>
                     <FaArrowLeft className='icon' />
                     Back
                  </button>
               </Link>
               <div>
                  {country.map((item) => {
                     const {
                        numericCode,
                        name,
                        flag,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borders,
                     } = item;
                     return (
                        <article key={numericCode} className='single-country'>
                           <div className='flag'>
                              <img src={flag} alt={name} />
                           </div>
                           <div className='single-country-info'>
                              <h4>{name}</h4>
                              <div className='top-section'>
                                 <div className='inner-1'>
                                    <p>
                                       Native name: <span>{nativeName}</span>
                                    </p>
                                    <p>
                                       Population:{' '}
                                       <span>
                                          {population.toLocaleString()}
                                       </span>
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
                                       Top Level Domain:{' '}
                                       <span>{topLevelDomain}</span>
                                    </p>
                                    <p>
                                       Currencies:{' '}
                                       <span>{currencies[0].name}</span>
                                    </p>
                                    <p>
                                       Languages:{' '}
                                       <span>{languages[0].name}</span>
                                    </p>
                                 </div>
                              </div>
                              {borders.length > 0 && (
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
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   );
};

export default SingleCountry;
