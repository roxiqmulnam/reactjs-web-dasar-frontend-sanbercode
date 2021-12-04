// Soal 1
console.log("Soal 1:");
function luasPersegiPanjang (panjang, lebar){
    return panjang * lebar;
}

function kelilingPersegiPanjang (panjang, lebar){
    return  2 * (panjang + lebar);
}

function volumeBalok (panjang, lebar, tinggi){
    return panjang * lebar * tinggi;
}

var panjang = 12;
var lebar = 4;
var tinggi = 8;
 
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

// Soal 2
console.log("\nSoal 2:");

function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya "+ age + " tahun, " + "alamat saya di " + address +", dan saya punya hobby yaitu " + hobby + "!";
};
 
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 3
console.log("\nSoal 3:");

function gabungan(name, jk, hobby, thnLahir){
    var biodata = {
      nama: name,
      jenisKelamin: jk,
      hobi: hobby,
      tahunLahir: thnLahir
    }
    return biodata;
  }
  
  var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992];
  
  console.log(gabungan(arrayDaftarPeserta[0], arrayDaftarPeserta[1],arrayDaftarPeserta[2],arrayDaftarPeserta[3]));

// Soal 4
console.log("\nSoal 4:");

var fruits = [
    {   
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: "ada",
        harga: 10000
    },
    { 
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 5000
    }
]

var tidakMemilikiBiji = fruits.filter(function(biji){
    return biji.adaBijinya !== "ada";
})

console.log(tidakMemilikiBiji);

// Soal 5
console.log("\nSoal 5:");

function tambahDataFilm(name, duration, genreFilm, thnFilm){
    var properti = {
      nama: name,
      durasi: duration,
      genre: genreFilm,
      tahun: thnFilm
    }
    return dataFilm.push(properti);
  }

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm);