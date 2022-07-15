class Ustensils_M{
    constructor(data){
        this.ustensils = data.map((item) => new Ustensil(item));
    }

    contains(searchBarInput){
        return this.ustensils.some((ustensil) =>  ustensil.contains(searchBarInput));
    }
   
   
    extract(){
        return this.ustensils.map(ustensil => ustensil.ustensil);
    }
}