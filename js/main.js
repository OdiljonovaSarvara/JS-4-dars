/* DOM in JS */

//

/* Event in JS; onclick */

// function meniBirMartaBos(){
//     alert("Siz battonni bir marta bostingiz");
}

// function meniIkkiMartaBos(){
//     alert("Siz battonni ikki marta bostingiz");
// }

// function tanlash(event){
//     alert("Siz " + event.target.value + "ni tanladindiz!");
// }

//

// function inputdanChiqish(){
//     console.log("Inputdan chiqish!");
// }

// function yozish(event){
//     console.log(event.target.value);
// }

// document.querySelector(".matnTegi").addEventListener('copy', function (event){
//     console.log("Diqqat! Diqqat! " + event.target.value + " nomli maxfiy xujjatlar ko'chirilmoqda!");
// })


function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}

function kirish(){
    console.log("Hududga kirildi!");
}

function chiqish(){
    console.log("Hududdan chiqildi!");
}