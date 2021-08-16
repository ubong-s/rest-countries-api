import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';

const getStorageTheme = () => {
   let theme = 'light-theme';
   if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
   }

   return theme;
};

function App() {
   const [theme, setTheme] = useState(getStorageTheme());
   const [loading, setLoading] = useState(true);

   const toggleTheme = () => {
      if (theme === 'light-theme') {
         setTheme('dark-theme');
      } else {
         setTheme('light-theme');
      }
   };

   useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
   }, [theme]);
   return (
      <Router>
         <Navbar toggleTheme={toggleTheme} theme={theme} />
         <Switch>
            <Route exact path='/'>
               <Home setLoading={setLoading} loading={loading} />
            </Route>
            <Route path='/country/:name'>
               <SingleCountry setLoading={setLoading} loading={loading} />
            </Route>
            <Route path='*'>
               <Error />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
