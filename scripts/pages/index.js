//récupération des datas de recettes
async function getRecipes() {
	fetch('../../data/recipes.json')
		.then((response) => response.json())
		.then((datas) => {
			// let allRecipes = datas.recipes
			// console.log(allRecipes);
			// let ingredients =  allRecipes.map((recipes) => recipes.ingredients)
			// let ingredientsList =[];
			// ingredients.map((ingredients) => ingredients.map((ingredient) => ingredientsList.push(ingredient.ingredient)));
			// let ingredientsListSort = Array.from(new Set(ingredientsList.sort(compareIngredient)))
			const recipesManager = new Recipes_M(datas.recipes);
			//affiche les recettes triées selon la recherche de la searchBar principale
			searchBar.addEventListener('input', () =>{
				if(searchBar.value.length >=3 ){
					recipesManager.applyFilters(searchBar.value.toLowerCase());
				}else if(searchBar.value.length < 3 && recipesManager.tags.length === 0){
					recipesManager.show();
				}else if(searchBar.value.length < 3  && recipesManager.tags.length >=1){
					recipesManager.tagFilter(recipesManager.recipes);
				}
			})
			
		})
	.catch((err) => console.log('==== error ====', err))

}

getRecipes()
