import Book from "./book.js";

const firstbook = new Book(
    "Bear in the big blue house",
    40,
    "blue",
    20,
    false,
    true,
    false
);

const book2 = new Book(
    "Football Gods",
    500,
    "black",
    450,
    true,
    true,
    false
)

console.log("My new book: ", firstbook);

console.log(book2.finishBook);

book2.bookFinished(true);

console.log(book2.finishBook);