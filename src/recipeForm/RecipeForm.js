import {Form,Button} from 'react-bootstrap';

const RecipeForm = ({handleSubmit, recipeNameF, recipeDescriptionF, recipeVideoF, recipeKeywordsF, recipePictureF, recipeIngredientsF, recipeDirectionsF}) => {
  return (

    <Form>
        <Form.Group className="col col-sm-4" controlId="nameText">
            <Form.Label>Nombre de la Receta</Form.Label>
            <Form.Control ref={recipeNameF} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="col col-sm-4" controlId="descriptionText">
            <Form.Label>Descripcion de la Receta</Form.Label>
            <Form.Control ref={recipeDescriptionF} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="col col-sm-8" controlId="videoText">
            <Form.Label>Video de la Receta</Form.Label>
            <Form.Control ref={recipeVideoF} as="textarea" rows={1} placeholder="Ejemplo: https://www.youtube.com/watch?v=5BQ6Cs3s-MM"/>
        </Form.Group>
        <Form.Group className="col col-sm-8" controlId="keywordsText">
            <Form.Label>Categoria</Form.Label>
            <Form.Control ref={recipeKeywordsF} as="textarea" rows={1} placeholder="Ejemplo: Desayuno"/>
        </Form.Group>
        <Form.Group className="col col-sm-8" controlId="pictureText">
            <Form.Label>Imagen de la Receta</Form.Label>
            <Form.Control ref={recipePictureF} as="textarea" rows={1} placeholder="Ejemplo: https://cdn7.kiwilimon.com/brightcove/10056/10056.jpg"/>
        </Form.Group>
        <Form.Group className="col col-sm-8" controlId="ingredientsText">
            <Form.Label>Ingredientes</Form.Label>
            <Form.Control ref={recipeIngredientsF} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="col col-sm-8" controlId="directionsText">
            <Form.Label>Preparacion</Form.Label>
            <Form.Control ref={recipeDirectionsF} as="textarea" rows={3} placeholder="Lava y desinfecta frutas y verduras"/>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Guardar</Button>
    </Form>   

  )
}

export default RecipeForm