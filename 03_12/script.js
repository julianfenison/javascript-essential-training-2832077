

import Pizza from "./pizza.js";

const anotherPizza = new Pizza(
    "tomato",
    true,
    "pepperoni",
    "steak",
    "bacon",
    "July 1, 2023"
);

console.log("Here's my new pizza, ", anotherPizza);

console.log("My toppings are", anotherPizza.toppings.topping1, ", ", anotherPizza.toppings.topping2, ", and ", anotherPizza.toppings.topping3);

anotherPizza.newTopping("cheese", "cheese", "more cheese!");

console.log("Actually, scratch that. My new toppings are", anotherPizza.toppings.topping1, ", ", anotherPizza.toppings.topping2, ", and ", anotherPizza.toppings.topping3);

console.log(anotherPizza.dateAcquired);

console.log("Days since pizza bought: ", anotherPizza.pizzaAge());