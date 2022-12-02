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

/* const add = function (...numbers) {
  let sum = 0;
  for (i of numbers) sum += i;
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
const x = [23, 5, 7];
add(...x); */

//todo Utilizando no método ---
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

//! Nulish operator

/* // console.log(restaurant.openingHours.sat?.open);
const x = 21;
// console.log((isNaN(x) && `X não é um número`) || isNaN(x) || `X  é um número`);
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
console.log(restaurant.numGuests);
 */
//! Looping Objects: Object keys , values and entries. ------------------------

//todo Object.keys()
//Nos devolve um array com as chaves dentro do OBJETO, ou seja, o nome de cada propriedade
/* 
const properties = Object.entries(restaurant.openingHours);
console.log(properties);

for ([key, { open, close }] of properties) {
  console.log(key, open, close);
}
 */
//todo Object.entries()
// Torna possível que trabalhemos com 2 valores, o primeiro sendo referente ao INDEX do array, já o segundo ao valor daquela posição.

//Printing in each day the restaurant opens

/* let openString = `We are open in the following days: `;
for ([index, day] of properties.entries()) {
  index == properties.length - 1
    ? (openString += `${day}. `)
    : (openString += `${day}, `);
  console.log(openString);
  console.log(index);
}
 */
/* const properties2 = Object.entries(restaurant.openingHours);
console.log(properties2);
for (let [key, { open, close }] of properties2) {
  console.log(key, ' open:', open, ' close:', close);
}
 */
//Exemplo 2
/* cliente1 = {
  carro: {
    modelo: 'Voyage',
    ano: 2013,
  },
  cliente: {
    nome: 'Amanda',
    idade: 25,
  },
};

const information = Object.keys(cliente1);
console.log(
  `Essa são as informações sobre ${cliente1.cliente.nome}\n${information}`
);
for ([index, nomeChave] of information.entries()) {
  console.log(index, nomeChave);
}
 */

//! Sets -------------------------------------
//Exemplo 1
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

//Exemplo 2
const staffObject = {};
let staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
let staffUnique = new Set(staff);
// staffUnique.add('Delivery guy');
// console.log(staffUnique);
// console.log(staffUnique.size);
console.log(staffUnique.has('Manager'));

//! Estrutura de dados map() ------------------------

//Exemplo 1

const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
];

const novasPessoas = {};
for ({ nome, id } of pessoas) {
  novasPessoas[id] = { id, nome };
}

console.log(novasPessoas);
