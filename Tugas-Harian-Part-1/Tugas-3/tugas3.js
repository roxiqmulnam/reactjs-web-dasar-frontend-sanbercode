
// SOAL 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var Kedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
var Ketiga = kataKetiga.slice(0,6) + kataKetiga.charAt(kataKetiga.length-1).toUpperCase();
var Keempat = kataKeempat.toUpperCase();

var soal1 = kataPertama + " " + Kedua + " " + Ketiga + " " + Keempat;

console.log("Jawaban soal 1 :\n",soal1);
// ----------------------------

// SOAL 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var Panjang = Number(panjangPersegiPanjang);
var Lebar = Number(lebarPersegiPanjang);

var alasSegitiga= "6";
var tinggiSegitiga = "7";

var Alas = Number(alasSegitiga);
var Tinggi = Number(tinggiSegitiga);

var kelilingPersegiPanjang = 2 * (Panjang + Lebar);
var luasSegitiga = 0.5 * Tinggi * Alas;

console.log("Jawaban soal 2 :\n Keliling:",kelilingPersegiPanjang,"\n Luas:",luasSegitiga);
// ----------------------------

// SOAL 3
var sentences= 'wah javascript itu keren sekali'; 

var firstWord = sentences.substring(0, 3); 
var secondWord = sentences.substring(4, 14); // do your own! 
var thirdWord = sentences.substring(15, 18); // do your own! 
var fourthWord = sentences.substring(19, 24); // do your own! 
var fifthWord = sentences.substring(25, 31); // do your own! 

console.log("Jawaban soal 3 :");
console.log('Kata Pertama: ' + firstWord);
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);
// ----------------------------

// SOAL 4

// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E

var nilaiJohn = 80;
var nilaiDoe = 50;

console.log("Jawaban soal 4 :")
// nilaiJohn
if ( nilaiJohn >= 80) {
    console.log("A");
} else if (nilaiJohn >= 70 && nilaiJohn < 80){
    console.log("B");
} else if (nilaiJohn >= 60 && nilaiJohn < 70){
    console.log("C");
} else if (nilaiJohn >= 50 && nilaiJohn < 60){
    console.log("D");
} else{
    console.log("E");
}

// nilaiDoe
if ( nilaiDoe >= 80) {
    console.log("A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80){
    console.log("B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70){
    console.log("C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60){
    console.log("D");
} else{
    console.log("E");
}

// ----------------------------

// SOAL 5
console.log("Jawaban soal 5 :")
var tanggal = 14;
var bulan = 8;
var tahun = 1997;


switch(bulan) {
  case 1:   { console.log(tanggal + " Januari " + tahun); break; }
  case 2:   { console.log(tanggal + " Februari " + tahun); break; }
  case 3:   { console.log(tanggal + " Maret " + tahun); break; }
  case 4:   { console.log(tanggal + " April " + tahun); break; }
  case 5:   { console.log(tanggal + " Mei " + tahun); break; }
  case 6:   { console.log(tanggal + " Juni " + tahun); break; }
  case 7:   { console.log(tanggal + " Juli " + tahun); break; }
  case 8:   { console.log(tanggal + " Agustus " + tahun); break; }
  case 9:   { console.log(tanggal + " September " + tahun); break; }
  case 10:   { console.log(tanggal + " Oktober " + tahun); break; }
  case 11:   { console.log(tanggal + " November " + tahun); break; }
  case 12:   { console.log(tanggal + " Desember " + tahun); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}

// ----------------------------