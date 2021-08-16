import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({ setSearch, setRegion, search, region }) => {
   const searchRegion = (e) => {
      setRegion(e.target.value);
      setSearch('');
   };

   return (
      <div className='section container'>
         <div className='forms'>
            <form className='search-form'>
               <FaSearch className='icon' />
               <input
                  aria-label='country'
                  type='text'
                  placeholder='Search for a country...'
                  name='country'
                  value={search}
                  onChange={(e) => {
                     setSearch(e.target.value);
                     setRegion('');
                  }}
               />
            </form>
            <form className='select-form'>
               <div className='focus'>
                  <select
                     aria-label='regions'
                     name='regions'
                     id='region-select'
                     onChange={searchRegion}
                     value={region}
                  >
                     <option value='all' disabled hidden>
                        Filter by Region
                     </option>

                     <option value='all'>All Regions</option>
                     <option value='africa'>Africa</option>
                     <option value='americas'>Americas</option>
                     <option value='asia'>Asia</option>
                     <option value='europe'>Europe</option>
                     <option value='oceania'>Oceania</option>
                  </select>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SearchForm;
