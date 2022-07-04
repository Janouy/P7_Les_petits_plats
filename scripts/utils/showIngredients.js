const ingredientsListWrapper = document.querySelector('.ingredients-list');

//tri des ingrédients par ordre alphabétiques
function compareIngredient(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1
    }
    return 0
  }
//affiche et ferme la liste des ingrédients dans la recherche avancé par tag
function showIngredients(ingredientsListSort){
    ingredientsListSort.forEach((ingredient) =>  ingredientsListWrapper.innerHTML += `<div data-name="${ingredient}" class="ingredient mx-3">${ingredient}</div>`)
    document.querySelectorAll('.ingredient').forEach((item) => item.addEventListener('click', () => {
    	addTag(item.dataset.name, ingredientsAfterTag)
    }))
}




