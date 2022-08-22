class Appliance {
	constructor(data) {
		this.appliance = data;
	}
	//vérifie si un 'text' est dans un appareil
	contains(text) {
		return this.appliance.toLowerCase().includes(text.toLowerCase());
	}
	//affiche l'appareil dans le dom
	convertToHtml() {
		return "<li>" + this.appliance + "</li>";
	}
}
