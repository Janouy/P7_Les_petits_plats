class Recipes_M {
	constructor(data, page_M) {
		this.page_M = page_M;
		this.data = data;
		this.recipes = data.map((recipe) => new Recipe(recipe));
		this.show();
		const searchBar = document.getElementById("search-input");
		//affiche les recettes triées selon la recherche de la searchBar principale
		searchBar.addEventListener("input", () => {
			if (searchBar.value.length >= 3) {
				this.applyFilters(searchBar.value.toLowerCase());
			} else if (searchBar.value.length < 3 && this.page_M.tags.length === 0) {
				this.recipes = data.map((recipe) => new Recipe(recipe));
				this.show();
			} else if (searchBar.value.length < 3 && this.page_M.tags.length >= 1) {
				this.page_M.removeTagFilter(data.map((recipe) => new Recipe(recipe)));
			}
		});
	}

	//champ de recherche bar principale
	applyFilters(text) {
		const searchBar = document.getElementById("search-input");
		//utilisation boucle for au lieu d'un filter
		let recipesFiltered = [];
		for (let recipes_it = 0; recipes_it < this.recipes.length; recipes_it++) {
			if (this.recipes[recipes_it].contains(text)) {
				recipesFiltered.push(this.recipes[recipes_it]);
			}
		}
		//algo1
		//let recipesFiltered = this.recipes.filter((recipe) => recipe.contains(text));
		if (recipesFiltered.length >= 1) {
			this.show(recipesFiltered);
			this.generateTagsFilter(recipesFiltered);
			this.recipes = recipesFiltered;
		} else if (recipesFiltered.length === 0 && searchBar.value.length >= 3) {
			searchBar.value = "";
			searchBar.placeholder = "Aucune recette de correspond à votre critère...vous pouvez chercher 'tarte aux pommes', 'poisson', etc.";
			setTimeout(function () {
				searchBar.value = "";
				searchBar.placeholder = "Rechercher une recette...";
			}, 2000);
		} else {
			searchBar.value = "";
			searchBar.placeholder = "Rechercher une recette...";
		}
	}

	generateTagsFilter(recipes) {
		new TagFilter(this.page_M.extractIngredients(recipes), "ingredients", "background:#3282F7", "Ingrédients", this);
		new TagFilter(this.page_M.extractAppliances(recipes), "appliances", "background:#68D9A4", "Appareils", this);
		new TagFilter(this.page_M.extractUstensils(recipes), "ustensils", "background:#ED6454", "Ustensiles", this);
	}

	show(data) {
		const recipeCard = document.querySelector(".recipe-card-group");
		recipeCard.innerHTML = "";
		const dataToShow = data ? data : this.recipes;
		//modif boucle forEach en while
		let dataToShow_it = 0;
		while (dataToShow_it < dataToShow.length) {
			recipeCard.appendChild(dataToShow[dataToShow_it].showCard());
			dataToShow_it++;
		}
		//algo 1
		// dataToShow.forEach((recipe) => {
		// 	recipeCard.appendChild(recipe.showCard());
		// });
		this.generateTagsFilter(dataToShow);
	}

	addTag(title, type) {
		new Tag(title, type, this);
		this.page_M.tags.push(title);
		this.page_M.addTagFilter(this.recipes);
	}

	deleteItemTag(tag, datasetTag) {
		const searchBar = document.getElementById("search-input");
		tag.parentNode.remove();
		let indexToFind = this.page_M.tags.findIndex((elt) => elt === datasetTag);
		this.page_M.tags.splice(indexToFind, 1);
		if (searchBar.value.length >= 3 && this.page_M.tags.length === 0) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.applyFilters(searchBar.value.toLowerCase());
		} else if (searchBar.value.length >= 3 && this.page_M.tags.length >= 1) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.applyFilters(searchBar.value.toLowerCase());
			this.page_M.removeTagFilter(this.recipes);
		} else if (searchBar.value.length <= 2 && this.page_M.tags.length === 0) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.show(this.recipes);
		} else if (searchBar.value.length <= 2 && this.page_M.tags.length >= 1) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.page_M.removeTagFilter(this.recipes);
		}
	}
}
