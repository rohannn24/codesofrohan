const cb = document.getElementById('check-box');
const pass = document.getElementById('pass');
cb.onclick = function() {
    if(this.checked) {
        pass.type = 'text';
        console.log('hello')
    } else{
        pass.type = 'password';
    }
}