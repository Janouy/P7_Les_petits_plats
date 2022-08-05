class Page_M {
	constructor(datas) {
		this.recipes_M = new Recipes_M(datas.recipes, this);
		this.tags = [];
		this.recipestag;
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

	removeTagFilter(recipes) {
		let recipesTagadd;
		let i = 0;
		while (i < this.tags.length) {
			recipesTagadd = recipes.filter((recipe) => recipe.containsTag(this.tags[i]));
			recipes = recipesTagadd;
			i++;
		}
		this.recipes_M.show(recipesTagadd);
	}

	addTagFilter(recipes) {
		this.recipestag = recipes.filter((recipe) => recipe.containsTag(this.tags[this.tags.length - 1]));
		this.recipes_M.recipes = this.recipestag;
		this.recipes_M.show(this.recipestag);
	}
}
