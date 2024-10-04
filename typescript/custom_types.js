var primaryInstrument = 'guitar';
function displayVehicleInfo(vehicle) {
    var _a;
    console.log("".concat(vehicle.model, " has a ").concat((_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type, " engine.")); // 'vehicle.engine' is possibly 'undefined'
}
function updateVehicle(id, updates) {
    var foundVehicle = vehicles.find(function (vehicle) { return vehicle.id === id; });
    if (!foundVehicle) {
        console.error('Vehicle not found');
        return;
    }
    Object.assign(foundVehicle, updates);
}
var vehicle = {
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
};
var vehicle2 = {
    id: 2,
    model: 'Model3',
    year: 2023,
    isElectric: true,
    vehicleType: 'car'
};
var vehicle3 = {
    id: 3,
    model: 'Ford F-150',
    year: 2024,
    isElectric: false,
    vehicleType: 'truck'
};
var vehicles = [
    vehicle,
    vehicle2,
    vehicle3
];
// displayVehicleInfo(vehicle) // Civic has a Inline-4 engine.
// displayVehicleInfo(vehicle2) // Model3 has a undefined engine.
// tsc custom_types.ts -> compile into custom_types.js
// node custom_types.js
updateVehicle(1, { model: 'Honda Accord' });
updateVehicle(3, {
    vehicleType: 'car'
});
console.log(vehicles);
