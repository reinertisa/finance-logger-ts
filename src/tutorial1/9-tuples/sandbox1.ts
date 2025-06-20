let arr1 = ['isa', 13, false];
arr1[0] = false;
arr1[1] = 'hello'
arr1[3] = 100

let arr2: [number, string, boolean] = [10, 'isa', false];
// arr2[0] = 'hi' -> this does not work
arr2[0] = 20 // this works

// arr2[1] = false -> this does not work
arr2[1] = 'sade' // this works

// arr2[2] = 'isa' -> this does not work
arr2[2] = true // this works