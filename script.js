console.log("hoii duu");

let message;

message =
  "hoi du. kennsch da lied? dä dö däää düüü dä dö dä däää dä dä dü düüü dü dü düüü dü dü düdü düüdüdüüüü döröödüüdüüü";

// alert(message);
console.log(message);

//change variabes ---------------------------------------------------------------------------------------------------
let admin, name;

name = "John";
admin = name;
console.log(admin);

// console log more than one word ---------------------------------------------------------------------------------------------------
let fruit1 = "banane";
let fruit2 = "orange";
let fruchtsalat;

fruchtsalat = fruit1 + ", " + fruit2;

console.log(fruchtsalat);

// if statements ---------------------------------------------------------------------------------------------------
const currentWeather = "rainy";

if (currentWeather === "sunny") {
  console.log("sun");
} else {
  console.log("rain");
}

// create objects ---------------------------------------------------------------------------------------------------
const myNumber = 273929;

const recipe = {
  duration: "30min",
  difficulty: "very hard",
  recipeNumber: myNumber,
  ingrediants: {
    sauce: ["pepper", "tomato"],
  },
};

console.log("recipe.duration:", recipe.duration);

recipe.duration = "40min";

console.log("recipe.duration:", recipe.duration);

// create an array -------------------------------------------------------------------------------------------------
const myArray = ["jonas", "elias", "cyril", "jin", "tara"];

console.log("myArray[2]: ", myArray[2]);

// make a function with return parameters --------------------------------------------------------------------------
const amountOfIADPeoples = 18;

function countIADPeoles(parameter) {
  //do something
}
function add(x, y, z) {
  return x + y + z;
  //const myFunctionResult = x + y + z; //dosen't works. it needs the return
}
const result1 = add(1, 2, 3); //connected to the function. If there is no return in it, the numbers in the add() are undefined

console.log("result1: + ", result1);

const number1 = 2;
const number2 = 4;
const number3 = 6;

const result2 = add(number1, number2, number3);
console.log("result2: + ", result2);

// functrion with return to change the age ------------------------------------------------------------------------
let myAge = 12;

function changeAge() {
  return 14;
}
console.log("myAge: ", myAge);
myAge = changeAge();
console.log("myAge after change: ", myAge);

// Team objects and function ---------------------------------------------------------------------------------------
const team = {
  goalie: "irina",
  verteidiger: "basil",
  mittelfeld: "michi",
  zuschauer: "greg",
};

function printClassList(goalie, verteidiger, mittelfeld, zuschauer) {
  console.log(`the goalie with the name: ${goalie}is right`); //shift ^für `zeiche
}

function printTeamPositions({ goalie, verteidiger }) {
  console.log("goalie:", goalie);
  console.log("verteidiger:", verteidiger);
}
printTeamPositions(team);

// test card -----------------------------------------------------------------------------------------------------
const cardArray = [
  { titel: "Oranges", imgUrl: "img/oranges.png" },
  { titel: "Oranges", imgUrl: "img/oranges.png" },
  { titel: "Oranges", imgUrl: "img/oranges.png" },
  { titel: "Oranges", imgUrl: "img/oranges.png" },
  { titel: "Oranges", imgUrl: "img/oranges.png" },
  { titel: "Oranges", imgUrl: "img/oranges.png" },
];
