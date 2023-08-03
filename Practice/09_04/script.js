/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const container = document.querySelector(".container");
const cell = document.querySelectorAll("ul li");

container.addEventListener("mouseenter", () => {
    container.classList.add("red");
});

container.addEventListener(
    "mouseleave",
    () => {
      container.classList.remove("red");
    },
    false
  );


cell.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("blue");
    });
    
    item.addEventListener(
        "mouseleave",
        () => {
            item.classList.remove("blue");
        },
        false
        );
    
        item.addEventListener("click", () => {
            item.classList.toggle("click");
    });
});
// cell.addEventListener("mouseenter", () => {
//     cell.classList.add("blue");
// });

// cell.addEventListener(
//     "mouseleave",
//     () => {
//         cell.classList.remove("blue");
//     },
//     false
//     );

// cell.addEventListener("click", () => {
//     cell.classList.toggle("click");
// });