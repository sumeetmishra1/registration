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
       let myobj=JSON.stringify(myoj);
        e.preventDefault();
        localStorage.setItem(emailInput.value,myobj);
       
       //console.log(`Name=${nameInput.value} email=${emailInput.value}`);
       const li=document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value} ${phoneInput.value}`));
       userList.appendChild(li);
       nameInput.value='';
       emailInput.value='';
       phoneInput.value='';
       }
       //  const ul=document.querySelector('.items');
       //  ul.firstElementChild.textContent='Hello';
       // ul.children[0].style.color='green';
       // ul.children[1].style.color='yellow';
       // const btn=document.querySelector('.btn');
       // btn.addEventListener('mouseover',(e)=>{
       // btn.style.background='green';
        
       // })
       // btn.addEventListener('mouseout',(e)=>{
       // btn.style.background='white';
        
       // })