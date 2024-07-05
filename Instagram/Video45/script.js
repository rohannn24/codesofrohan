const load = document.querySelector('.loading')

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    load.style.display = 'none'
  }, 2000);
})