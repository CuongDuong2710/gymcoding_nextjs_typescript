var library = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', availableCopies: 3 },
    { title: '1984', author: 'George Orwell', availableCopies: 2 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', availableCopies: 4 },
    { title: 'The Great Gasby', author: 'F.Scott Fitzgerald', availableCopies: 2 }
];
var favoriteColor = "blue";
// favoriteColor = 1 // Type 'number' is not assignable to type 'string'.ts(2322)
var availabeBook = 250;
var isOpenOnSundays = true;
var loanQueue = [];
var nextLoanId = 1; // change to `let`
function addNewBook(bookObj) {
    library.push(bookObj);
}
function borrowBook(title) {
    // Typescript warns `selectedBook` is possible undefined
    var selectedBook = library.find(function (bookObj) { return bookObj.title === title; });
    // So we add more code for check `selectedBook` is exist. 
    if (!selectedBook) {
        console.error("".concat(title, " does not exist in library"));
        return;
    }
    if (selectedBook.availableCopies <= 0) {
        console.error("".concat(title, " has no available copies"));
        return;
    }
    selectedBook.availableCopies--;
    var newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' };
    console.log('newLoan: ', newLoan);
    loanQueue.push(newLoan);
    return newLoan;
}
function returnBook(loanId) {
    console.log('Loan queue: ', loanQueue);
    var loan = loanQueue.find(function (loan) { return loan.id === loanId; });
    console.log('loan: ', loan);
    if (!loan) {
        console.error("".concat(loanId, " was not found in the loan queue"));
        throw new Error();
    }
    loan.status = 'returned';
    loan.book.availableCopies++;
    return loan;
}
// Testing
addNewBook({ title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', availableCopies: 1 });
addNewBook({ title: 'Brave New World', author: 'Aldous Huxley', availableCopies: 3 });
addNewBook({ title: 'The Catcher in the Rye', author: 'J.D.Salinger', availableCopies: 2 });
borrowBook('Brave New World');
/* const newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' }
^

TypeError: nextLoanId -> Assignment to constant variable. */
returnBook(1);
// input `string` instead of `number` -> cannot find `loan` book
console.log('Library: ', library);
console.log('Loan queue: ', loanQueue);
