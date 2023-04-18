// Write code related to Home Page
console.log("dj")
document.querySelector("form").addEventListener("submit",myfun)
let data=JSON.parse(localStorage.getItem("Helpers")) || [];
function myfun(){
    event.preventDefault()
   let a=document.getElementById("name").value;
   let b=document.getElementById("phone").value;
   let c=document.getElementById("email").value;
   let d=document.getElementById("category").value;
   let e=document.getElementById("type").value;
  let da={
    name:a,
    phone:b,
    email:c,
    category:d,
    type:e
  }
  data.push(da)
  localStorage.setItem("Helpers",JSON.stringify(data))
}