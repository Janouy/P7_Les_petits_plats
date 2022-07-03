const searchBar = document.getElementById('search-input');
const searchBarIngredients = document.getElementById('search-input-ingredients');
const searchBarButton = document.getElementById('search-button')
const recipeCard = document.querySelector('.recipe-card-group')

//affiche les recettes triées selon la recherche de la searchBar principale
function sortRecipes(allRecipes){
    let recipesSorted;
    let ingredientSorted;
    searchBarButton.addEventListener('click', () =>{
        if(searchBar.value.length >=3 ){
            //suppression du contenu html de la liste de recettes
            recipeCard.innerHTML = '';
            //suppression du contenu html de la liste d'ingrédients
		    ingredientsListWrapper.innerHTML='';
            recipesSorted = allRecipes.map((recipe)=> recipe).filter((item) => 
                item.name.toLowerCase().includes(searchBar.value.toLowerCase()) || 
                item.description.toLowerCase().includes(searchBar.value.toLowerCase()) ||
                item.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase().includes(searchBar.value.toLowerCase()))
            )
            let ingredients =  recipesSorted.map((recipes) => recipes.ingredients)
		    let ingredientsList =[];
		    ingredients.map((ingredients) => ingredients.map((ingredient) => ingredientsList.push(ingredient.ingredient)));
		    ingredientSorted = Array.from(new Set(ingredientsList.sort(compareIngredient)))
            //mise à jour affichages des recettes
            showRecipes(recipesSorted)
            showIngredients(ingredientSorted)
            sortIngredients(ingredientSorted)
        }else if(searchBar.value.length < 3 ){
            searchBar.value='';
            searchBar.placeholder = "Veuillez effectuer une recherche avec au moins 3 caractères svp..."
        }
    })
}