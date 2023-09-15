const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const logbutton=document.querySelector('.login-but');
const closebutton=document.querySelector('.closeicon');

registerlink.addEventListener('click',()=>wrapper.classList.add('active'));
loginlink.addEventListener('click',()=>wrapper.classList.remove('active'));

logbutton.addEventListener('click',()=>wrapper.classList.add('active-popup'));
closebutton.addEventListener('click',()=>wrapper.classList.remove('active-popup'));