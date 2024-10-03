type Book = {
    id: number
    title: string
    author: string
    availableCopies: number
}

type Loan = {
    id: number
    book: Book
    status: 'borrowed' | 'returned'
}

const library: Book[] = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', availableCopies: 3},
    { id: 2, title: '1984', author: 'George Orwell', availableCopies: 2},
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', availableCopies: 4},
    { id: 4, title: 'The Great Gasby', author: 'F.Scott Fitzgerald', availableCopies: 2}
]

let favoriteColor: string = "blue"
// favoriteColor = 1 // Type 'number' is not assignable to type 'string'.ts(2322)
let availabeBook: number = 250
let isOpenOnSundays: boolean = true


const loanQueue: Loan[] = []
let nextLoanId = 1 // change to `let`

function addNewBook(bookObj: Book) { // Parameter 'bookObj' implicitly has an 'any' type.ts(7006)
    library.push(bookObj)
}

function borrowBook(title: string) {
    // Typescript warns `selectedBook` is possible undefined
    const selectedBook = library.find(bookObj => bookObj.title === title)

    // So we add more code for check `selectedBook` is exist. 
    if (!selectedBook) {
        console.error(`${title} does not exist in library`)
        return
    }

    if (selectedBook.availableCopies <= 0) {
        console.error(`${title} has no available copies`)
        return
    }
    selectedBook.availableCopies--

    const newLoan: Loan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' }
    //  Types of property 'status' are incompatible.
    // Type 'string' is not assignable to type '"borrowed" | "returned"'.
    console.log('newLoan: ', newLoan)
    loanQueue.push(newLoan)
    return newLoan
}

function returnBook(loanId: number) { // Parameter 'loanId' implicitly has an 'any' type.ts(7006)
    const loan = loanQueue.find(loan => loan.id === loanId)

    if (!loan) {
        console.error(`${loanId} was not found in the loan queue`)
        throw new Error()
    }
    loan.status = 'returned'
    loan.book.availableCopies++
    return loan
}

// Type narrowing
function getBookDetail(identifier: string | number) {
    if (typeof identifier === "string") {
        return library.find(book => book.title.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    } else {
        return library.find(book => book.id === identifier)
    }
}

// Testing
addNewBook({ id: 5, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', availableCopies: 1 })
addNewBook({ id: 6, title: 'Brave New World', author: 'Aldous Huxley', availableCopies: 3 })
addNewBook({ id: 7, title: 'The Catcher in the Rye', author: 'J.D.Salinger', availableCopies: 2 })

// borrowBook('Brave New World')
/* const newLoan = { id: nextLoanId++, book: selectedBook, status: 'borrowed' }
^

TypeError: nextLoanId -> Assignment to constant variable. */

// returnBook(1)
// input `string` instead of `number` -> cannot find `loan` book

// console.log('Library: ', library)
// console.log('Loan queue: ', loanQueue)
console.log(getBookDetail(1))