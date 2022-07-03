//récupération des datas de recettes
async function getRecipes() {
	fetch('../../data/recipes.json')
	.then((response) => response.json())
	.then((datas) => {
		let allRecipes = datas.recipes
		let ingredients =  allRecipes.map((recipes) => recipes.ingredients)
		let ingredientsList =[];
		ingredients.map((ingredients) => ingredients.map((ingredient) => ingredientsList.push(ingredient.ingredient)));
		let ingredientsListSort = Array.from(new Set(ingredientsList.sort(compareIngredient)))
		showRecipes(allRecipes)
		sortRecipes(allRecipes)
		showIngredients(ingredientsListSort)
		sortIngredients(ingredientsListSort)
		refreshList(allRecipes, ingredientsListSort)
	})
	.catch((err) => console.log('==== error ====', err))
}

getRecipes()
