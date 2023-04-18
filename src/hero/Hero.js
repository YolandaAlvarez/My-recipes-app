import React from 'react';
import './Hero.css';
import api from '../api/axiosConfig';
import { useState, useEffect } from 'react';
import Recipe from '../recipe/Recipe';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  return (
    <div>
      <div className='carousel-container'>
        <Slider {...settings}>
        {
          recipes?.map((recipe) =>
            <div className='pic-container-hero' key={recipe.redbId}>
              <Link to={`/receta/${recipe.redbId}`}>
                <img className='recipe-pic-hero' src={recipe.picture} alt={recipe.redbId} />
              </Link>
            </div>
          )
        }
        </Slider>
      </div>
    </div>    
  )
}

export default Hero