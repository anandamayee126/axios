let parent_ul= document.getElementById('users');
let myForm= document.getElementById('my-form');
window.addEventListener('DOMContentLoaded',addTodo);


function addTodo(e) {
    
    e.preventDefault();
    var li;
    //const arr=[];
    axios.get('https://crudcrud.com/api/e858b168d2d24e40beab622f2158e58f/appointmentData')
    .then((res)=>
    {
        console.log(res);
        for(var i=0;i<res.data.length;i++)
        {
          li=displayUsers(res.data[i]);
          parent_ul.append(li);
        }
    })
    .catch(err => console.error(err));
    //const li=displayUsers();
   
    e.target.name.value="";
    e.target.email.value="";
}
function displayUsers(data)
{
    const li= document.createElement('li');
    //li.textContent=index+" ";
    const span1= document.createElement('span');
    const span2= document.createElement('span');

    span1.textContent=data.name+" -> ";
    span2.textContent=data.email+"  ";

    const edit= document.createElement('button');
    const delete_btn= document.createElement('button');
    edit.className='edit';
    edit.textContent='edit';
    delete_btn.className='delete';
    delete_btn.textContent='delete';

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(edit);
    li.appendChild(delete_btn);

    return li;
}
