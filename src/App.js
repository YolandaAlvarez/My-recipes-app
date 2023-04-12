import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './home/Home';
import Header from './header/Header';
import NotFound from './notFound/NotFound';
import CategoryPage from './category/CategoryPage';
import NewRecipe from './newRecipe/NewRecipe';
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipe from './recipe/Recipe';
import WeeklyMenu from './weeklyMenu/WeeklyMenu';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/desayunos" element={<CategoryPage category={"desayuno"} />} ></Route>
          <Route path="/comidas" element={<CategoryPage category={"comida"} />} ></Route>
          <Route path="/cenas" element={<CategoryPage category={"cena"} />} ></Route>
          <Route path="/nueva"  element={<NewRecipe /> } ></Route>
          <Route path="/receta/:redbId" element={<Recipe />} />
          <Route path="/menusemanal"  element={<WeeklyMenu /> } ></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
