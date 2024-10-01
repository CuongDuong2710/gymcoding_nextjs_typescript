"use strict";
let primaryInstrument = 'guitar';
function displayVehicleInfo(vehicle) {
    var _a;
    console.log(`${vehicle.model} has a ${(_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type} engine.`); // 'vehicle.engine' is possibly 'undefined'
}
let vehicle = {
    model: 'Civic',
    year: 2021,
    isElectric: false,
    engine: {
        type: 'Inline-4',
        horsepower: 158,
        fuelType: 'Gasoline'
    }
};
let vehicle2 = {
    model: 'Model3',
    year: 2023,
    isElectric: true
};
displayVehicleInfo(vehicle); // Civic has a Inline-4 engine.
displayVehicleInfo(vehicle2); // Model3 has a undefined engine.
// tsc custom_types.ts -> compile into custom_types.js
// node custom_types.js
