class Ingredient{
    constructor(data){
        this.name = data.ingredient;
        this.quantity = data.quantity;
        this.unit = data.unit;
    }
    
    contains(searchBarInput){
        return this.name.toLowerCase().includes(searchBarInput.toLowerCase());
    }

    convertToHtml(){
        return '<li>' + this.name + (this.quantity? ' ' + this.quantity : '') + (this.unit? ' ' + this.unit : '') + '</li>';
    }

    getName(){
        return this.name;
    }

}