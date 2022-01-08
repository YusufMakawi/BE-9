/**
 * menyambungkan ke view dengan requiere 
 * 
 */
 const view = require("../Data/view.js");

 const index = () => {
     for (const lihat of view){
         console.log(lihat);
     }
 }
 
 const destroy = (buah) => {
     view.splice(buah, 1);
     index();
 }
 
 const store = (buah) => {
     view.push(buah);
     index();
 }
 
 const update = (buah, edit) => {
     view[buah] = edit;
     index();
 }
 
 module.exports = {
     index,destroy,store,update
 };
