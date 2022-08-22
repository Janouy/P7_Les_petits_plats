class Ingredients_M {
	constructor(data) {
		this.ingredients = data.map((item) => new Ingredient(item));
	}
	// verifie si les ingredients contiennent 'text'
	contains(text) {
		return this.ingredients.some((ingredient) => ingredient.contains(text));
	}
	//map les ingredients pour les afficher dans le dow => affiche des recettes
	show() {
		return this.ingredients.map((ingredient) => ingredient.convertToHtml()).reduce((total, next) => total.concat(next));
	}

	//map les ingrédients et récupère le nom avec getName
	extract() {
		return this.ingredients.map((ingredient) => ingredient.getName());
	}
}
