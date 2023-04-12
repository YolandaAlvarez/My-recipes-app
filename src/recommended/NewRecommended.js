import React from 'react';
import { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import './Recommended.css';
import Form from 'react-bootstrap/Form';

const NewRecommended = ({ keyword, funcionId}) => {
  const [recipes, setRecipes] = useState([]);
  
  const url = `/recipes/weeklymeal/${keyword}`;
  
  const fetchRecipes = async () => {
    try {
      console.log(url);
      const response = await api.get(url);
      setRecipes(response.data);
    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const funct = (str) => {
    return funcionId(str);
  };

  return (
    <div className="container">      
    {
      recipes?.map((recipe) =>    
        <div>
          { funct(recipe.redbId)}
          <div key="title" className="title">
            <h1>{capitalizeWords(keyword)}</h1>
          </div>
          <div key="name" className="name">
            <h2>{recipe.name}</h2>
          </div>
          <div key="flex-container" className="flex-container">
            {recipe.picture && (
              <img src={recipe.picture} alt="" className="recipe-img" />
            )}
            <div className="cocktail-infos">
              
              <div className="row">
                <h3 className="label">Categoria: </h3>
                <p className="text">{recipe.keywords}</p>
              </div>
              <div className="row">
                <h3 className="label">Ingredientes: </h3>
                <p className="text">
                  {recipe.ingredients?.map((recp) => 
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={recp} />
                    </Form.Group>
                  )}
                </p>              
              </div>              						
            </div>            
          </div>
          <div className="row">
                <h3 className="label">Preparación: </h3>
                <p className="text">
                  {recipe.directions?.map((direc) => 
                    <p className="text">{direc}</p>
                  )}
                </p>
              </div>
        </div>
      )
    }
    </div>
  );
};
  
  
export default NewRecommended;