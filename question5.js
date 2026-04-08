let N = parseInt(prompt("Enter N:"), 10);
let seed = parseInt(prompt("Enter seed:"), 10);

let m = 0;
let sum = 0;
let skip = seed + 2;

while (sum < N) {
    m++;
    if (m % skip !== 0) {
        sum += m;
    }
}

alert(m + " " + sum);