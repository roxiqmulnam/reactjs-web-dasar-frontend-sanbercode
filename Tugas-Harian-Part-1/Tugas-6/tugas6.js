// Soal 1
console.log(`-------Soal 1-------`);

const kelilingLingkaran = (r, pi = 3.14) => { 
    return 2 * pi * r;
}
// panggil Function
console.log(parseInt(kelilingLingkaran(10)));

const luasLingkaran = (r, pi = 3.14) => {
    return pi * r * r;
}
// panggil Function
console.log(parseInt(luasLingkaran(5)));

// Soal 2
console.log(`\n-------Soal 2-------`);
const introduce = (...params) => {
    let [nama, umur, jenisKelamin, pekerjaan] = params
    if (jenisKelamin === "Laki-Laki") {
        gender = "Pak";
    } else {
        gender = "Bu";
    }
    return `${gender} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
}

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

// Soal 3
console.log(`\n-------Soal 3-------`);

const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
    
  // kode di bawah ini jangan diubah atau dihapus sama sekali
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)
  newFunction("William", "Imoh").fullName()

// Soal 4
console.log(`\n-------Soal 4-------`);

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 /* Tulis kode jawabannya di sini */

let {name : phoneName, brand : phoneBrand, year, colors} = phone
let [colorBronze, colorWhite, colorBlack] = colors

 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

// Soal 5
console.log(`\n-------Soal 5-------`);

let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */
rakBuku = {
    ...buku,
    warnaSampul : [...buku.warnaSampul, ...warna],
    ...dataBukuTambahan
}
console.log(rakBuku)