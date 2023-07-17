/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);


console.log("Backpack Strap Left: ", backpack.strapLength.left);
console.log("Backpack Strap right: ", backpack.strapLength.right);

backpack.newStrapLength(10, 15);

console.log("Backpack Strap Left now: ", backpack.strapLength.left);
console.log("Backpack Strap right now: ", backpack.strapLength.right);