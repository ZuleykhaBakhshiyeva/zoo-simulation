interface AnimalsCharacteristic{
    name:string;
    age:number;
    amountOfFoodPerDay:number
}
interface AnimalTypesCharacteristic {
  name: string;
  biome: string;
  reservoir: boolean;
  area:number;
  eat:string;
  predator:boolean;
  herbivore:boolean;
}

const animalsCharacteristics: AnimalsCharacteristic[] =getAnimalsCharacteristics();
function getAnimalsCharacteristics():AnimalsCharacteristic[]{
    return [
      {
        name: "Bear",
        age: 8,
        amountOfFoodPerDay: 200,
      },
      {
        name: "Giraffe",
        age: 14,
        amountOfFoodPerDay: 250,
      },
      {
        name: "Rabbit",
        age: 2,
        amountOfFoodPerDay: 20,
      },
      {
        name: "Bird",
        age: 1,
        amountOfFoodPerDay: 10,
      },
      {
        name: "Turtle",
        age: 25,
        amountOfFoodPerDay: 25,
      },
      {
        name: "Cat",
        age: 5,
        amountOfFoodPerDay: 40,
      },
      {
        name: "Dog",
        age: 7,
        amountOfFoodPerDay: 50,
      },
      {
        name: "Horse",
        age: 12,
        amountOfFoodPerDay: 150,
      },
      {
        name: "Chicken",
        age: 1,
        amountOfFoodPerDay: 5,
      },
      {
        name: "Crocodile",
        age: 23,
        amountOfFoodPerDay: 240,
      },
      {
        name: "Elephant",
        age: 27,
        amountOfFoodPerDay: 250,
      },
      {
        name: "Tiger",
        age: 6,
        amountOfFoodPerDay: 120,
      },
      {
        name: "Lion",
        age: 17,
        amountOfFoodPerDay: 150,
      },
      {
        name: "Cow",
        age: 8,
        amountOfFoodPerDay: 70,
      }
    ];
}
console.log(animalsCharacteristics);

const animalTypesCharacteristics: AnimalTypesCharacteristic[] =getAnimalTypesCharacteristics();
function getAnimalTypesCharacteristics(): AnimalTypesCharacteristic[] {
    return [
      {
        name: "Bear",
        biome: "Land",
        reservoir: false,
        area: 200,
        eat: "meat",
        predator: true,
        herbivore: false,
      },
      {
        name: "Giraffe",
        biome: "Land",
        reservoir: false,
        area: 250,
        eat: "Leaves",
        predator: true,
        herbivore: true,
      },
      {
        name: "Rabbit",
        biome: "Land",
        reservoir: false,
        area: 80,
        eat: "Carrot",
        predator: false,
        herbivore: true,
      },
      {
        name: "Bird",
        biome: "Weather",
        reservoir: false,
        area: 30,
        eat: "Leaves",
        predator: false,
        herbivore: true,
      },
      {
        name: "Turtle",
        biome: "Land",
        reservoir: true,
        area: 50,
        eat: "Grass",
        predator: false,
        herbivore: true,
      },
      {
        name: "Cat",
        biome: "Land",
        reservoir: false,
        area: 50,
        eat: "Milk",
        predator: false,
        herbivore: false,
      },
      {
        name: "Dog",
        biome: "Land",
        reservoir: false,
        area: 70,
        eat: "Meat",
        predator: true,
        herbivore: false,
      },
      {
        name: "Horse",
        biome: "Land",
        reservoir: false,
        area: 170,
        eat: "Grass",
        predator: true,
        herbivore: true,
      },
      {
        name: "Chicken",
        biome: "Land",
        reservoir: false,
        area: 20,
        eat: "Grass",
        predator: false,
        herbivore: true,
      },
      {
        name: "Crocodile",
        biome: "Water",
        reservoir: true,
        area: 250,
        eat: "Meat",
        predator: true,
        herbivore: false,
      },
      {
        name: "Elephant",
        biome: "Land",
        reservoir: false,
        area: 280,
        eat: "Leaves",
        predator: true,
        herbivore: true,
      },
      {
        name: "Tiger",
        biome: "Land",
        reservoir: false,
        area: 200,
        eat: "Meat",
        predator: true,
        herbivore: false,
      },
      {
        name: "Lion",
        biome: "Land",
        reservoir: false,
        area: 200,
        eat: "Meat",
        predator: true,
        herbivore: false,
      }
    ];
}
console.log(animalTypesCharacteristics);

for(const AnimalTypesCharacteristic of animalTypesCharacteristics){
    if(AnimalTypesCharacteristic.predator===true){
        console.log(
          `This animal lives with predator ${AnimalTypesCharacteristic.name}`
        );
    }
    if (AnimalTypesCharacteristic.herbivore === true) {
      console.log(
        `This animal lives with herbivore ${AnimalTypesCharacteristic.name}`
      );
    }
    if(AnimalTypesCharacteristic.reservoir===true){
      console.log(
        `This animal has a reservoir ${AnimalTypesCharacteristic.name}`
      )
    }
    if(AnimalTypesCharacteristic.area<=200){
      console.log(
        `There is enough space for this animal: ${AnimalTypesCharacteristic.name},This animal area:${AnimalTypesCharacteristic.area}`
      )
    }
}