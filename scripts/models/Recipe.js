class Recipe {
	constructor(data) {
		this.appliance = data.appliance;
		this.ingredients = new Ingredients_M(data.ingredients);
		this.appliances = new Appliances_M(data.appliance);
		this.ustensils = new Ustensils_M(data.ustensils);
		this.name = data.name;
		this.time = data.time;
		this.description = data.description;
		if (data.description.length > 120) {
			this.descriptionText = data.description.substring(0, 120) + "...";
		}
	}
	//affiche les recettes dans la dom
	showCard() {
		const wrapper = document.createElement("div");
		wrapper.classList.add("card", "border-0");

		const recipeCard = `
            <img src="../picture/recipie.jpg" class="card-img-top" alt="recipe picture">
            <div class="card-body bg-card-body">
            <div class="card-title d-flex justify-content-around mb-4">
                <div class="col-8 fs-5 fw-bold">${this.name}</div>
                <div class="col-4 fw-bold text-center"><i class="fa-regular fa-clock"></i> ${this.time} min</div>
            </div>
            <div class="row d-flex justify-content-between">
                <ul class="card-text ingredient-wrapper fw-bold col-7">${this.ingredients.show()}</ul>
                <div class="card-text card-text-description  fw-bold col-5">${this.descriptionText}</div>
            </div>
            </div>
        `;
		wrapper.innerHTML = recipeCard;
		return wrapper;
	}
	//vérifie si une recette contient un "text" dans la description les ingrédients ou le nom => pour la recherche principale
	contains(text) {
		return this.name.includes(text.toLowerCase()) || this.description.toLowerCase().includes(text.toLowerCase()) || this.ingredients.contains(text);
	}
	// verifie si la recette contient un ingrédient => pour la recherche avancée par tag
	containsIngredient(text) {
		return this.ingredients.contains(text);
	}
	// verifie si la recette contient un appareil => pour la recherche avancée par tag
	containsAppliance(text) {
		return this.appliances.contains(text);
	}
	// verifie si la recette contient un ustensil => pour la recherche avancée par tag
	containsUstensil(text) {
		return this.ustensils.contains(text);
	}
	//prend les ingrédients => pour l'affichage des ingrédients dans la liste de tag ingredients
	extractIngredients() {
		return this.ingredients.extract();
	}
	//prend les appareils => pour l'affichage des appareils dans la liste de tag ingredients
	extractAppliances() {
		return this.appliances.extract();
	}
	//prend les ustensils => pour l'affichage des ustensils dans la liste de tag ingredients
	extractUstensils() {
		return this.ustensils.extract();
	}
}
