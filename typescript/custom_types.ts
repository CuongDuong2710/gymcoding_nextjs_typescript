type Instrument = string
let primaryInstrument: Instrument = 'guitar'

type VehicleType = 'motocycle' | 'car' | 'truck'

// let vehicleType: VehicleType = 'abc' // Type '"abc"' is not assignable to type 'VehicleType'

type Vehicle = {
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

function displayVehicleInfo(vehicle: Vehicle) {
    console.log(`${vehicle.model} has a ${vehicle.engine?.type} engine.`) // 'vehicle.engine' is possibly 'undefined'
}

let vehicle: Vehicle = {
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
    model: 'Model3',
    year: 2023,
    isElectric: true,
    vehicleType: 'car'
}

displayVehicleInfo(vehicle) // Civic has a Inline-4 engine.
displayVehicleInfo(vehicle2) // Model3 has a undefined engine.

// tsc custom_types.ts -> compile into custom_types.js
// node custom_types.js