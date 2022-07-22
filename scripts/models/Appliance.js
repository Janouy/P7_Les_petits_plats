class Appliance {
	constructor(data) {
		this.appliance = data;
	}

	contains(text) {
		return this.appliance.toLowerCase().includes(text.toLowerCase());
	}

	convertToHtml() {
		return "<li>" + this.appliance + "</li>";
	}
}
