let parent_ul= document.getElementById('users');
let myForm= document.getElementById('my-form');
myForm.addEventListener('submit', addTodo);
window.addEventListener('DOMContentLoaded',getTodo);
parent_ul.addEventListener('click',buttons);

function getTodo(e) {
    
    //e.preventDefault();
    var li;
    //const arr=[];
    axios.get('https://crudcrud.com/api/9c6d6b5b6fea4131b67994a4494fd019/appointmentData')
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
   
    // e.target.name.value="";
    // e.target.email.value="";
}

function addTodo(e){
    e.preventDefault();
        const obj={
            name: e.target.name.value,
            email: e.target.email.value
        }
    
        if(document.querySelector('input[type="submit"]').id)
        {
            let id= document.querySelector('input[type="submit"]').id;
            axios.put('https://crudcrud.com/api/9c6d6b5b6fea4131b67994a4494fd019/appointmentData/'+id,obj)
            .then((res)=>{
                obj._id=id;
                const li=displayUsers(obj);
                parent_ul.append(li);
                document.querySelector('input[type="submit"]').id="";
            })
            .catch((err)=>{console.log(err)});

        }
        else{
            axios.post('https://crudcrud.com/api/9c6d6b5b6fea4131b67994a4494fd019/appointmentData',obj)
           .then((res)=>{console.log(res)
            const li=displayUsers(res.data);
            parent_ul.append(li);
        })
        .catch((err)=>{console.log(err)});
        
        
        //var li;
        // const li= document.createElement('li');
        // li.textContent= obj.name+" -> "+obj.email
        //   parent_ul.append(li);
        }
        e.target.name.value="";
    e.target.email.value="";


}
function displayUsers(data)
{
    const li= document.createElement('li');
    //li.textContent=index+" ";
    const span1= document.createElement('span');
    const span2= document.createElement('span');

    console.log(data);
    span1.textContent=data.name;
    span2.textContent=data.email;

    const edit= document.createElement('button');
    const delete_btn= document.createElement('button');
    edit.className='edit';
    edit.textContent='edit';
    edit.id= data._id;
    delete_btn.className='delete';
    delete_btn.textContent='delete';
    delete_btn.id= data._id;

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(edit);
    li.appendChild(delete_btn);

    return li;
}

async function buttons(e){
    // e.preventDefault();
    try{
        if(e.target.classList.contains('delete'))
    {
        let id= e.target.id
        let res= await axios.delete('https://crudcrud.com/api/9c6d6b5b6fea4131b67994a4494fd019/appointmentData/'+id);
        console.log(res);
        if(res.status==200)
        {
            parent_ul.removeChild(e.target.parentNode);
        }
    }
    else if(e.target.classList.contains('edit'))
    {
        let id= e.target.id;
        document.getElementById('name').value=e.target.parentElement.getElementsByTagName('span')[0].textContent
        document.getElementById('email').value=e.target.parentElement.getElementsByTagName('span')[1].textContent
        document.querySelector('input[type="submit"]').id=id
        parent_ul.removeChild(e.target.parentNode);




    }

    }
    catch(e) {
        console.error(e);
    }
    

 
}
