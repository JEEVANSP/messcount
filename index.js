
const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const logbutton=document.querySelector('.login-but');
// const closebutton=document.querySelector('.closeicon');
// const closebutton2=document.querySelector('.closeicon2');
const contentParagraph = document.getElementById('text');


// registerlink.addEventListener('click',()=>wrapper.classList.add('active'));
loginlink.addEventListener('click',()=>wrapper.classList.remove('active'));

//logbutton.addEventListener('click',()=>wrapper.classList.add('active-popup'));
// closebutton.addEventListener('click',()=>wrapper.classList.remove('active-popup'));
// closebutton2.addEventListener('click',()=>wrapper.classList.remove('active-popup'));
const closebutton=document.querySelector('.closeicon');
const closebutton2=document.querySelector('.closeicon2');

// ...

closebutton.addEventListener('click', () => {
  console.log('Clicked closeicon');
  wrapper.classList.remove('active-popup');
  contentParagraph.style.display = 'block';
});

closebutton2.addEventListener('click', () => {
  console.log('Clicked closeicon2');
  wrapper.classList.remove('active-popup');
  contentParagraph.style.display = 'block';
});






logbutton.addEventListener('click', () => {
  // Remove the paragraph
  contentParagraph.remove();

  // Activate the popup
  wrapper.classList.add('active-popup');

  // Center the popup
  wrapper.style.left = '50%';
  wrapper.style.top = '50%';
  wrapper.style.transform = 'translate(-50%, -50%)';
});

registerlink.addEventListener('click', () => {
  // Activate the popup
  wrapper.classList.add('active');

  // Center the popup
  wrapper.style.left = '50%';
  wrapper.style.top = '50%';
  wrapper.style.transform = 'translate(-50%, -50%)';
});

const toggleBtn = document.querySelector('.togglephone');
const toggleBtnIcon = document.querySelector('.togglephone i');
const dropdown = document.querySelector('.dropdown');
const  dropdowncont=document.querySelector('.dropdown a');

toggleBtn.onclick=function () {
    dropdown.classList.toggle('open');
    const isOpen=dropdown.classList.contains('open'); 

     toggleBtnIcon.classList = isOpen
        ?'fa-solid fa-circle-xmark'
        :'fa-solid fa-bars'

};
