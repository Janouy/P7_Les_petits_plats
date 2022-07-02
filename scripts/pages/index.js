//récupération des datas de recettes
async function getRecipes() {
    fetch('../../data/recipes.json')
      .then((response) => response.json())
      .then((datas) => {
        const allRecipes = datas.recipes
        const recipesList = allRecipes.map((recipe) => new Recipe(recipe))
        const recipeCard = document.querySelector('.recipe-card-group')
        recipesList.forEach((recipe) => {
            recipeCard.appendChild(recipe.createRecipeCard())
        })
      })
      .catch((err) => console.log('==== error ====', err))
  }
  
getRecipes()
