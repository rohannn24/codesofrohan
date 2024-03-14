const addAlert = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Input Field </strong> is empty!!!!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
const successAlert = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Success</strong> Todo is added Successfully!!!!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;
const deleteAlert = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Deleted</strong> Todo is delete Successfully!!!!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;


const addTodo = () => {
    const inputVal = document.getElementById('inpt').value;
    const time = new Date().toLocaleTimeString();
    if(inputVal === ""){
        document.getElementById('c-alert').innerHTML = addAlert;
    }else{
        const newCard = `<div class="card">
        <div class="card-header">
          Todo
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${inputVal}</p>
            <footer class="blockquote-footer">${time}</footer>
          </blockquote>
          <div class="btn btn-danger" onclick = 'delTodo(this)'>Delete</div>
        </div>
      </div>`;
      document.querySelector('.card-holder').insertAdjacentHTML('afterbegin', newCard);
      document.getElementById('inpt').value = '';
      document.querySelector('.input-card').style.display = 'none';
      document.getElementById('c-alert').innerHTML = successAlert;
    }
    setTimeout(() => {
        document.getElementById('c-alert').innerHTML = "";
    }, 3000);
}

const delTodo= (elem) => {
    const card = elem.closest('.card');
    card.remove();
    document.getElementById('c-alert').innerHTML = deleteAlert;
    setTimeout(() => {
        document.getElementById('c-alert').innerHTML = "";
    }, 3000);
}