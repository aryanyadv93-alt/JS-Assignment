let N = parseInt(prompt("Enter N:"), 10);
let seed = parseInt(prompt("Enter seed:"), 10);

let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

let result = "NO";

if (current >= 100 && current <= 999) {
    let middleDigit = Math.floor(current / 10) % 10;
    if (middleDigit === seed) {
        result = "YES";
    }
}

alert(result + ", " + current);