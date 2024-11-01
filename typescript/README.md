tsc custom_types.ts

// tsc custom_types.ts -> compile into custom_types.js
// node custom_types.js

`type Partial<T> = { [P in keyof T]?: T[P] | undefined; }.`
Make all properties in T optional

`Partial<Vehicle>`
Make all properties in Vehicle optional

`Omit<Vehicle, "id">` will have all the properties of Vehicle, just minus the `id` property

--- Run ---
node index.js

1. Typescript wanrs type of variable 
Type 'number' is not assignable to type 'string'.ts(2322)

2. Typescript wanrs filter or find function can return undefined

const selectedBook = library.find(bookObj => bookObj.title === title)

// So we add more code for check `selectedBook` is exist. 
    if (!selectedBook) {
        console.error(`${title} does not exist in library`)
        return // Function return types (chap 13): Type 'undefined' is not assignable to type 'Loan'.ts(2322)
    }

3. Partial
`type Partial<T> = { [P in keyof T]?: T[P] | undefined; }.`
Make all properties in T optional

function updateVehicle(id: number, updates: Partial<Vehicle>){...}
updateVehicle(1, { model: 'Honda Suzuki' }) // udpate only part of car property

4. Omit
`Omit<Vehicle, "id">` will have all the properties of Vehicle, just minus the `id` property

function addNewVehicle(newVeh: Omit<Vehicle, "id">): Vehicle {...}
function addNewVehicleTwo(newVeh: Omit<Vehicle, "id" | "model">): Vehicle {...}

addNewVehicle({ model: 'Toyota Camry 111', vehicleType: 'car', year: 2023, isElectric: false });
addNewVehicleTwo({ vehicleType: 'car', year: 2023, isElectric: true });

5. Generic Type

function getLastItem<T>(array:T[]) {
    return array[array.length - 1]
}

// Array of number:
function getLastItem<number>(array: number[]): number

// Array of string:
function getLastItem<string>(array: string[]): string

// Array of Objects
function getLastItem<{
    name: string;
    booksPublished: number;
}>(array: {
    name: string;
    booksPublished: number;
}[]): {
    name: string;
    booksPublished: number;
}
