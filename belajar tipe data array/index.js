/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
    for (let i = 0; i < input.length; i++) {
        console.log("Nomor ID: " + input[i][0]);
        console.log("Nama Lengkap: " + input[i][1]);
        console.log("TTL: " + input[i][2] + "" + input[i][3]);
        console.log("Hobi: " + input[i][4]);
        console.log();
    }
}

dataHandling();
/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input2) {
    let namaArray = input2[1].split(' ');
    namaArray.splice(-1, 1, "Elsharawy");
    let modifikasiNamaLengkap = namaArray.join(' ');
    let modifikasiNamaTempatLahir = "Provinsi " + input2[2];
    let tanggalArray = input2[3].split('/');
    let tanggalFormat = tanggalArray.join('-');
    let batasNama = namaArray[0].slice(0, 15)
    console.log([input2[0], modifikasiNamaLengkap, modifikasiNamaTempatLahir, input2[3], "Pria", "SMA Internasional Metro"]);
    console.log(bulan[tanggalArray[1] - 1]);
    console.log([tanggalArray[2], tanggalArray[0], tanggalArray[1]]);
    console.log(tanggalFormat);
    console.log(batasNama);
}
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];


dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */