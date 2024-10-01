type Instrument = string
let primaryInstrument: Instrument = 'guitar'

type Vehicle = {
    model: string
    year: number
    isElectric: boolean
    engine: Engine
}

type Engine = {
    type: string
    horsepower: number
    fuelType: string
}

let vehicle: Vehicle = {
    model: 'Civic',
    year: 2021,
    isElectric: false,
    engine: {
        type: 'Inline-4',
        horsepower: 158,
        fuelType: 'Gasoline'
    }
}

let vehicle2: Vehicle = {
    model: 'Model3',
    year: 2023,
    isElectric: true,
    engine: {
        type: 'Inline-4',
        horsepower: 158,
        fuelType: 'Gasoline'
    }
}