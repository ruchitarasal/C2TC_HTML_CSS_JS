
document;



document.firstElementChild; 
document.firstElementChild.firstElementChild; 
document.firstElementChild.lastElementChild; 
document.firstElementChild.lastElementChild.firstElementChild;  

/*

heading.innerHTML="Good Bye";
heading.style.color="red";

*/
/*
document.firstElementChild.lastElementChild.children[3].lastElementChild;
var list3 = document.firstElementChild.lastElementChild.children[3].lastElementChild;
list3.style.color="blue";
list3.innerHTML="Fourth";
*/
document.getElementsByTagName("ul"); 
document.getElementsByTagName("li");



document.getElementsByTagName("li")[1].style.color="red";


document.getElementsByTagName("li").length;



document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="red";



document.getElementById("title");
document.getElementById("title").innerHTML = "Good Bye"


document.querySelector("h1");  
document.querySelector("#title"); 
document.querySelector(".btn"); 

document.querySelector("li a"); 


document.querySelector("body a");




document.querySelector(".btn #title"); 


document.querySelectorAll("#list .item");

document.querySelectorAll("#list .item")[2].style.color="red";


document.querySelectorAll("#list .item")[1].style.color="red";


document.querySelector("li a").style.color="red";

document.querySelector("li").style.color="blue";


document.querySelector("button").style.backgroundColor="yellow";


document.querySelector("h1").innerHTML = "<em>Good Morning</em>";













