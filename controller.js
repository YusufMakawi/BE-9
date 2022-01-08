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
 
 const destroy = (hewan) => {
     view.splice(hewan, 1);
     index();
 }
 
 const store = (hewan) => {
     view.push(hewan);
     index();
 }
 
 const update = (hewan, edit) => {
     view[hewan] = edit;
     index();
 }
 
 module.exports = {
     index,destroy,store,update
 };
