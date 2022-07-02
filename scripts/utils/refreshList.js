const refreshListButton = document.getElementById('refresh-button')

function refreshList(allRecipes){
        refreshListButton.addEventListener('click', () =>{
            recipeCard.innerHTML = '';
            showRecipes(allRecipes)
            searchBar.value='';
            searchBar.placeholder = "Rechercher une recette..."
        })
}