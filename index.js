/*The list of an animal type's characteristics:
- name (giraffe, bear, etc.)
- required biome
- the need for a reservoir
- area
- what does it eat
- predator or herbivore*/
var dog = {
    name: "Billy",
    age: 5,
    amountOfFoodPerDay: 23,
    typename: "dog",
    biome: "forest",
    reservoir: false,
    area: 35,
    eat: "meat",
    predator: false
};
var fish = {
    name: "Nemo",
    age: 1,
    amountOfFoodPerDay: 6,
    typename: "fish",
    biome: "ocean",
    reservoir: true,
    area: 5,
    eat: "plant",
    predator: false
};
var tiger = {
    name: "Woody",
    age: 7,
    amountOfFoodPerDay: 29,
    typename: "tiger",
    biome: "forest",
    reservoir: false,
    area: 60,
    eat: "meat",
    predator: true
};
var cat = {
    name: "Stella",
    age: 2,
    amountOfFoodPerDay: 14,
    typename: "cat",
    biome: "forest",
    reservoir: false,
    area: 20,
    eat: "milk",
    predator: false
};
var cageForAnimal1 = {
    animals: [],
    biome: "forest",
    reservior: false,
    capacity: 1,
    ForPredator: false
};
function checkCageForAnimal1(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservior &&
        animal.biome == cage.biome &&
        animal.predator == cage.ForPredator) {
        for (var i = 0; i < cage.animals.length; i++) {
            count += 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
            console.log(" ".concat(animal.name, "- this animal is in this cage "));
        }
        else {
            console.log("There is no empty space in this cage!");
        }
    }
    else {
        console.log("This cage is not available for  '".concat(animal.name, "'  animal"));
    }
}
function ShowAllNamesInCage(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
checkCageForAnimal1(dog, cageForAnimal1);
checkCageForAnimal1(fish, cageForAnimal1);
checkCageForAnimal1(tiger, cageForAnimal1);
checkCageForAnimal1(cat, cageForAnimal1);
