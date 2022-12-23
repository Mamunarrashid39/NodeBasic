const fs = require ('fs');

// fs.appendFile ('demo1.txt'," i am 24 years old", (err) => {
//     if (err){
//         console.log (err);
//     } else {
//         console.log ("successful");
//     }

//rename File 

// fs.rename ('demo1.txt', 'demo2.txt', ( err ) => {
//     if (err){
//         console.log (err);
//     } else {
//         console.log ("successful");
//     }


    // delete

    // fs.unlink ('demo2.txt', ( err ) => {
    //     if (err){
    //         console.log (err);
    //     } else {
    //         console.log ("successful");
    //     }

    // file exit 

    fs.exists ('demo2.txt',
    (result) => {
        if (result){
            console.log ("found");
        } else {
            console.log ("Not Found");
        }
});