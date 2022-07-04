const tagsWrapper = document.querySelector('.tags-wrapper');

//ajoute un tag et filtre la liste en fonction du tag
function addTag(ingredientTag, ingredientsAfterTag){
    let inputLenght =3;
    tagsWrapper.innerHTML += `<div class="tag-ingredient me-3" data-tag="${ingredientTag}">${ingredientTag} <i class="fa-regular fa-circle-xmark deleteTagIngredientButton"></i></i></div>`
    document.querySelectorAll('.deleteTagIngredientButton').forEach((item) => item.addEventListener('click', () => {
        deleteIngredientTag(item.parentNode)
      }))
    searchBarIngredients.value='';
    searchBarIngredients.placeholder = "Ingrédients";
    ingredientsListWrapper.innerHTML ='';
    showIngredients(ingredientsAfterTag);
    openList(inputLenght)
}
