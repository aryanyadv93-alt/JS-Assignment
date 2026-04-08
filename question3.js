let N = parseInt(prompt("Enter N:"), 10);
let K = parseInt(prompt("Enter K:"), 10);

function isPalindrome(num) {
    let str = num.toString();
    let rev = str.split("").reverse().join("");
    return str === rev;
}

let answer = -1;

for (let X = 0; X <= 100000; X++) {
    let val = N + X;

    if (val % K === 0 && isPalindrome(val)) {
        answer = X;
        break;
    }
}

alert(answer);