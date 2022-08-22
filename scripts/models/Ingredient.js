class Ingredient {
	constructor(data) {
		this.name = data.ingredient;
		this.quantity = data.quantity;
		this.unit = data.unit;
	}
	//vérifie si un 'text' est dans le nom d'un ingredient
	contains(text) {
		return this.name.toLowerCase().includes(text.toLowerCase());
	}

	//affiche l'ingredient dans le dom
	convertToHtml() {
		return '<li class="ingredients-list">' + this.name + ":" + (this.quantity ? " " + this.quantity : "") + (this.unit ? " " + this.unit : "") + "</li>";
	}

	// retourne le nom de l'ingredient
	getName() {
		return this.name;
	}
}
