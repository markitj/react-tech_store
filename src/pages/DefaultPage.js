import React from 'react';
import Hero from '../components/Hero';
import defaultBcg from '../images/defaultBcg.jpeg';
import { Link } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <React.Fragment>
      <Hero img={defaultBcg} title='404' max='true'>
        <h2 className='text-uppercase'>page not found</h2>
        <Link to='/' className='main-link' style={{ marginTop: '2rem' }}>
          Return Home
        </Link>
      </Hero>
    </React.Fragment>
  );
}
