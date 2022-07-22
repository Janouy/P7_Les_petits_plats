class Recipe {
	constructor(data) {
		this.appliance = data.appliance;
		this.ingredients = new Ingredients_M(data.ingredients);
		this.appliances = new Appliances_M(data.appliance);
		this.ustensils = new Ustensils_M(data.ustensils);
		this.name = data.name;
		this.time = data.time;
		this.description = data.description;
	}

	showCard() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("card", "border-0");

		const recipeCard = `
            <img src="../picture/recipie.jpg" class="card-img-top" alt="recipe picture">
            <div class="card-body bg-card-body">
            <div class="card-title d-flex justify-content-around mb-4">
                <div class="col-9 fs-5 fw-bold">${this.name}</div>
                <div class="col-3 fw-bold d-flex justify-content-between"><i class="fa-regular fa-clock"></i> ${
					this.time
				} min</div>
            </div>
            <div class="row d-flex justify-content-between">
                <ul class="card-text ingredient-wrapper fw-bold col-7">${this.ingredients.show()}</ul>
                <div class="card-text card-text-description fw-bold col-5">${
					this.description
				}</div>
            </div>
            </div>
        `;
		wrapper.innerHTML = recipeCard;
		return wrapper;
	}

	contains(text) {
		return (
			this.name.toLowerCase().includes(text.toLowerCase()) ||
			this.description.toLowerCase().includes(text.toLowerCase()) ||
			this.ingredients.contains(text)
		);
	}

	containsIngredient(text) {
		return this.ingredients.contains(text);
	}

	containsAppliance(text) {
		return this.appliances.contains(text);
	}

	containsUstensil(text) {
		return this.ustensils.contains(text);
	}

	extractIngredients() {
		return this.ingredients.extract();
	}
	extractAppliances() {
		return this.appliances.extract();
	}

	extractUstensils() {
		return this.ustensils.extract();
	}
}
