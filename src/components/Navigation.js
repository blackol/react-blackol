import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to='/'>
                Accueil
            </NavLink>

            <NavLink to='/projets'>
                Projets
            </NavLink>
            
        </div>
    );
};

export default Navigation;