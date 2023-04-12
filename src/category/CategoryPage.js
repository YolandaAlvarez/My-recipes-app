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
  },[])

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div>
      <div className='recipes-container'>
        {capitalizeWords(category)}
        {
          recetasKey?.map((receta) =>
            <div className='recp-pic-ctr' key={receta.redbId}>
              <Link to={`/receta/${receta.redbId}`}> 
                <img className='recp-pic' src={receta.picture} alt={receta.redbId} onClick={() => <Recipe />} /> 
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default CategoryPage