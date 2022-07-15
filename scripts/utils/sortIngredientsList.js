//trie la liste d'ingrédients en fonction de al liste de recettes
function sortIngredientsList(recipies){
    let ingredientsSortedList =[];
    let ingredientsSort =  recipies.map((recipes) => recipes.ingredients)
    ingredientsSort.map((ingredients) => ingredients.map((ingredient) => ingredientsSortedList.push(ingredient.ingredient)));
    let ingredientSorted = Array.from(new Set(ingredientsSortedList.sort(compareIngredient)))
    //suppression du contenu html de la liste d'ingrédients
    ingredientsListWrapper.innerHTML='';
    //mise à jour affichages des recettes
    //showRecipes(recipies)
    //showIngredients(ingredientSorted)
    sortIngredients(ingredientSorted)
}

