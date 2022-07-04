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
			// document.querySelectorAll('.ingredient').forEach((item) => {
			// 	if(!item.dataset.name.toLowerCase().includes(searchBarIngredients.value.toLowerCase())){
			// 		item.remove()
			// 	}else if(item.dataset.name.toLowerCase().includes(searchBarIngredients.value.toLowerCase())){
			// 		showIngredients(item)
			// 	}
			// })
        }else if(searchBarIngredients.value.length <= 3){
			openList(searchBarIngredients.value.length);
			ingredientsListWrapper.innerHTML ='';
			showIngredients(ingredientsListSort)
		}
    })
}

