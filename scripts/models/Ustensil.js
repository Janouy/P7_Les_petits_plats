class Ustensil{
    constructor(data){
        this.ustensil = data;
    }
    
    contains(searchBarInput){
        return this.ustensil.toLowerCase().includes(searchBarInput.toLowerCase());
    }

    convertToHtml(){
        return '<li>' + this.ustensil + '</li>';
    }

}