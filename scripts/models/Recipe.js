
class Recipe {
    constructor(recipe) {
        this.recipe = recipe 
        this.ingredient = ''
        this.recipe.ingredients.forEach((ingredient) => {
            if(!ingredient.unit && ingredient.quantity){
                this.ingredient += `<li>${ingredient.ingredient} ${ingredient.quantity}</li>`
            }if(!ingredient.unit && !ingredient.quantity){
                this.ingredient += `<li>${ingredient.ingredient}</li>`
            }if(ingredient.unit && ingredient.quantity){
                this.ingredient += `<li>${ingredient.ingredient} ${ingredient.quantity} ${ingredient.unit}</li>`
            }
        })
    }

    createRecipeCard() {
        const wrapper = document.createElement('div')
        wrapper.classList.add('card', 'border-0')

        const recipeCard = `
            <img src="../picture/recipie.jpg" class="card-img-top" alt="recipe picture">
            <div class="card-body bg-card-body">
            <div class="card-title d-flex justify-content-around mb-4">
                <div class="col-9">${this.recipe.name}</div>
                <div class="col-3 fw-bold d-flex justify-content-between"><i class="fa-regular fa-clock"></i> ${this.recipe.time} min</div>
            </div>
            <div class="row">
                <ul class="card-text ingredient-wrapper fw-bold col-6">${this.ingredient}</ul>
                <div class="card-text card-text-description col-6">${this.recipe.description}</div>
            </div>
            </div>
        `
        wrapper.innerHTML = recipeCard
        return wrapper
    }
}




//affichage des photos sur la page photographer
// class Recipe {
//   constructor(data) {
//     this.id = data.id
//     this.name = data.name
//     this.servings = data.servings
//     this.ingredients = data.ingredients
//     this.time = data.time
//     this.description = data.description
//     this.appliance = data.appliance
//     this.ustensils = data.ustensils
//     this.ingredient = ''
//     for(let i=0; i<this.ingredients.length; i++){
//         this.ingredient += `<li>${this.ingredients[i].ingredient}</li>`
//     }
    
//   }

//   recipeCardDOM() {
//     const card = document.createElement('div')
//     card.classList.add('card')
//     const cardImg = document.createElement('img')
//     cardImg.classList.add('card-img-top')
//     cardImg.setAttribute('alt', "")
//     const cardBody = document.createElement('div')
//     cardBody.classList.add('card-body')
//     const cardTitle = document.createElement('div')
//     cardTitle.classList.add('card-title', 'border')
//     cardTitle.innerHTML = this.name + this.time
//     const cardText = document.createElement('div')
//     cardText.classList.add('card-text')
//     const ingredientList = document.createElement('ul')
//     ingredientList.classList.add('ingredient-wrapper')
//     ingredientList.innerHTML = this.ingredient
//     card.appendChild(cardImg)
//     card.appendChild(cardBody)
//     cardBody.appendChild(cardTitle)
//     cardBody.appendChild(cardText)
//     cardBody.appendChild(ingredientList)
//     return card
//   }

// }