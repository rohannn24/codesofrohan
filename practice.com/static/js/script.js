const box = document.getElementById('exampleCheck1');
const pass = document.getElementById('exampleInputPassword3');
const cnfPass = document.getElementById('exampleInputPassword4');

box.onclick = function(){
    if(this.checked) {
        pass.type = 'text';
    } else{
        pass.type = 'password';
    }
}