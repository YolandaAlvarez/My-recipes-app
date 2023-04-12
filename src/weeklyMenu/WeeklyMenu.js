import React from 'react';
import Recommended from '../recommended/Recommended';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import api from '../api/axiosConfig';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from '../pdf/PdfDocument';
import './WeeklyMenu.css';

const WeeklyMenu = () => {
  
  /**
   * Manejo para obtener los redbId de cada receta 
   */

  const [desayunoId, setDesayunoId] = useState([]);
  const [comidaId, setComidaId] = useState([]);
  const [cenaId, setCenaId] = useState([]);

  const funcionIdDes = redbId => {
    setDesayunoId(redbId);    
  };
  const funcionIdCom = redbId => {
    setComidaId(redbId);    
  };
  const funcionIdCen = redbId => {
    setCenaId(redbId);    
  };
  /**---- END-----  */

  /**
   * Manejo para crear EL MENU SEMANAL 
   */

  const allRecps = [];  
  const [newWeeklyMeal, setNewWeeklyMeal] = useState(0);

  const functionJoinRecp = () => {    
    allRecps.push(desayunoId);   
    allRecps.push(comidaId);   
    allRecps.push(cenaId);    
  };

  const saveWeeklyMeals = (allRecps) => {
    const url = `/recipes/save`;
    console.log(allRecps[0]);
    const saveRecipes = async () => {
      try {
        const response = await api.post(url, {
            breakfast:allRecps[0],
            lunch:allRecps[1],
            dinner:allRecps[2]
        });
        console.log("saved");
      } 
      catch(err) {
        console.log(err);
      }
    }
    saveRecipes();
  };

  const getNewWeeklyMeals = (valueMeal) => {
    setNewWeeklyMeal(valueMeal);
  };   
  /**---- END-----  */
  
  /**
   * Manejo para crear la lista de compras 
   */
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (value) => {
    setIngredients([...ingredients, value]);
  }

  const deleteIngredient = (value) => {
    setIngredients( ingredients.filter((ingredient) => ingredient !== value))
  }  

  const changeIngredients = ({ target: { value, checked } }) => {
    console.log(value);
    console.log(checked);
    
    if(checked){      
      addIngredient(value);
    }
    else {
      deleteIngredient(value);
    }
  };
  /**---- END-----  */

  return (
    <div>
      {functionJoinRecp()}      
      <div className='buttons-container'> 
        <Button className="save-button" variant="info" onClick={() => saveWeeklyMeals(allRecps) } >Guardar</Button>
        <Button className="new-button" variant="info" onClick={() => getNewWeeklyMeals(1) } >Nuevo Menú</Button>        
        <div className="download-button">        
          <PDFDownloadLink 
            document={<PdfDocument ingredients={ingredients}/>} 
            fileName="Lista-de-compras.pdf" >
            <Button className="list-button" variant="info" >Lista de compras</Button>
          </PDFDownloadLink>        
        </div>
      </div>
      <Recommended key={"desayuno"} keyword = {"desayuno"} funcionId = {funcionIdDes} newWeeklyMeal = {newWeeklyMeal} getNewWeeklyMeals = {getNewWeeklyMeals} changeIngredients = {changeIngredients} />
      <Recommended key={"comida"} keyword ={ "comida"}  funcionId = {funcionIdCom} newWeeklyMeal = {newWeeklyMeal} getNewWeeklyMeals = {getNewWeeklyMeals} changeIngredients = {changeIngredients}  />
      <Recommended key={"cena"} keyword = {"cena"}  funcionId = {funcionIdCen} newWeeklyMeal = {newWeeklyMeal} getNewWeeklyMeals = {getNewWeeklyMeals} changeIngredients = {changeIngredients}  /> 
      
    </div>
  )
}

export default WeeklyMenu