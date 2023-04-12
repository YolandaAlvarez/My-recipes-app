import React from 'react';
import './Hero.css';
import api from '../api/axiosConfig';
import { useState, useEffect } from 'react';
import Recipe from '../recipe/Recipe';
import {Link} from 'react-router-dom';

const Hero = ({ }) => {

  const [recipes, setRecipes] = useState();

  const getRecipes = async () => {    
    try {
      const response = await api.get("/recipes");
      setRecipes(response.data);
    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRecipes();
  },[])


  return (
    <div>
      <div className='carousel-container'>
      {
        recipes?.map((recipe) =>
          <div className='pic-container-hero' key={recipe.redbId}>
            <Link to={`/receta/${recipe.redbId}`}>
              <img className='recipe-pic-hero' src={recipe.picture} alt={recipe.redbId} />
            </Link>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Hero