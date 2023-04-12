import React from 'react';
import { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import './Recommended.css';
import Form from 'react-bootstrap/Form';

const Recommended = ({ keyword, funcionId, newWeeklyMeal, getNewWeeklyMeals, changeIngredients }) => {
  const [recipes, setRecipes] = useState([]);
  
  let url = `/recipes/weeklymealsaved/${keyword}`;

  if (newWeeklyMeal === 1){
    url = `/recipes/weeklymeal/${keyword}`;  
    getNewWeeklyMeals(0);
  }  

  const fetchRecipes = async () => {
    try {
      const response = await api.get(url);
      setRecipes(response.data);
    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [url]);

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  

  return (
    <div key="recipe-container" className="container">      
    {
      recipes?.map((recipe) =>    
        <div key={recipe.redbId}>
          { funcionId(recipe.redbId)}
          <div key="title" className="title">
            <h1 key="category-title" >{capitalizeWords(keyword)}</h1>
          </div>
          <div key="name" className="name">
            <h2 key="recipe-name">{recipe.name}</h2>
          </div>
          <div key="picture-container" className="flex-container">
            {recipe.picture && (
              <img src={recipe.picture} alt="" className="recipe-img" />
            )}
            <div key="ingredients-container" className="cocktail-infos">    
              <div key="ingredients-row" className="row">
                <h3 key="ingredients-label" className="label">Ingredientes: </h3>
                <p key="ingredients-text" className="text">
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {recipe.ingredients?.map(recp => 
                    <Form.Check key={recp} type="checkbox" value={recp} label={recp}  onChange={changeIngredients}/>
                  )}
                  </Form.Group>
                </p>              
              </div>     
                       						
            </div>                        
          </div>
          <div key="directions-container" className="row">
                <h3 key="directions-label" className="label">Preparación: </h3>
                <p key="directions-text" className="text">
                  {recipe.directions?.map((direc) => 
                    <p key={direc} className="text">{direc}</p>
                  )}
                </p>
              </div>
        </div>
      )
    }
    </div>
  );
};
  
  
export default Recommended;