import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import SingleCountryDetails from '../components/SingleCountryDetails';
import { useParams } from 'react-router-dom';

const url = `https://restcountries.com/v3.1/name`;

const SingleCountry = () => {
   const [loading, setLoading] = useState(true);
   const [country, setCountry] = useState([]);

   let { name } = useParams();
   const slug = name.replace(/-/g, ' ');
   console.log(slug);

   const fetchCountry = async () => {
      setLoading(true);
      try {
         const response = await fetch(`${url}/${slug}?fullText=true`);
         const data = await response.json();
         setCountry(...data);
         setLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchCountry();
      // eslint-disable-next-line
   }, [slug]);

   if (loading) {
      return <Loading />;
   }

   console.log(country);

   return <>{country && <SingleCountryDetails country={country} />}</>;
};

export default SingleCountry;
