class Ustensils_M {
	constructor(data) {
		this.ustensils = data.map((item) => new Ustensil(item));
	}

	contains(text) {
		return this.ustensils.some((ustensil) => ustensil.contains(text));
	}

	extract() {
		return this.ustensils.map((ustensil) => ustensil.ustensil);
	}
}
