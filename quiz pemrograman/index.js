// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
let sentence = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;

// ---------------------------------------
console.log(`1. Let's Form a Sentence`)
console.log(sentence);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word_2 = 'wow JavaScript is so cool';
let firstWord = word_2[0] + word_2[1] + word_2[2];
let secondWord = word_2[4] + word_2[5] + word_2[6] + word_2[7] + word_2[8] + word_2[9] + word_2[10] + word_2[11] + word_2[12] + word_2[13];
let thirdWord = word_2[15] + word_2[16];
let fourthWord = word_2[18] + word_2[19];
let fifthWord = word_2[21] + word_2[22] + word_2[23] + word_2[24];

console.log(`2. Index Accessing - 1 by 1`)
console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let FirstWord3 = word3.substring(0, 3);
let SecondWord3 = word3.substring(4, 14);
let ThirdWord3 = word3.substring(15, 17);
let FourthWord3 = word3.substring(18, 20);
let FifthWord3 = word3.substring(21, 25);

console.log(`3. Breaking Sentence (Again) using Substring`)
console.log('First Word: ' + FirstWord3);
console.log('Second Word: ' + SecondWord3);
console.log('Third Word: ' + ThirdWord3);
console.log('Fourth Word: ' + FourthWord3);
console.log('Fifth Word: ' + FifthWord3);

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let FirstWord4 = word4.substring(0, 3);
let SecondWord4 = word4.substring(4, 14);
let ThirdWord4 = word4.substring(15, 17);
let FourthWord4 = word4.substring(18, 20);
let FifthWord4 = word4.substring(21, 25);

let firstWordLength = FirstWord4.length;
let secondWordLength = SecondWord4.length;
let thirdWordLength = ThirdWord4.length;
let fourthWordLength = FourthWord4.length;
let fifthWordLength = FifthWord4.length;

console.log(`4. Breaking Sentence (yet Again) and Count Each Length`)
console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + SecondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + ThirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + FourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + FifthWord4 + ', with length: ' + fifthWordLength);


