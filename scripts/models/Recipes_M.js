class Recipes_M {
    constructor(data){
        this.recipes = data.map((recipe) => new Recipe(recipe));
        this.show();
        this.generateTagsFilter(this.recipes);
		this.tags= [];
		this.recipesFiltered;
		this.recipesFilteredTags
	}

    applyFilters(text){
		console.log(this.recipesFiltered)
        this.recipesFiltered = this.recipes.filter((recipe) => 
            recipe.contains(text)
        );
		if(this.recipesFiltered.length >= 1){
			this.show(this.recipesFiltered);
			this.generateTagsFilter(this.recipesFiltered);
		}else{
			searchBar.value = '';
			searchBar.placeholder = "Rechercher une recette..."
		}
		if(this.tags.length >=1){
			this.tagFilter(this.recipesFiltered)
		}
    }

    generateTagsFilter(recipes){
        new TagFilter(this.extractIngredients(recipes), 'ingredients', "background:#3282F7", "Ingrédients", this);
        new TagFilter(this.extractAppliances(recipes), 'appliances', "background:#68D9A4", "Appareils", this);
        new TagFilter(this.extractUstensils(recipes), 'ustensils', "background:#ED6454", "Ustensiles", this);
    }

    extractIngredients(recipes){
        const allIngredients = recipes.map(recipe => recipe.extractIngredients()).reduce((tot, next) => tot.concat(next));
        const allUniqIngredient = Array.from(new Set(allIngredients.sort((a, b) =>{
            if (a.toLowerCase() < b.toLowerCase()) {
              return -1
            }
            if (a.toLowerCase() > b.toLowerCase()) {
              return 1
            }
            return 0
          })));
        return allUniqIngredient;
    }

    extractAppliances(recipes){
        const allAppliances = recipes.map(recipe => recipe.appliance);
        const allUniqAppliance = Array.from(new Set(allAppliances.sort((a, b) =>{
            if (a.toLowerCase() < b.toLowerCase()) {
              return -1
            }
            if (a.toLowerCase() > b.toLowerCase()) {
              return 1
            }
            return 0
          })));
        return allUniqAppliance;
    }

    extractUstensils(recipes){
        const allUstensils = recipes.map(recipe => recipe.extractUstensils()).reduce((tot, next) => tot.concat(next));
        const allUniqUstensils = Array.from(new Set(allUstensils.sort((a, b) =>{
            if (a.toLowerCase() < b.toLowerCase()) {
              return -1
            }
            if (a.toLowerCase() > b.toLowerCase()) {
              return 1
            }
            return 0
          })));
        return allUniqUstensils;
    }

    show(data){
        const recipeCard = document.querySelector('.recipe-card-group');
        recipeCard.innerHTML = '';
        const dataToShow = data ? data : this.recipes;
        dataToShow.forEach((recipe) => {
            recipeCard.appendChild(recipe.showCard());
        });
    }

	addTag(title, type){
		new Tag(title, type, this)
		this.tags.push(title)
		if(this.recipesFiltered){
			this.tagFilter(this.recipesFiltered);
		}else{
			this.tagFilter(this.recipes)
		}
	}

	deleteItemTag(tag){
        tag.parentNode.remove();
        let indexToFind = this.tags.findIndex((elt) => elt === tag.dataset.tag);
        this.tags.splice(indexToFind, 1);
		if(this.recipesFiltered){
			this.show(this.recipesFiltered);
			this.generateTagsFilter(this.recipesFiltered);
		}else{
			this.show(this.recipes);
			this.generateTagsFilter(this.recipes);
		}
    }

	tagFilter(recipesFiltered){
		this.recipesFilteredTags = recipesFiltered.filter((recipe) => 
		recipe.containsIngredient(this.tags[this.tags.length-1])
		);
		this.show(this.recipesFilteredTags);
		this.generateTagsFilter(this.recipesFilteredTags);
	}
}