function addNewAch() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("achFeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"enter your achievents")
    let achOb = document.getElementById("ach"); 
    let achButtonOb = document.getElementById("achButton");
    achOb.insertBefore(newNode, achButtonOb);

}

function addNewWe() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weFeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"enter your Experience")
    let weOb= document.getElementById("we");
    let weButtonOb=document.getElementById("weButton");
    weOb.insertBefore(newNode, weButtonOb);
}

function addNewAc() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add ("acFeild");
    newNode.classList.add ("mt-2");
    newNode.setAttribute('placeholder',"Course - Percentage %")
    let acOb=document.getElementById('ac');
    let acButtonOb=document.getElementById("acButton");
    acOb.insertBefore(newNode, acButtonOb)
}

// generating 
function generateCV(){
  let nameField=document.getElementById("nameFeild").value;
  let nameT1=document.getElementById("NameT1");
  let nameT2=document.getElementById("NameT2");
  nameT1.innerHTML=nameField;
  nameT2.innerHTML=nameField;
  document.getElementById("contactT").innerHTML=document.getElementById("contact").value;
  document.getElementById("emailT").innerHTML=document.getElementById("email").value;
  document.getElementById("adressT").innerHTML=document.getElementById("adress").value;
  document.getElementById("linkedinT").innerHTML=document.getElementById("linkedin").value;
  document.getElementById("socialT").innerHTML=document.getElementById("social").value;
  document.getElementById("aboutT").innerHTML=document.getElementById("about").value;

//   achievemnt
let ach=document.getElementsByClassName("achFeild")
let str='';
for(let e of ach){
    str=str+ `<li> ${e.value} </li>`;
}

document.getElementById("achT").innerHTML= str;

// work experience

let wef=document.getElementsByClassName("weField")
let sts='';
for(let e of wef){
    sts=sts+ `<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML= sts;

// academic
let acd=document.getElementsByClassName("acFeild")
let stt='';
for(let e of wef){
    stt=stt+ `<li> ${e.value} </li>`;
}

document.getElementById("acT").innerHTML= stt;

//image
let file=document.getElementById('image').files[0];
let read=new FileReader();
read.readAsDataURL(file);
read.onloadend = function(){
    document.getElementById("imageT").src= read.result;
}

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display="block";

}
// print cv
function printCV(){
    window.print();
}


