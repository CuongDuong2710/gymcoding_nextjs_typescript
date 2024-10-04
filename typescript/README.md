tsc custom_types.ts

// tsc custom_types.ts -> compile into custom_types.js
// node custom_types.js

`type Partial<T> = { [P in keyof T]?: T[P] | undefined; }.`
Make all properties in T optional

`Partial<Vehicle>`
Make all properties in Vehicle optional

`Omit<Vehicle, "id">` will have all the properties of Vehicle, just minus the `id` property