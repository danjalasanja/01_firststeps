console.log("hoii duu");

let message;

message =
  "hoi du. kennsch da lied? dä dö däää düüü dä dö dä däää dä dä dü düüü dü dü düüü dü dü düdü düüdüdüüüü döröödüüdüüü";

// alert(message);
console.log(message);

let admin, name;

name = "John";
admin = name;
console.log(admin);

let fruit1 = "banane";
let fruit2 = "orange";
let fruchtsalat;

fruchtsalat = fruit1 + ", " + fruit2;

console.log(fruchtsalat);

//if statement
const currentWeather = "rainy";

if (currentWeather === "sunny") {
  console.log("sun");
} else {
  console.log("rain");
}

//objects
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

//arrays
const myArray = ["jonas", "elias", "cyril", "jin", "tara"];

console.log("myArray[2]: ", myArray[2]);
