import React from 'react'
import Card from '../cards/Card';
import { CardData } from '../cards/CardData';
import Header from '../Header';


function Home() {
  return (
    <div>
        <Header />
        <Card cards={CardData} />
    </div>
    
  )
}

export default Home
