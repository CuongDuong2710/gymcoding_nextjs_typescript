const library = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', availableCopies: 3},
    { title: '1984', author: 'George Orwell', availableCopies: 2},
    { title: 'Pride and Prejudice', author: 'Jane Austen', availableCopies: 4},
    { title: 'The Great Gasby', author: 'F.Scott Fitzgerald', availableCopies: 2}
]

const loanQueue = []
const nextLoanId = 1

function addNewBook(bookObj) {
    library.push(bookObj)
}

function borrowBook(title) {
    const selectedBook = library.find(bookObj => bookObj.title === title)

    if (selectedBook.availableCopies <= 0) {
        console.error(`${title} has no available copies`)
        return
    }
    selectedBook.availableCopies--

    const newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' }
    console.log('newLoan: ', newLoan)
    loanQueue.push(newLoan)
    return newLoan
}

function returnBook(loanId) {
    console.log('Loan queue: ', loanQueue)
    const loan = loanQueue.find(loan => loan.id === loanId)
    console.log('loan: ', loan)
    loan.status = 'returned'
    loan.book.availableCopies++
    return loan
}

// Testing
addNewBook({ title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', availableCopies: 1 })
addNewBook({ title: 'Brave New World', author: 'Aldous Huxley', availableCopies: 3 })
addNewBook({ title: 'The Catcher in the Rye', author: 'J.D.Salinger', availableCopies: 2 })

borrowBook('Brave New World')
/* const newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' }
^

TypeError: nextLoanId -> Assignment to constant variable. */

returnBook("1")
// input `string` instead of `number` -> cannot find `loan` book

console.log('Library: ', library)
console.log('Loan queue: ', loanQueue)