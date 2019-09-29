import React from 'react';
import Hero from '../Components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../Components/Banner';

export default function Error() {
    return (<Hero Hero='errorHero'>
        <Banner title='404' subtitle='Page Not Found'>
            <Link to='/' className='btn-primary'>Back To Home</Link>
        </Banner>
    </Hero>);
}

