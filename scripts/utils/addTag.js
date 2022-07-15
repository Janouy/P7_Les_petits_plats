// const tagsWrapper = document.querySelector('.tags-wrapper');

// //ajoute un tag et filtre la liste en fonction du tag
// function addTag(ingredientTag, ingredientsAfterTag){
//     let ingredientsTag = [];
//     let newRecipies = [];
//     let inputLenght = 3;
//     ingredientsTag.push(ingredientTag);
//     tagsWrapper.innerHTML += `<div class="tag-ingredient me-3" data-tag="${ingredientTag}">${ingredientTag} <i class="fa-regular fa-circle-xmark deleteTagIngredientButton"></i></i></div>`
//     document.querySelectorAll('.deleteTagIngredientButton').forEach((item) => item.addEventListener('click', () => {
//         deleteIngredientTag(item.parentNode)
//     }))
//     searchBarIngredients.value='';
//     searchBarIngredients.placeholder = "Ingrédients";
//     ingredientsListWrapper.innerHTML ='';
//     // showIngredients(ingredientsAfterTag);
//     openList(inputLenght)
//     //suppression du contenu html de la liste de recettes
// 	recipeCard.innerHTML = '';
// 	sortByTag(newRecipies, ingredientsTag);
//   	sortIngredientsList(newRecipies);
//     console.log(newRecipies)
// }
