let ingredientsAfterTag;

function sortIngredients(ingredientsListSort){
	ingredientsAfterTag = ingredientsListSort;
   		//recherche des ingrédient dans la searchBar ingredients
       searchBarIngredients.addEventListener('input', () => {
        if(searchBarIngredients.value.length >=3 ){
			openList(searchBarIngredients.value.length);
			ingredientsListWrapper.innerHTML ='';
			let ingredientChoiced = ingredientsListSort.filter((ingredient) => ingredient.includes(searchBarIngredients.value.toLowerCase()))
			showIngredients(ingredientChoiced)
        }else if(searchBarIngredients.value.length <= 3){
			openList(searchBarIngredients.value.length);
			ingredientsListWrapper.innerHTML ='';
			showIngredients(ingredientsListSort)
		}
    })
}

