const searchBar = document.getElementById('search-input');
const searchBarButton = document.getElementById('search-button')
const recipeCard = document.querySelector('.recipe-card-group')

function sortRecipes(allRecipes){
    showRecipes(allRecipes)
    searchBarButton.addEventListener('click', () =>{
        if(searchBar.value.length >=3 ){
            recipeCard.innerHTML = '';
            showRecipes(allRecipes.map((recipe)=> recipe).filter((item) => 
                item.name.toLowerCase().includes(searchBar.value) || 
                item.description.toLowerCase().includes(searchBar.value) ||
                item.ingredients.find((ingredient) => ingredient.ingredient.toLowerCase().includes(searchBar.value))
                ))
        }else if(searchBar.value.length < 3 ){
            searchBar.value='';
            searchBar.placeholder = "Veuillez effectuer une recherche avec au moins 3 caractères svp..."
        }
    })
    
}