const refreshListButton = document.getElementById('refresh-button')

function refreshList(allRecipes, ingredientsListSort){
        refreshListButton.addEventListener('click', () =>{
            recipeCard.innerHTML = '';
            ingredientsListWrapper.innerHTML='';
            showRecipes(allRecipes)
            searchBar.value='';
            searchBar.placeholder = "Rechercher une recette...";
            searchBarIngredients.value='';
            searchBarIngredients.placeholder = "Ingrédients";
            showIngredients(ingredientsListSort)
        })
        
}