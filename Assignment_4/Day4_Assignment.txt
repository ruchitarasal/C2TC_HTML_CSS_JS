document.querySelector(".items");
/*document.querySelector(".item1");
let item_1 = document.querySelector(".item1");
item_1.remove();
document.querySelector(".item2");
let item_2 = document.querySelector(".item2");
item_2.remove();
document.querySelector(".item3");
let item_3 = document.querySelector(".item3");
item_3.remove();
document.querySelector(".item4");
let item_4 = document.querySelector(".item4");
item_4.remove();
document.querySelector(".item5");
let item_5 = document.querySelector(".item5");
item_5.remove();

*/

let item = document.querySelector(".item1");
item.textContent="Good Morning";


let item_2 = document.querySelector(".item2");
item_2.innerHTML="<h1>Hello</h1>";

let button_1 = document.querySelector(".btn1");
button_1.style.background = "red";

let button_2 = document.querySelector(".btn2");
button_2.style.background="blue";

//events 
/*let button_3 = document.querySelector(".btn1");
button_3.addEventListener("click",(e) =>
                        {
    console.log("click");
e.preventDefault();
});
let button_4 = document.querySelector(".btn2");
button_4.addEventListener("click",(e) =>
                        {
    console.log("click");
e.preventDefault();
});


*/


let nameInput = document.querySelector("#name");
nameInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(nameInput.value);
});

let emailInput = document.querySelector("#email");
emailInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(emailInput.value);
});

let usnInput = document.querySelector("#usn");
usnInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(usnInput.value);
});

let homeaddressInput = document.querySelector("#home-address");
homeaddressInput.addEventListener("input",e =>
                           {
    document.querySelector(".container").append(homeaddressInput.value);
});


const myForm = document.querySelector('#my-form');
const name1Input = document.querySelector('#name');
const email1Input = document.querySelector('#email');
const usn1Input = document.querySelector('#usn');
const homeaddress1Input = document.querySelector('#home-address');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
function onSubmit(e) {
  e.preventDefault();
}
//console.log(name1Input);
console.log(name1Input.value);
console.log(email1Input.value);
console.log(usn1Input.value);
console.log(homeaddressInput.value);

/*
let myForm1 = document.querySelector("#my-form");
myForm1.addEventListener('submit', onSubmit);

// addEventListener to form on console via ALERT
if(nameInput.value === '' || emailInput.value === ''|| usnInput.value ==='' || homeaddressInput.value ==='')
{
  alert('Please enter all fields');
}
else
{
  console.log('success');
}
*/

// addEventListener to form on console via Message on <div> selection
let msg1 = document.querySelector(".msg");


/*if(nameInput.value === '' || emailInput.value === ''|| usnInput.value ==='' || homeaddressInput.value ==='')
  {
    msg1.classList.add('error');
    msg1.innerHTML = 'Please enter all fields';
  }
  else
  {
    console.log('success');
  }

*/
  // Same as above - but remove alert msg after 3seconds
/*if(nameInput.value === '' || emailInput.value === ''|| usnInput.value ==='' || homeaddressInput.value ==='')
  {
    msg1.classList.add('error');
    msg1.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    console.log('success');
  }

*/


  // As & when users get registered add into LIST
let userList1 = document.querySelector("#users");


  if(nameInput.value === '' || emailInput.value === ''|| usnInput.value ==='' || homeaddressInput.value ==='')
  {
    msg1.classList.add('error');
    msg1.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  }
  else
  {
    // Create new list item with user
    let li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${usnInput.value}: ${homeaddressInput.value}`));

    // Append to ul
    userList1.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
usnInput.value = '';
homeaddressInput.value = '';

  }
