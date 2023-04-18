import React from 'react';
import './Panel.css';
import api from '../api/axiosConfig';
import { useState, useEffect } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Panel = ({ keyword }) => {

  const url = `/recipes/search/${keyword}`;
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
  },[keyword])

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='panel-container'>
      <div className="title">
        <h1>{capitalizeWords(keyword)}</h1>
      </div>
      <div className='key-recipe-container'>
                
        {
          recetasKey?.map((receta) =>
            <CardGroup className='recipe-pic-container' key={receta.redbId}>           
              <Card className='recipe-card'>
                <Card.Img className='recipe-pic' variant="top" src={receta.picture} alt={receta.redbId} />
                <Card.Body className='recipe-body' >
                  <Card.Title className='recipe-body-title'>{receta.name}</Card.Title>
                  <Card.Text className='recipe-body-text'> {receta.description} </Card.Text>
                  <Button variant="primary">
                    <Link to={`/receta/${receta.redbId}`}>
								      <div className="btn">Receta</div>
							      </Link>
                  </Button>
                </Card.Body>
              </Card>
          </CardGroup>
          )
        }
      </div>
    </div>
  )
}

export default Panel