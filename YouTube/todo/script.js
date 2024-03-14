const delAlert = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Todo</strong> has been deleted...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
`;
const addAlert = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>New Todo</strong> added...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
`;
const warningAlert = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Input Field</strong> is empty...
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
`;

const addNew = () => {
    const inputBox = document.querySelector('.input-box');
    inputBox.style.display = 'flex';
}
const newAdded = () => {
    const input = document.getElementById('inpt').value;
    const box = document.querySelector('.card-holder');
    let time = new Date().toLocaleDateString();
    const card = `
<div class="c-card">
            <h3>${input}</h3>
            <p>${time}</p>
            <div class="btn-cover">
                <div class="btn btn-danger" onclick = 'deleting(this)'>Delete</div>
            </div>
        </div>  
`;
    if(input === ''){
        document.getElementById('showAlert').style.display = 'block';
        document.getElementById('showAlert').innerHTML = warningAlert;
        setTimeout(() => {
            document.getElementById('showAlert').style.display = 'none';
        }, 3000);
    }else{
        document.getElementById('showAlert').style.display = 'block';
        box.insertAdjacentHTML('afterbegin', card);
        document.querySelector('#inpt').value = '';
        document.querySelector('.input-box').style.display = 'none';
        document.getElementById('showAlert').innerHTML = addAlert;
        setTimeout(() => {
            document.getElementById('showAlert').style.display = 'none';
        }, 3000);
    }
}

const deleting = (element) => {
    const card = element.closest('.c-card');
    card.remove();
    document.getElementById('showAlert').style.display = 'block';
    document.getElementById('showAlert').innerHTML = delAlert;
    setTimeout(() => {
        document.getElementById('showAlert').style.display = 'none';
    }, 3000);
}


