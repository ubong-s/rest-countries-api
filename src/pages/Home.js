import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import SearchForm from '../components/SearchForm';

const url = 'https://restcountries.com/v3.1';

const Home = () => {
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState('');
   const [region, setRegion] = useState('');
   const [nations, setNations] = useState([]);

   const fetchNations = async () => {
      setLoading(true);
      try {
         if (search.trim() !== '') {
            const response = await fetch(`${url}/name/${search}`);
            let data;
            data = await response.json();
            if (data.status === 404) {
               data = [];
            }

            setNations(data);
            setLoading(false);
         } else if (region.trim() !== '') {
            let response;
            if (region === 'all') {
               response = await fetch(`${url}/all`);
            } else {
               response = await fetch(`${url}/region/${region}`);
            }
            const data = await response.json();
            setNations(data);
            setLoading(false);
         } else {
            const response = await fetch(`${url}/all`);
            const data = await response.json();

            setNations(data);
            setLoading(false);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchNations();
      // eslint-disable-next-line
   }, [search, region]);

   return (
      <main>
         <SearchForm
            region={region}
            search={search}
            setSearch={setSearch}
            setRegion={setRegion}
         />
         <CountryList nations={nations} loading={loading} />
      </main>
   );
};

export default Home;
