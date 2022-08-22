class Ustensil {
	constructor(data) {
		this.ustensil = data;
	}
	//vérifie si un 'text' est dans un ustensil
	contains(searchBarInput) {
		return this.ustensil.toLowerCase().includes(searchBarInput.toLowerCase());
	}
	//affiche l'ustensils dans le dom
	convertToHtml() {
		return "<li>" + this.ustensil + "</li>";
	}
}
