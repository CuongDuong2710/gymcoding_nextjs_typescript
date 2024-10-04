var bookPageCounts = [256, 300, 430, 192, 400];
var popularGenes = ['myystery', 'romance', 'science fiction', 'fantasy'];
var authors = [{ name: 'Jane', booksPublished: 5 }, { name: 'Mark', booksPublished: 3 }];
function getLastItem(array) {
    return array[array.length - 1];
}
// Type is number + array of number parameter + return type number
// function getLastItem<number>(array: number[]): number
// const bookPageCounts: number[]
console.log(getLastItem(bookPageCounts));
// Type is string + array of string parameter + return type string
// function getLastItem<string>(array: string[]): string
// const popularGenes: string[]
console.log(getLastItem(popularGenes));
// Type is object + array of object parameter + return type object
/* function getLastItem<{
    name: string;
    booksPublished: number;
}>(array: {
    name: string;
    booksPublished: number;
}[]): {
    name: string;
    booksPublished: number;
}

const authors: {
    name: string;
    booksPublished: number;
}[] */
console.log(getLastItem(authors));
