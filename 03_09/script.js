/* Exercise creating objects with methods */

const pizza = {
    sauce: "tomato",
    cheese: true,
    topping: {
        topping1: "pepperoni",
        topping2: "sausage",
        topping3: "peppers",
    },
    newtopping: function(newtopping1, newtopping2, newtopping3) {
        this.topping.topping1 = newtopping1;
        this.topping.topping2 = newtopping2;
        this.topping.topping3 = newtopping3;
    },
}

console.log("pizza toppings: ", pizza.topping.topping1, ", ", pizza.topping.topping2, ", ", pizza.topping.topping3);
/*runs the method(function)*/
pizza.newtopping("cheese", "cheese", "and more cheese");
/*new toppings afte running the method(function)*/
console.log("new pizza toppings: ", pizza.topping.topping1, ", ", pizza.topping.topping2, ", ", pizza.topping.topping3);