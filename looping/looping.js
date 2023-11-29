for (let i = 0; i <= 4; i++) {
    console.log(i);
}
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

console.log('LOOPING PERTAMA');
let i = 1;

while (i <= 10) {
    console.log(`${i} - I love coding`);
    i++;
}

console.log('LOOPING KEDUA');
let j = 10;

while (j >= 1) {
    console.log(`${j} - I will become a frontend developer`);
    j--;
}

console.log('LOOPING PERTAMA');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('LOOPING Kedua');
for (let j = 10; j >= 1; j--) {
    console.log(j);
}
const startRange = 1;
const endRange = 100;

let jumlahGanjil = 0;
let jumlahGenap = 0;

for (let i = startRange; i <= endRange; i++) {
    if (i % 2 === 0) {
        jumlahGenap += i;
    } else {
        jumlahGanjil += i;
    }
}

console.log(`Jumlah bilangan ganjil dari ${startRange} hingga ${endRange}: ${jumlahGanjil}`);
console.log(`Jumlah bilangan genap dari ${startRange} hingga ${endRange}: ${jumlahGenap}`);

for (let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(`${i} kelipatan 3`);
    } else {
    }
}
for (let j = 1; j <= 100; j += 5) {
    if (j % 6 === 0) {
        console.log(`${j} kelipatan 6`);
    } else {
    }
}

for (let k = 1; k <= 100; k += 9) {
    if (k % 10 === 0) {
        console.log(`${k} kelipatan 10`);
    } else {
    }
}

let input = 5;

for (let i = 1; i <= input; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    console.log(row);
}
