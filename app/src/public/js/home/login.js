"use strict";

const id = document.querySelector('#id'),
    password = document.querySelector('#password'),
    logiBtn = document.querySelector('button');

logiBtn.addEventListener("click",login);


function login(){
   const req = {
        id: id.value,
        password:password.value,
   };
   console.log(req);
}
