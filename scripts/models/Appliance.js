class Appliance{
    constructor(data){
        this.appliance = data;
    }
    
    contains(searchBarInput){
        return this.appliance.toLowerCase().includes(searchBarInput.toLowerCase());
    }

    convertToHtml(){
        return '<li>' + this.appliance + '</li>';
    }

}