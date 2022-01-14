import React, { useState, useEffect, useCallback } from 'react';
import CountryList from '../components/CountryList';
import SearchForm from '../components/SearchForm';

const url = 'https://restcountries.com/v3.1';

const Home = ({ setLoading, loading }) => {
   const [search, setSearch] = useState('');
   const [region, setRegion] = useState('');
   const [nations, setNations] = useState([]);

   const fetchNations = useCallback(async () => {
      setLoading(true);
      try {
         if (search !== '') {
            const response = await fetch(`${url}/name/${search}`);
            let data;
            data = await response.json();
            if (data.status === 404) {
               data = [];
            }

            setLoading(false);
            setNations(data);
         } else if (region !== '') {
            let response;
            if (region === 'all') {
               response = await fetch(`${url}/all`);
            } else {
               response = await fetch(`${url}/region/${region}`);
            }
            const data = await response.json();
            setLoading(false);
            setNations(data);
         } else {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setNations(data);
         }
      } catch (error) {
         console.log(error);
      }
   }, [region, search, setLoading]);

   useEffect(() => {
      fetchNations();
   }, [search, region, fetchNations]);

   return (
      <main>
         <SearchForm
            loading={loading}
            search={search}
            setSearch={setSearch}
            setRegion={setRegion}
         />
         <CountryList loading={loading} nations={nations} />
      </main>
   );
};

export default Home;
