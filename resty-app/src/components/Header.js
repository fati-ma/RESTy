import '../styles/header.scss';

import React from 'react';
import {NavLink} from 'react-router-dom';
//import {Link, NavLink} from 'react-router-dom';
 class Header extends React.Component{
     render(){
        return (
            <header>
            <h1>RESTy APP</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history">History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/help">About US</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
          )
     }
 }


export default Header;