import React from 'react';
import api from '../api/axiosConfig';
import { useState, useEffect } from 'react';
import './CategoryPage.css';
import Recipe from '../recipe/Recipe';
import {Link} from 'react-router-dom';

const CategoryPage = ({ category }) => {

  const url = `/recipes/search/${category}`;
  const [recetasKey, setRecetasKey] = useState();

  const getRecetasKey = async () => {    
    try {
      const response = await api.get(url);
      setRecetasKey(response.data);
    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRecetasKey();
  },[category])

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div>
      <div className='category-name' >
      <h1>{capitalizeWords(category)}</h1>
      </div>
      <div className='recipes-container'>                
        {
          recetasKey?.map((receta) =>
            <div className='recp-pic-container' key={receta.redbId}>
              <Link to={`/receta/${receta.redbId}`}> 
                <img className='recp-picture' src={receta.picture} alt={receta.redbId} onClick={() => <Recipe />} /> 
              </Link>
              <div className='recipe-name' >
                {receta.name}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CategoryPage