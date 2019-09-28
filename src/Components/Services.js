import React, { Component } from 'react';
import {FaCocktail, FaShuttleVan, FaBeer} from 'react-icons/fa';
import {GiKnifeFork} from 'react-icons/gi';
import Title from './Title';

export default class Services extends Component {
  state={
    services:[
      {
        icon: <FaCocktail/>,
        title: "Free Cocktails",
        info: 'We offer free drinks here'
      },
      {
        icon: <GiKnifeFork/> ,
        title: 'Free Breakfast',
        info: 'We offer free breakfast with different cuisines'
      },
      {
        icon: <FaShuttleVan/>,
        title: 'Free Shuttle',
        info: "For the convenience of our customers, we provide shuttle to airport and around town"
      },
      {
        icon: <FaBeer/>,
        title: 'Wines and Liquor',
        info: 'When it comes to drinks, we have a collection from which you will definitely find your favorites'
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='Services' />
      <div className='services-center'>
        {this.state.services.map((item, index)=> {
          return (<article key={index} className='service'>
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>);
        })}
      </div>
      </section>
    );
  }
}
