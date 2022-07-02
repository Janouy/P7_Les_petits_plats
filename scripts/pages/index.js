//récupération des datas de recettes
async function getRecipes() {
	fetch('../../data/recipes.json')
	.then((response) => response.json())
	.then((datas) => {
		let allRecipes = datas.recipes
		sortRecipes(allRecipes)
		refreshList(allRecipes)
		showIngredients(allRecipes)
	})
	.catch((err) => console.log('==== error ====', err))
}

getRecipes()
