var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise

const execute = (time, index) => {
    readBooksPromise(time, books[index])
        .then((sisaWaktu) => {
            if(sisaWaktu !== 1000){
                execute(sisaWaktu, index+1)
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

execute(10000, 0)