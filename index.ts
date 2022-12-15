/*The list of an animal type's characteristics:
- name (giraffe, bear, etc.)
- required biome
- the need for a reservoir
- area 
- what does it eat
- predator or herbivore*/

interface IAnimalTypes {
  typename:string;
  biome:string;
  reservoir:true|false;
  area:number;
  eat:string;
  predator:boolean
}

/*The list of an animal's characteristics:
- name
- age
- amount of food per day*/

interface IAnimals extends IAnimalTypes {
  name:string;
  age:number;
  amountOfFoodPerDay:number;
}

/////////////////////////////////////////////////////////////////////////////////////////

interface ISettlement {
  animals: IAnimals[];
  biome: string;
  reservior: boolean;
  capacity: number;
  ForPredator: boolean;
}

let dog: IAnimals = {
  name: "Billy",
  age: 5,
  amountOfFoodPerDay: 23,
  typename: "dog",
  biome: "forest",
  reservoir: false,
  area: 35,
  eat: "meat",
  predator: false,
};
let fish: IAnimals = {
  name: "Nemo",
  age: 1,
  amountOfFoodPerDay: 6,
  typename: "fish",
  biome: "ocean",
  reservoir: true,
  area: 5,
  eat: "plant",
  predator: false,
};
let tiger: IAnimals = {
  name: "Woody",
  age: 7,
  amountOfFoodPerDay: 29,
  typename: "tiger",
  biome: "forest",
  reservoir: false,
  area: 60,
  eat: "meat",
  predator: true,
};
let cat: IAnimals = {
  name: "Stella",
  age: 2,
  amountOfFoodPerDay: 14,
  typename: "cat",
  biome: "forest",
  reservoir: false,
  area: 20,
  eat: "milk",
  predator: false,
};

let cageForAnimal1: ISettlement = {
  animals: [],
  biome: "forest",
  reservior: false,
  capacity: 1,
  ForPredator: false,
};

function checkCageForAnimal1(animal: IAnimals, cage: ISettlement) {
  let count: number = 0;
  if (
    animal.reservoir == cage.reservior &&
    animal.biome == cage.biome &&
    animal.predator == cage.ForPredator
  ) {
    for (let i = 0; i < cage.animals.length; i++) {
      count += 1; 
    }
    if (cage.capacity > count) {
      cage.animals.push(animal);
      console.log(` ${animal.name}- this animal is in this cage `)
    } else {
      console.log("There is no empty space in this cage!");
    }
  } else {
    console.log(`This cage is not available for  '${animal.name}'  animal`);
  }
}
function ShowAllNamesInCage(cage: ISettlement) {
  for (let i = 0; i < cage.animals.length; i++) {
    console.log(cage.animals[i].name);
  }
}
checkCageForAnimal1(dog, cageForAnimal1);
checkCageForAnimal1(fish, cageForAnimal1);
checkCageForAnimal1(tiger, cageForAnimal1);
checkCageForAnimal1(cat, cageForAnimal1);
