type Instrument = string
let primaryInstrument: Instrument = 'guitar'

type VehicleType = 'motocycle' | 'car' | 'truck'

// let vehicleType: VehicleType = 'abc' // Type '"abc"' is not assignable to type 'VehicleType'

type Vehicle = {
    id: number
    model: string
    year: number
    isElectric: boolean
    engine?: Engine
    vehicleType: VehicleType
}

type Engine = {
    type: string
    horsepower: number
    fuelType: string
}

let nextVehicleId = 4

function displayVehicleInfo(vehicle: Vehicle) {
    console.log(`${vehicle.model} has a ${vehicle.engine?.type} engine.`) // 'vehicle.engine' is possibly 'undefined'
}

function updateVehicle(id: number, updates: Partial<Vehicle>) { // `updates` is an object that only contain the properties we want to change
    const foundVehicle = vehicles.find(vehicle => vehicle.id === id) // type Partial<T> = { [P in keyof T]?: T[P] | undefined; }. 
    //Make all properties in T optional

    if (!foundVehicle) {
        console.error('Vehicle not found')
        return
    }

    Object.assign(foundVehicle, updates)
}

function addNewVehicle(newVeh: any): Vehicle {
    const vehicle: Vehicle = {
        id: nextVehicleId++,
        ...newVeh
    }
    vehicles.push(vehicle)
    return vehicle
}

let vehicle: Vehicle = {
    id: 1,
    model: 'Civic',
    year: 2021,
    isElectric: false,
    engine: {
        type: 'Inline-4',
        horsepower: 158,
        fuelType: 'Gasoline'
    },
    vehicleType: 'car'
}

let vehicle2: Vehicle = {
    id: 2,
    model: 'Model3',
    year: 2023,
    isElectric: true,
    vehicleType: 'car'
}

let vehicle3: Vehicle = {
    id: 3,
    model: 'Ford F-150',
    year: 2024,
    isElectric: false,
    vehicleType: 'truck'
}

const vehicles: Vehicle[] = [
    vehicle,
    vehicle2,
    vehicle3
]

// displayVehicleInfo(vehicle) // Civic has a Inline-4 engine.
// displayVehicleInfo(vehicle2) // Model3 has a undefined engine.

// tsc custom_types.ts -> compile into custom_types.js
// node custom_types.js

// updateVehicle(1, { model: 'Honda Suzuki' })
// updateVehicle(3, { 
//    vehicleType: 'car' })
//console.log(vehicles)

addNewVehicle({  model: 'Toyota Camry', vehicleType: 'car',  year: 2023, isElectric: false })

console.log(vehicles)