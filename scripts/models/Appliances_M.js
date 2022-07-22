class Appliances_M {
	constructor(data) {
		this.appliances = new Appliance(data);
	}

	contains(text) {
		return this.appliances.contains(text);
	}
}
