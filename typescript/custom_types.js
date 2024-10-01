var primaryInstrument = 'guitar';
function displayVehicleInfo(vehicle) {
    var _a;
    console.log("".concat(vehicle.model, " has a ").concat((_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type, " engine.")); // 'vehicle.engine' is possibly 'undefined'
}
var vehicle = {
    model: 'Civic',
    year: 2021,
    isElectric: false,
    engine: {
        type: 'Inline-4',
        horsepower: 158,
        fuelType: 'Gasoline'
    }
};
var vehicle2 = {
    model: 'Model3',
    year: 2023,
    isElectric: true
};
displayVehicleInfo(vehicle);
displayVehicleInfo(vehicle2);
