import React from 'react';
import Panel from '../panel/Panel';
import Hero from '../hero/Hero';

function Home({ }) {

  return (
    <div>
      <Hero />
      <Panel keyword = {"desayuno"}/>
      <Panel keyword = {"comida"}/>
      <Panel keyword = {"cena"}/>
    </div>
  )

}

export default Home