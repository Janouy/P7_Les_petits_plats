class Appliances_M {
	constructor(data) {
		this.appliances = new Appliance(data);
	}
	// verifie si les appareils contiennent 'text'
	contains(text) {
		return this.appliances.contains(text);
	}
}
