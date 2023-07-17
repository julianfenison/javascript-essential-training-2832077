/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let julianItems = ["phone", "blue", 2, true, 44.4];

console.log(julianItems);
julianItems.pop();
console.log(julianItems);
julianItems.unshift(julianItems.pop());
console.log(julianItems);
julianItems.sort();
console.log(julianItems);
foundItem = julianItems.find(item => item > 1);
console.log(foundItem);
//didnt get the last one
julianItems.splice(julianItems.indexOf(foundItem), 1);
console.log(julianItems);