class Page_M {
	constructor(datas) {
		this.recipes_M = new Recipes_M(datas.recipes, this);
		this.tags = [];
		this.recipesFilteredWithtag;
	}

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

	tagFilter(recipes) {
		for (let i = 0; i < this.tags.length; i++) {
			if (this.tags[i].type === "ingredients") {
				this.recipesFilteredWithtag = recipes.filter((recipe) => recipe.containsIngredient(this.tags[i].title));
				recipes = this.recipesFilteredWithtag;
			} else if (this.tags[i].type === "appliances") {
				this.recipesFilteredWithtag = recipes.filter((recipe) => recipe.containsAppliance(this.tags[i].title));
				recipes = this.recipesFilteredWithtag;
			} else if (this.tags[i].type === "ustensils") {
				this.recipesFilteredWithtag = recipes.filter((recipe) => recipe.containsUstensil(this.tags[i].title));
				recipes = this.recipesFilteredWithtag;
			}
		}
		console.log(recipes.length);
		this.recipes_M.show(recipes);
	}
}
