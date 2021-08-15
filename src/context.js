// import React, { useState, useContext, useEffect } from 'react';
// import { useCallback } from 'react';

// const url = 'https://restcountries.eu/rest/v2/all';

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('a');
//   const [countries, setCountries] = useState([]);

//   const fetchCountries = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       const newCountries = data.map((item, index) => {
//         const { name, flag, population, region, capital } = item;
//         console.log(item);

//         // return item;
//         return (
//           {
//             name: name,
//             image: flag,
//             population,
//             region,
//             capital,
//           },
//           index
//         );
//       });

//       setCountries(newCountries);
//     } catch (error) {
//       console.log(error);
//       setCountries([]);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCountries();
//     setLoading(false);
//   }, []);

//   return (
//     <AppContext.Provider
//       value={{ loading, searchTerm, countries, setSearchTerm }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
