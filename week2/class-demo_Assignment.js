// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:
//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)

class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable=true){
        this.title=title;
        this.author= author ;
        this.pages=pages ;
        this.isAvailable=isAvailable ;
    }

    // Marks the book as not available
    borrow() {
        this.isAvailable = false;
    }

    // Marks the book as available
    returnBook() {
        this.isAvailable = true;
    }

    // Prints book details
    getInfo() {
        console.log(`${this.title} by ${this.author} (${this.pages} pages) - Available: ${this.isAvailable}`);
    }

    // Returns true if pages > 300
    get isLongBook() {
        return this.pages > 300;
    }
}


//   1. Create at least 5 book objects using the class:
let book1 = new Book("One Piece", "Oda", 1989);
let book2 = new Book("Bleach", "Kubo", 1000);
let book3 = new Book("Naruto", "Masashi", 999);
let book4 = new Book("MHA", "Baka", 111);
let book5 = new Book("JJK", "Gege", 697);

//   2. Perform the following operations:

//       i. Display info of all books
console.log("All books:");
book1.getInfo();
book2.getInfo();
book3.getInfo();
book4.getInfo();
book5.getInfo();

//       ii. Borrow 2 books and show their availability status
book1.borrow();
book2.borrow();
console.log("\nAfter borrowing book1 and book2:");
book1.getInfo();
book2.getInfo();

//       iii. Return 1 book and show updated status
book1.returnBook();
console.log("\nAfter returning book1:");
book1.getInfo();

//       iv. Count how many books are "long books" (more than 300 pages)
const books = [book1, book2, book3, book4, book5];
let cnt = 0;
for (let b of books) {
    if (b.isLongBook) cnt++;
}
console.log("\nNumber of long books:", cnt);

//       v. List all available books
console.log("\nAvailable books:");
for (let b of books) {
    if (b.isAvailable) {
        b.getInfo();
    }
}