//affiche les recettes 
function showRecipes(allRecipes){
	let recipesList = allRecipes.map((recipe) => new Recipe(recipe))
		const recipeCard = document.querySelector('.recipe-card-group')
		recipesList.forEach((recipe) => {
			recipeCard.appendChild(recipe.createRecipeCard())
		})
}