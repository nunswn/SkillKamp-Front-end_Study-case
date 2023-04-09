import React from 'react'
import { useEffect } from 'react';
import './Home.css'
import Banner from '../component/Banner'
import NewArrival from '../component/NewArrival';

const Home = () => {

  useEffect(() => {
      document.title = 'Home | happy kids';
  }, []);  

  return (
    <div>
    <Banner />
    <NewArrival/>
    </div>
  )
}

export default Home
