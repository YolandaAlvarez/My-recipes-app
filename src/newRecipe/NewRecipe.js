import { useRef } from 'react';
import api from '../api/axiosConfig';
import RecipeForm from '../recipeForm/RecipeForm';

import React from 'react'

const NewRecipe = ({}) => {

    const recipeNameF = useRef();
    const recipeDescriptionF = useRef();
    const recipeVideoF = useRef();
    const recipeKeywordsF = useRef();
    const recipePictureF = useRef();
    const recipeIngredientsF = useRef();
    const recipeDirectionsF = useRef();    

    const addRecipe = async (e) =>{
        e.preventDefault();

        const recpName = recipeNameF.current;
        const recpDes = recipeDescriptionF.current;
        const recpVid = recipeVideoF.current;
        const recpKeyw = recipeKeywordsF.current;
        const recpPict = recipePictureF.current;
        const recpIngr = recipeIngredientsF.current;
        const recpDirec = recipeDirectionsF.current;

        try
        {
            const response = await api.post("/recipes/newrecipe", {
                recipeName:recpName.value,
                recipeDescription:recpDes.value,
                recipeVideo:recpVid.value,
                recipeKeywords:recpKeyw.value,
                recipePicture:recpPict.value,
                recipeIngredients:recpIngr.value,
                recipeDirections:recpDirec.value
            });

            //const updatedReviews = [...reviews, {body:rev.value}];
                
            recpName.value = "";
            recpDes.value = "";
            recpVid.value = "";
            recpKeyw.value = "";
            recpPict.value = "";
            recpIngr.value = "";
            recpDirec.value = "";
    
            //setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }

  return (
    <div>
        <RecipeForm handleSubmit={addRecipe}  
            recipeNameF = {recipeNameF} 
            recipeDescriptionF = {recipeDescriptionF}
            recipeVideoF = {recipeVideoF}
            recipeKeywordsF = {recipeKeywordsF}
            recipePictureF = {recipePictureF}
            recipeIngredientsF = {recipeIngredientsF}
            recipeDirectionsF = {recipeDirectionsF}
        />
    </div>
  )
}

export default NewRecipe