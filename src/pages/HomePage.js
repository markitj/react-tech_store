import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero title='Awesome Gadgets' max='true'>
        <Link to='/products' className='main-link' style={{ margin: '2rem' }}>
          our products
        </Link>
      </Hero>
    </React.Fragment>
  );
}
