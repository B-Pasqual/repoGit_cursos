//! Objeto utilizado nas explicações --------------
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`${mainIngredient} \n ${otherIngredients}`);
  },
};

/* // copy array
const newArr = [...restaurant.mainMenu];
console.log(newArr);

// join 2 arrays
const arrTotal = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(arrTotal); */

//Real world example
/* const ingredients = [
  prompt("Let's make pasta! Ingredient 1"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients); */

//! Criando novo restaurante(objeto), com as propriedades do restaurante original

/* const newRestaurant = { ...restaurant, foundedIn: 1998, founder: 'Guiseppe' };
console.log(newRestaurant);
  */

//! Rest pattern e spread operator

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(others);

const add = function (...numbers) {
  let sum = 0;
  for (i of numbers) sum += i;
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
const x = [23, 5, 7];
add(...x);

//Utilizando no método
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
