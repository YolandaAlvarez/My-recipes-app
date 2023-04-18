import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axiosConfig';
import './Recipe.css';
import Form from 'react-bootstrap/Form';

const Recipe = () => {
	const [recipe, setRecipe] = useState([]);
	const navigate = useNavigate();
	const { redbId } = useParams();
  const url = `/recipes/${redbId}`;

  const fetchRecipe = async () => {
    try {
      const response = await api.get(url);
      setRecipe(response.data);
    } 
    catch(err) {
      console.log(err);
    }
  }

	useEffect(() => {
		fetchRecipe();
	}, [redbId]);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<div className="title">
					<h1>{recipe.name}</h1>
				</div>
				<div className="row">
					<h3 className="label">Categoria: </h3>
					<p className="text">{recipe.keywords}</p>
				</div>
				<div className="row">
					<h3 className="label">Descripcion: </h3>
					<p className="text">{recipe.description}</p>
				</div>
				<div className="flex-container">
					<img src={recipe.picture} alt="" className="recipe-img" />
					<div className="cocktail-infos">
						<div className="row">
							<h3 className="label">Ingredientes: </h3>
							<p className="text">
								{
									recipe.ingredients?.map((recp) => 
										<Form.Group key={recp} className="mb-3" controlId="formBasicCheckbox">
											<Form.Check type="checkbox" label={recp} />
										</Form.Group>	)
								}
							</p>              
						</div>											
					</div>
				</div>
				<div className="row">
							<h3 className="label">Preparacion: </h3>
								<p className="text">
									{recipe.directions?.map((direc) => 
									<p className="text">{direc}</p>
									)}
								</p>
						</div>	
			</div>
		</div>
	);
};

export default Recipe;
