const myForm=document.querySelector('#my-form');
       const nameInput=document.querySelector('#name');
       const emailInput=document.querySelector('#email');
       const msg=document.querySelector('.msg');
       const userList=document.querySelector('#users');

       myForm.addEventListener('submit', onSubmit);
       function onSubmit(e){
        e.preventDefault();
        localStorage.setItem(nameInput.value,emailInput.value);
       //console.log(`Name=${nameInput.value} email=${emailInput.value}`);
       //const li=document.createElement('li');
       //li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
       //userList.appendChild(li);
       //nameInput.value='';
       //emailInput.value='';
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