const searchBar = document.getElementById('search-input');
const searchBarIngredients = document.getElementById('search-input-ingredients');
// const searchBarButton = document.getElementById('search-button')
const recipeCard = document.querySelector('.recipe-card-group')

//affiche les recettes triées selon la recherche de la searchBar principale
function sortRecipes(allRecipes){
    let recipesSorted;
    searchBar.addEventListener('input', () =>{
        if(searchBar.value.length >=3 ){
            //suppression du contenu html de la liste de recettes
            recipeCard.innerHTML = '';
            recipesSorted = allRecipes.map((recipe)=> recipe).filter((item) => 
                item.name.toLowerCase().includes(searchBar.value.toLowerCase()) || 
                item.description.toLowerCase().includes(searchBar.value.toLowerCase()) ||
                item.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase().includes(searchBar.value.toLowerCase()))
            )
            sortIngredientsList(recipesSorted)
        }else if(searchBar.value.length < 3 ){
            sortIngredientsList(allRecipes)
        }
    })
}