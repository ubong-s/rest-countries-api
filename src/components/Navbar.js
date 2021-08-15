import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
   return (
      <nav className='top-bar'>
         <div className='container top-bar-wrap'>
            <Link to='/'>
               <h1>Where in the world?</h1>
            </Link>
            {theme === 'light-theme' ? (
               <button
                  type='button'
                  className='btn toggle-btn'
                  onClick={toggleTheme}
               >
                  <FaMoon className='icon' /> Dark Mode
               </button>
            ) : (
               <button
                  type='button'
                  className='btn toggle-btn'
                  onClick={toggleTheme}
               >
                  <FaSun className='icon' /> Light Mode
               </button>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
