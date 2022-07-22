class Ingredients_M {
	constructor(data) {
		this.ingredients = data.map((item) => new Ingredient(item));
	}

	contains(text) {
		return this.ingredients.some((ingredient) => ingredient.contains(text));
	}

	show() {
		return this.ingredients
			.map((ingredient) => ingredient.convertToHtml())
			.reduce((total, next) => total.concat(next));
	}

	extract() {
		return this.ingredients.map((ingredient) => ingredient.getName());
	}
}
