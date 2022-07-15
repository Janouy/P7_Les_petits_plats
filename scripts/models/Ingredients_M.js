class Ingredients_M{
    constructor(data){
        this.ingredients = data.map((item) => new Ingredient(item));
    }

    contains(searchBarInput){
        return this.ingredients.some((ingredient) =>  ingredient.contains(searchBarInput));
    }
   
    show(){
        return this.ingredients.map((ingredient) => ingredient.convertToHtml()).reduce((total, next) => total.concat(next));
    }

    extract(){
        return this.ingredients.map(ingredient => ingredient.getName());
       
    }
}