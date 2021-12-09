var filterBooksPromise = require('./promise2.js')

const firstExecute = async (colorful, amountOfPage) => {
    let result = await filterBooksPromise(colorful, amountOfPage);
        console.log(result);
    let result2 = await filterBooksPromise(colorful, amountOfPage);
        if(colorful !== false, amountOfPage > 40);
        console.log(result2)
    try{
        var result3 = await filterBooksPromise()
        console.log(result3)
    } catch(err){
        console.log(err.message)
    }
}

firstExecute(true, 40)

// const execute = (time, index) => {
//     readBooksPromise(time, books[index])
//         .then((sisaWaktu) => {
//             if(sisaWaktu !== 1000){
//                 execute(sisaWaktu, index+1)
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// execute(10000, 0)