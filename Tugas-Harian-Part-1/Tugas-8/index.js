// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
const execute = (time, index) => {
readBooks( time, books[index], (sisaWaktu) => {
    console.log(sisaWaktu)
    if(sisaWaktu !== 0){
    execute(sisaWaktu, index+1)
        }
    })
}

execute(10000, 0)