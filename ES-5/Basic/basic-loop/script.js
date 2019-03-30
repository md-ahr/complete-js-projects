let values = ['ahr', 'web', 'play', true, 'fish', 25, 'dhaka', 'bangladesh'];

let i;

for (i = 0; i < values.length; i++) {
    console.log(values[i]);
}



// Loop Continue If There Get a String

for (i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
        continue;
    }
    console.log(values[i]);
}



// Loop Break If There Get a String

for (i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
        break;
    }
    console.log(values[i]);
}



// Reverse Loop

for (i = values.length-1; i > 0; i--) {
    console.log(values[i]);
}