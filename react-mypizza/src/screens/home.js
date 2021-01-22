import React from 'react';

import styled from 'styled-components'
import Header from '../components/header'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>Page d'Accueil</p>
            <Link to='/'>To Login</Link>
        </div>
    );
};

export default Home;