/*Creating Pizza Class*/

class Pizza {
    //parameters
    constructor(
        sauce,
        cheese,
        toppingNum1,
        toppingNum2,
        toppingNum3,
        dateAcquired
    ) {
        //define properties
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = {
            topping1:  toppingNum1,
            topping2:  toppingNum2,
            topping3:  toppingNum3,
        },
        this.dateAcquired = dateAcquired;
    }/*ALWAYS MAKE SURE IF YOU'RE ADDING METHODS, DO IT OUTSIDE OF DEFINING PROPERTIES*/
    //adding methods
    newTopping(newTopping1, newTopping2, newTopping3) {
        this.toppings.topping1 = newTopping1;
        this.toppings.topping2 = newTopping2;
        this.toppings.topping3 = newTopping3;
    }//Make sure you don't add extra spaces or your methods won't work
    pizzaAge() {
        let now = new Date;
        let acquire = new Date(this.dateAcquired);
        let elasped = now - acquire;
        let daysSinceAcquire = Math.floor(elasped / (1000 * 3600 * 24));
        return daysSinceAcquire;
    }
}

export default Pizza;