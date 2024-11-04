import React, { useEffect, useState } from "react";
import Recipecard from "./components/Recipecard";
import Searchbar from "./components/Searchbar";

const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const App = () => {
  const [isloading, setIsloading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsloading(true);
    const url = api + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    setRecipes(data.meals);
    setIsloading(false);
  };
  useEffect(() => {
    searchRecipes();
  }, []);
  const handlesubmit=event=>{
    event.preventDefault()
    searchRecipes()
  }

  return (
    <div className="container">
      <h1>Recipe App</h1>
      <Searchbar
      handlesubmit={handlesubmit}
      value={query}

      onChange={(event)=>setQuery(event.target.value)}
      isloading={isloading}
      />
      <div className="recipes">
        {recipes
        ? recipes.map((recipe)=>(
          <Recipecard key={recipe.idMeal } recipe={recipe} />
        )):"No Recipes!"}

      </div>
    </div>
  );
};

export default App;
