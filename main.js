let parent_ul= document.getElementById('users');
let myForm= document.getElementById('my-form');
myForm.addEventListener('submit',addTodo);


function addTodo(e) {
    const obj={
        name: e.target.name.value,
        email: e.target.email.value
    }
    e.preventDefault();
   
    axios.post('https://crudcrud.com/api/e858b168d2d24e40beab622f2158e58f/appointmentData',obj)
    .then((res)=>{console.log(res)})
    .catch(err => console.error(err));
}
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }