var SolarSystem = (function(newSolarSystem) {
    var closestStars = ["Alpha Centauri"];
    var ageOfSolarSystem = 0;
    var dwarfPlanets = ["Pluto"];

    newSolarSystem.getClosestStars = function() {
        return closestStars;
    };
    newSolarSystem.setClosestStars = function(newClosestStars){
        closestStars.push(newClosestStars);
    };


    newSolarSystem.getAgeOfSolarSystem = function() {
        return ageOfSolarSystem;
    };
    newSolarSystem.setAgeOfSolarSystem = function(newAge){
        ageOfSolarSystem = newAge;
    };


    newSolarSystem.getDwarfPlanets = function() {
        return dwarfPlanets;
    };
    newSolarSystem.setDwarfPlanets = function(newDwarfPlanets){
        dwarfPlanets.push(newClosestStars);
    };

    newSolarSystem.greeting = "bite me";
    return newSolarSystem;

})(SolarSystem || {});