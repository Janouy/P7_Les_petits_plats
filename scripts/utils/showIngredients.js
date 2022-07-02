const ingredientsListWrapper = document.querySelector('.ingredients-list');
const selectIngredient = document.querySelector('.select-ingredients');
function compareIngredient(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1
    }
    return 0
  }
function showIngredients(allRecipes){
    let ingredients =  allRecipes.map((recipes) => recipes.ingredients)
    let ingredientsList =[];
    ingredients.map((ingredients) => ingredients.map((ingredient) => ingredientsList.push(ingredient.ingredient)));
    let ingredientsListSort = Array.from(new Set(ingredientsList.sort(compareIngredient)))
    ingredientsListSort.forEach((ingredient) =>  ingredientsListWrapper.innerHTML += `<div data-id="${ingredient}" class="ingredient mx-3">${ingredient}</div>`)
    document.querySelectorAll('.ingredient').forEach((item) => item.addEventListener('click', () => {
      addTag(item.dataset.id)
    }))
}
selectIngredient.addEventListener('click', () => {
    if(ingredientsListWrapper.classList.contains('d-none')){
        ingredientsListWrapper.classList.remove('d-none');
        ingredientsListWrapper.classList.add('d-flex');
        document.querySelector('.select-ingredients svg').setAttribute('transform', 'rotate(180)')
    }else  if(ingredientsListWrapper.classList.contains('d-flex')){
        ingredientsListWrapper.classList.remove('d-flex');
        ingredientsListWrapper.classList.add('d-none');
        document.querySelector('.select-ingredients svg').setAttribute('transform', '')
    }
})



