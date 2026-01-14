import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import Navigation from './navbar/Navigation';

const RootLayout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout