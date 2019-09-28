import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import {Link} from 'react-router-dom';
import FeaturedRoom from '../Components/FeaturedRoom';


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title='Gorgeous Rooms' subtitle='Deluxe rooms starting at $60.00'>
                    <Link to='/room' className='btn-primary'>Our Rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRoom/>
        </>
    );
}
