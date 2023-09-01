let parent_h21= document.getElementById('electronic');
let parent_h22= document.getElementById('skin_care');
let parent_h23= document.getElementById('food_item');
let myForm= document.getElementById('my-form');

myForm.addEventListener('submit', addProduct);
window.addEventListener('DOMContentLoaded',getProduct);
parent_h21.addEventListener('click',delete_btn1);
parent_h22.addEventListener('click',delete_btn2);
parent_h23.addEventListener('click',delete_btn3);

function addProduct(e) {
    e.preventDefault();
    const obj={
        selling_price:e.target.amount.value,
        product_name: e.target.product_name.value,
        category: e.target.category.value
    }
    axios.post('https://crudcrud.com/api/9418c81b5a4e4ddb8c78b517a1ea850a/sellersProduct',obj)
    .then((res)=>{
        console.log(res)
        //getProduct();
        window.location.reload();
        obj.selling_price="";
        obj.product_name="";
        obj.category="";
        
    })
    .catch((err)=>{console.log(err)})
    // .catch((err)=>{console.log(err)})
}

function getProduct(e) {
    
    //e.preventDefault();
    var li;
    //const arr=[];
    axios.get('https://crudcrud.com/api/9418c81b5a4e4ddb8c78b517a1ea850a/sellersProduct')
    .then((res)=>
    {
        console.log(res);
        for(var i=0;i<res.data.length;i++)
        {
          li=displayUsers(res.data[i]);

          if(res.data[i].category==='skin_care')
            parent_h22.appendChild(li);
          else if(res.data[i].category==='electronic')
            parent_h21.appendChild(li);
         else if(res.data[i].category==='food_items')
            parent_h23.appendChild(li);
          console.log(li);
        }
    })
    .catch(err => console.error(err));
}
function displayUsers(data)
{
    const li_child= document.createElement('li');
    //li.textContent=index+" ";

    //li_child.innerHTML=``
    //const span1= document.createElement('span');
    const span1= document.createElement('span');
    const span2= document.createElement('span');

    console.log(data);
    // span1.textContent=data.category;
    span1.textContent=data.product_name+"  ";
    span2.textContent=data.selling_price+"  ";

    const delete_btn= document.createElement('button');
    delete_btn.className='delete';
    delete_btn.textContent='delete_product';
    delete_btn.id= data._id;

    li_child.appendChild(span1);
    li_child.appendChild(span2);
    // li_child.appendChild(span3);
    li_child.appendChild(delete_btn);

    return li_child;
}
async function delete_btn1(e){
        // e.preventDefault();
        try{
            if(e.target.classList.contains('delete'))
            {
                let id= e.target.id
                let res= await axios.delete('https://crudcrud.com/api/9418c81b5a4e4ddb8c78b517a1ea850a/sellersProduct/'+id);
                console.log(res);
                if(res.status==200)
                {
                    parent_h21.removeChild(e.target.parentNode);
                }
            }
        }
        catch{
            console.error('Error');
        }
}

async function delete_btn2(e){
    // e.preventDefault();
    try{
        if(e.target.classList.contains('delete'))
        {
            let id= e.target.id
            let res= await axios.delete('https://crudcrud.com/api/9418c81b5a4e4ddb8c78b517a1ea850a/sellersProduct/'+id);
            console.log(res);
            if(res.status==200)
            {
                parent_h22.removeChild(e.target.parentNode);
            }
        }
    }
    catch{
        console.error('Error');
    }
}

async function delete_btn3(e){
    // e.preventDefault();
    try{
        if(e.target.classList.contains('delete'))
        {
            let id= e.target.id
            let res= await axios.delete('https://crudcrud.com/api/9418c81b5a4e4ddb8c78b517a1ea850a/sellersProduct/'+id);
            console.log(res);
            if(res.status==200)
            {
                parent_h23.removeChild(e.target.parentNode);
            }
        }
    }
    catch{
        console.error('Error');
    }
}