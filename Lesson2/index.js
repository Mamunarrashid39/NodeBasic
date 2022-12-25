// const fs = require ('fs');

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

    // fs.exists ('demo2.txt',
    // (result) => {
    //     if (result){
    //         console.log ("found");
    //     } else {
    //         console.log ("Not Found");
    //     }

     //    });


// os , Path 
// const os = require ("os");
//  console.log (os.userInfo());
// console.log (os.homedir());
// console.log (os.hostname());
// console.log (os.totalmem());
// console.log (os.freemem());
// console.log (os.hostname());

//  const {totalmem ,freemem} = require ("os");
//  console.log(totalmem());


// console.log(__dirname);
// console.log(__filename);



const path = require('path');
 const filename = path.extname('index.html');
console.log(filename);

const joinName = path.join(__dirname + "/views");
console.log(joinName);



