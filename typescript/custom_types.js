var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var primaryInstrument = 'guitar';
var nextVehicleId = 4;
function displayVehicleInfo(vehicle) {
    var _a;
    console.log("".concat(vehicle.model, " has a ").concat((_a = vehicle.engine) === null || _a === void 0 ? void 0 : _a.type, " engine.")); // 'vehicle.engine' is possibly 'undefined'
}
function updateVehicle(id, updates) {
    var foundVehicle = vehicles.find(function (vehicle) { return vehicle.id === id; }); // type Partial<T> = { [P in keyof T]?: T[P] | undefined; }. 
    //Make all properties in T optional
    if (!foundVehicle) {
        console.error('Vehicle not found');
        return;
    }
    Object.assign(foundVehicle, updates);
}
// type Omit<T, K extends keyof any> = { [P in Exclude<keyof T, K>]: T[P]; }
// Construct a type with the properties of T except for those in type K.
function addNewVehicle(newVeh) {
    var vehicle = __assign({ id: nextVehicleId++ }, newVeh);
    vehicles.push(vehicle);
    return vehicle;
}
function addNewVehicleTwo(newVeh) {
    var vehicle = __assign({ id: nextVehicleId++, model: 'Vinfast' }, newVeh);
    vehicles.push(vehicle);
    return vehicle;
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
// updateVehicle(1, { model: 'Honda Suzuki' })
// updateVehicle(3, { 
//    vehicleType: 'car' })
//console.log(vehicles)
addNewVehicle({ model: 'Toyota Camry 111', vehicleType: 'car', year: 2023, isElectric: false });
addNewVehicleTwo({ vehicleType: 'car', year: 2023, isElectric: true });
console.log(vehicles);
