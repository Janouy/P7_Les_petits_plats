class Appliances_M{
    constructor(data){
        this.appliances = new Appliance(data);
    }

    contains(searchBarInput){
        return this.appliances.some((appliance) =>  appliance.contains(searchBarInput));
    }
   
}