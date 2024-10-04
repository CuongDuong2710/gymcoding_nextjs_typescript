var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var library = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', availableCopies: 3 },
    { id: 2, title: '1984', author: 'George Orwell', availableCopies: 2 },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', availableCopies: 4 },
    { id: 4, title: 'The Great Gasby', author: 'F.Scott Fitzgerald', availableCopies: 2 }
];
var favoriteColor = "blue";
// favoriteColor = 1 // Type 'number' is not assignable to type 'string'.ts(2322)
var availabeBook = 250;
var isOpenOnSundays = true;
var loanQueue = [];
var nextLoanId = 1; // change to `let`
var nextBookId = 5;
function addNewBook(bookObj) {
    var newBook = __assign({ id: nextBookId++ }, bookObj);
    library.push(newBook);
}
function borrowBook(title) {
    // Typescript warns `selectedBook` is possible undefined
    var selectedBook = library.find(function (bookObj) { return bookObj.title === title; });
    // So we add more code for check `selectedBook` is exist. 
    if (!selectedBook) {
        console.error("".concat(title, " does not exist in library"));
        return; // Function return types (chap 13): Type 'undefined' is not assignable to type 'Loan'.ts(2322)
    }
    if (selectedBook.availableCopies <= 0) {
        console.error("".concat(title, " has no available copies"));
        return;
    }
    selectedBook.availableCopies--;
    var newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' };
    //  Types of property 'status' are incompatible.
    // Type 'string' is not assignable to type '"borrowed" | "returned"'.
    console.log('newLoan: ', newLoan);
    loanQueue.push(newLoan);
    return newLoan;
}
function returnBook(loanId) {
    var loan = loanQueue.find(function (loan) { return loan.id === loanId; });
    if (!loan) {
        console.error("".concat(loanId, " was not found in the loan queue"));
        throw new Error();
    }
    loan.status = 'returned';
    loan.book.availableCopies++;
    return loan;
}
// Type narrowing
function getBookDetail(identifier) {
    if (typeof identifier === "string") {
        return library.find(function (book) { return book.title.toLocaleLowerCase() === identifier.toLocaleLowerCase(); });
    }
    else {
        return library.find(function (book) { return book.id === identifier; });
    }
}
// Testing
addNewBook({ title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', availableCopies: 1 });
addNewBook({ title: 'Brave New World', author: 'Aldous Huxley', availableCopies: 3 });
addNewBook({ title: 'The Catcher in the Rye', author: 'J.D.Salinger', availableCopies: 2 });
console.log('Library: ', library);
// borrowBook('Brave New World')
/* const newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' }
^

TypeError: nextLoanId -> Assignment to constant variable. */
// returnBook(1)
// input `string` instead of `number` -> cannot find `loan` book
// console.log('Library: ', library)
// console.log('Loan queue: ', loanQueue)
// console.log(getBookDetail(1))
/// ANY types -> turning off TypeScript checking for that variable. Don't use this keyword.
/* let temperature: any = 72
temperature = 'warm'
temperature.slice(0,2) */ 
