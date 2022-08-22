class Ustensils_M {
	constructor(data) {
		this.ustensils = data.map((item) => new Ustensil(item));
	}
	// verifie si les ustensils contiennent 'text'
	contains(text) {
		return this.ustensils.some((ustensil) => ustensil.contains(text));
	}
	//extrait un ustensil de la liste
	extract() {
		return this.ustensils.map((ustensil) => ustensil.ustensil);
	}
}
