/**
 * data akan di tampilkan menggunakan node index.js 
 * 
 */
 const { index, destroy, store, update } = require("../Node.Js/Controller/controller");


 /**
  * penggunaan arrow function
  */
 const main = () => {
     console.log("== Tampilkan Index =="); index();
     console.log("== Tampilkan Destroy =="); destroy(1);
     console.log("== Tampilkan Store =="); store("Data Nambah");
     console.log("== Tampilkan Update =="); update(1,"Data Update");
 
     
 };
 
 main();
