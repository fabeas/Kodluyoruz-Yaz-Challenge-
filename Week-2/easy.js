let num = Number(prompt("Bir sayı girin:"));

if (num <= 1) {
    alert(num + " asal sayı değildir.");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(num + " asal bir sayıdır.");
    } else {
        alert(num + " asal sayı değildir.");
    }
}


