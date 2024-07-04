const btn = document.querySelector('.btn');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');

btn.addEventListener('click', () => {
     popup.style.display = 'block';   
})
close.addEventListener('click', () => {
     popup.style.display = 'none';   
})