let base = parseInt(prompt("Enter base:"), 10);
let distance = parseInt(prompt("Enter distance:"), 10);
let minutesLate = parseInt(prompt("Enter minutesLate:"), 10);
let seed = parseInt(prompt("Enter seed:"), 10);

let fare = base + 7 * distance;

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += fare * 0.1;
}

if (seed % 2 === 1) {
    fare -= seed;
} else {
    fare += seed;
}

// round up to nearest multiple of 5
fare = Math.ceil(fare / 5) * 5;

alert(fare);