class Recipes_M {
	constructor(data, page_M) {
		this.page_M = page_M;
		this.data = data;
		this.recipes = data.map((recipe) => new Recipe(recipe));
		this.show();
		// this.tags = [];
		const searchBar = document.getElementById("search-input");
		//affiche les recettes triées selon la recherche de la searchBar principale
		searchBar.addEventListener("input", () => {
			if (searchBar.value.length >= 3) {
				this.applyFilters(searchBar.value.toLowerCase());
			} else if (searchBar.value.length < 3 && this.page_M.tags.length === 0) {
				this.recipes = data.map((recipe) => new Recipe(recipe));
				this.show();
			} else if (searchBar.value.length < 3 && this.page_M.tags.length >= 1) {
				this.page_M.tagFilter(data.map((recipe) => new Recipe(recipe)));
			}
			console.log(this.recipes.length);
		});
	}

	applyFilters(text) {
		const searchBar = document.getElementById("search-input");
		let recipesFiltered = this.recipes.filter((recipe) => recipe.contains(text));
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
			}, 1000);
		} else {
			searchBar.value = "";
			searchBar.placeholder = "Rechercher une recette...";
		}
		console.log(this.recipes.length);
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
		dataToShow.forEach((recipe) => {
			recipeCard.appendChild(recipe.showCard());
		});
		this.generateTagsFilter(dataToShow);
	}

	addTag(title, type) {
		new Tag(title, type, this);
		this.page_M.tags.push({ title: title, type: type });
		this.page_M.tagFilter(this.recipes);
	}

	deleteItemTag(tag, datasetTag) {
		const searchBar = document.getElementById("search-input");
		tag.parentNode.remove();
		let indexToFind = this.page_M.tags.findIndex((elt) => elt.title === datasetTag);
		this.page_M.tags.splice(indexToFind, 1);
		if (searchBar.value.length >= 3 && this.page_M.tags.length === 0) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.applyFilters(searchBar.value.toLowerCase());
		} else if (searchBar.value.length >= 3 && this.page_M.tags.length >= 1) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.applyFilters(searchBar.value.toLowerCase());
			this.page_M.tagFilter(this.recipes);
		} else if (searchBar.value.length <= 2 && this.page_M.tags.length === 0) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.show(this.recipes);
		} else if (searchBar.value.length <= 2 && this.page_M.tags.length >= 1) {
			this.recipes = this.data.map((recipe) => new Recipe(recipe));
			this.page_M.tagFilter(this.recipes);
		}
	}
}
