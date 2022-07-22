class Ingredient {
	constructor(data) {
		this.name = data.ingredient;
		this.quantity = data.quantity;
		this.unit = data.unit;
	}

	contains(text) {
		return this.name.toLowerCase().includes(text.toLowerCase());
	}

	convertToHtml() {
		return (
			'<li class="ingredients-list">' +
			this.name +
			":" +
			(this.quantity ? " " + this.quantity : "") +
			(this.unit ? " " + this.unit : "") +
			"</li>"
		);
	}

	getName() {
		return this.name;
	}
}
