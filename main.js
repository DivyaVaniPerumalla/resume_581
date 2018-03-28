// Ajax call(XMLHttpRequest)initializatin
function loadjson(file,callback){
   var xhr= new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    // true when it is asynchronus
   xhr.onreadystatechange=function() {
     if(xhr.readyState ===4 && xhr.status =="200"){
       callback(xhr.responseText);
     }
   }
xhr.send();
}
// function calling
loadjson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
basics(data.left);
 // let data1=JSON.parse(text);
 // console.log(data1);
 // basics1(data1.right);
})

// for main div class calling
// var main=document.queryselector('.main');

// for main div id calling
var main=document.getElementById('main');
// element creation
var left=document.createElement("div");
// add class name to element
left.classList.add("left");
// add id to Element
left.setAttribute("id","left");
// adding text to divyaperumalla
left.textContent="Profile Details:"
left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);
// var right=document.createElement("div");
// right.classList.add("right");
// right.setAttribute("id","right");




function basics(leftside){
  // basics-constructor contains left object details of json file
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=leftside.email;
left.appendChild(email);
var ph=document.createElement("p");
ph.textContent=leftside.phone;
left.appendChild(ph);
var address=document.createElement("h3");
address.textContent=leftside.address;
left.appendChild(address);
console.log(left);
}
