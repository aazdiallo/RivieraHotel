import React from 'react';
import Hero from '../Components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../Components/Banner';

export default function Rooms() {
    return (
    <Hero Hero='roomsHero'>
        <Banner title='Luxurus Rooms' subtitle='sleep better, wake up relaxed'>
            <Link to='/home' className='btn-primary'>Return Home</Link>
        </Banner>
    </Hero>);
}

