class Page_M {
	constructor(datas) {
		this.recipes_M = new Recipes_M(datas.recipes, this);
		this.tags = [];
		this.recipesFilteredWithtag;
	}

	//récupère la liste des ingrédients et retourne un de tous les ingrédinets sans doublons
	extractIngredients(recipes) {
		const allIngredients = recipes.map((recipe) => recipe.extractIngredients()).reduce((tot, next) => tot.concat(next));
		const allUniqIngredient = Array.from(
			new Set(
				allIngredients.sort((a, b) => {
					if (a.toLowerCase() < b.toLowerCase()) {
						return -1;
					}
					if (a.toLowerCase() > b.toLowerCase()) {
						return 1;
					}
					return 0;
				}),
			),
		);
		return allUniqIngredient;
	}
	//récupère la liste des appareils et retourne un de tous les appareils sans doublons
	extractAppliances(recipes) {
		const allAppliances = recipes.map((recipe) => recipe.appliance);
		const allUniqAppliance = Array.from(
			new Set(
				allAppliances.sort((a, b) => {
					if (a.toLowerCase() < b.toLowerCase()) {
						return -1;
					}
					if (a.toLowerCase() > b.toLowerCase()) {
						return 1;
					}
					return 0;
				}),
			),
		);
		return allUniqAppliance;
	}
	//récupère la liste des ustensils et retourne un de tous les ustensils sans doublons
	extractUstensils(recipes) {
		const allUstensils = recipes.map((recipe) => recipe.extractUstensils()).reduce((tot, next) => tot.concat(next));
		const allUniqUstensils = Array.from(
			new Set(
				allUstensils.sort((a, b) => {
					if (a.toLowerCase() < b.toLowerCase()) {
						return -1;
					}
					if (a.toLowerCase() > b.toLowerCase()) {
						return 1;
					}
					return 0;
				}),
			),
		);
		return allUniqUstensils;
	}
	//actualise la liste des recettes selon les tags ajoutés par l'utilisateur
	tagFilter(recipes) {
		let filteredRecipes = recipes;
		for (let i = 0; i < this.tags.length; i++) {
			if (this.tags[i].type === "ingredients") {
				this.recipesFilteredWithtag = filteredRecipes.filter((recipe) => recipe.containsIngredient(this.tags[i].title));
				filteredRecipes = this.recipesFilteredWithtag;
			} else if (this.tags[i].type === "appliances") {
				this.recipesFilteredWithtag = filteredRecipes.filter((recipe) => recipe.containsAppliance(this.tags[i].title));
				filteredRecipes = this.recipesFilteredWithtag;
			} else if (this.tags[i].type === "ustensils") {
				this.recipesFilteredWithtag = filteredRecipes.filter((recipe) => recipe.containsUstensil(this.tags[i].title));
				filteredRecipes = this.recipesFilteredWithtag;
			}
		}
		this.recipes_M.show(filteredRecipes);
	}
}
