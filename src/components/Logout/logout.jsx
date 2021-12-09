import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

const Logout = (props) => {

    const deleteToken = () => {
        localStorage.removeItem('token');
        window.location = '/';
    }

    return(
        <div align="center">
            <h2>Are you sure you want to logout?</h2>
            <br/>
            <button type="submit" onClick={() => deleteToken()}>Logout</button>
            {/* <button type="submit" onClick={() => localStorage.removeItem('token')}>Logout</button> */}
            <button type="submit" onClick={() => window.location = '/'}>Return Home</button>
        </div>
    )
};

export default Logout