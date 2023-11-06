const myForm=document.querySelector('#my-form');
       const nameInput=document.querySelector('#name');
       const emailInput=document.querySelector('#email');
       const phoneInput=document.querySelector('#phone');
       const msg=document.querySelector('.msg');
       const userList=document.querySelector('#users');
       myForm.addEventListener('submit', onSubmit);
       function onSubmit(e){
       let myoj={
       name:nameInput.value,
       email:emailInput.value,
       phone:phoneInput.value
       };
       e.preventDefault();
       axios.post('https://crudcrud.com/api/bce787358dfd4eeaa1d1549106ebad88/appointmentdata',myoj)
       .then(res=> showonscreen(res.data))
       .catch(err=>console.log(err));
       nameInput.value="";
       emailInput.value="";
       phoneInput.value="";
       }
window.addEventListener("DOMContentLoaded",()=>{
       axios.get("https://crudcrud.com/api/bce787358dfd4eeaa1d1549106ebad88/appointmentdata")
       .then((res)=>{
           for(var i=0;i<res.data.length;i++){
               showonscreen(res.data[i]);
           }
       } )
       .catch(err=>console.log(err));
   })
function showonscreen(obj){
       let name=obj.name;
       let email=obj.email;
       let phone=obj.phone;
       let userid=obj._id;
      const childHTML=`<li id=${userid}>${name} ${email} ${phone} 
      <button onclick=deletefn('${userid}')>Delete</button>
      <button onclick=editfn('${userid}')>Edit</button></li>`;
      userList.innerHTML=userList.innerHTML+childHTML;
}
function deletefn(userid){     
       console.log(userid)
            axios.delete(`https://crudcrud.com/api/bce787358dfd4eeaa1d1549106ebad88/appointmentdata/${userid}`)
            .then((response)=>{
              removeuserfromscreen(userid)
            })
            .catch(err=>console.log(err));     
}
function removeuserfromscreen(userid){
       const childnodedelt=document.getElementById(userid);
       if(childnodedelt){
              userList.removeChild(childnodedelt);
       }
}
function editfn(userid){
       axios.get(`https://crudcrud.com/api/bce787358dfd4eeaa1d1549106ebad88/appointmentdata/${userid}`)
       .then((res)=>{
       nameInput.value=res.data.name
       emailInput.value=res.data.email
       phoneInput.value=res.data.phone
       })
       .catch(err=>console.log(err)); 
       axios.delete(`https://crudcrud.com/api/bce787358dfd4eeaa1d1549106ebad88/appointmentdata/${userid}`)
            .then((response)=>{
              removeuserfromscreen(userid)
            })
            .catch(err=>console.log(err)); 
       removeuserfromscreen(userid);
       
  
}  