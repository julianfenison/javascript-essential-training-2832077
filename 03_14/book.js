/*creating a Book object*/

class Book {
    //parameters
    constructor(
        name,
        pages,
        color,
        pagesRead,
        digital,
        physical,
        finishBook
    ) {
        //define properties
        this.name = name;
        this.pages = pages;
        this.color = color;
        this.pagesRead = pagesRead;
        this.digital = digital;
        this.physical = physical;
        this.finishBook = finishBook;
    }//adding method
    bookFinished(bookStatus){
        this.finishBook = bookStatus;
    }
}

export default Book;