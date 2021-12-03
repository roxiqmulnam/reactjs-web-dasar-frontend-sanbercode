
// Soal 1
console.log("Soal 1:\nLOOPING PERTAMA");
var loopingPertama = 1;
while(loopingPertama <= 20){
    if(loopingPertama % 2 === 0 ){
        console.log(loopingPertama + " - I love coding ");
    }
    loopingPertama++;    
}

console.log("LOOPING KEDUA");
var loopingKedua = 20;
while(loopingKedua > 0){
    if(loopingKedua % 2 === 0 ){
        console.log(loopingKedua + " - I will become a frontend developer ");
    }
    loopingKedua--;
}

// Soal 2
console.log("\nSoal 2:");
for (var soal2 = 1; soal2 <= 20; soal2++) {
    jawabanSoal2 = (soal2 % 2 === 1 &&  soal2 % 3 === 0) ? soal2 + " - I Love Coding" : (soal2 % 2 === 0 ? soal2 + " - Berkualitas" : soal2 + " - Santai");
    console.log(jawabanSoal2);
  }

// Soal 3
console.log("\nSoal 3:");
var jawabanSoal3 ="";
for (var i = 1; i <= 7; i++){
    for(var j = 1; j <= i ; j++){
        jawabanSoal3 += "#";
    }
    if(i != 7){
    jawabanSoal3 += "\n";
    }
}
console.log(jawabanSoal3);

// Soal 4
console.log("\nSoal 4:");

var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];

kalimat.splice(2,1), kalimat.shift();
var soal4 = kalimat.join(" ");

console.log(soal4);

// Soal 5
console.log("\nSoal 5:");

var sayuran=[]

sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
sayuran.sort();

for(var soal5 = 0; soal5 < sayuran.length; soal5++){
    console.log(soal5+1 +". " + sayuran[soal5]);
}












// console.log("Soal 2:");
// for(var i=1;i<=20; i++){
//     if(i % 2 === 1 && i % 3 === 0){
//         console.log(i+" - I Love Coding");
//     }else if(i%2===0){
//         console.log(i+" - Berkualitas");
//     }else{
//         console.log(i+" - Santai");
//     }
// }