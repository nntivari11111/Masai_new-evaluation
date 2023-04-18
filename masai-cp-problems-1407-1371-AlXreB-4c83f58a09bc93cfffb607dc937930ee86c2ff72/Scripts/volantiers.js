// Write code related to Volatiers Page
let data=JSON.parse(localStorage.getItem("Helpers")) || [];
append(data)
document.querySelector("#filter").addEventListener("change",append)
function append(){
   let change=document.getElementById("filter").value;
   
   if(change==""){
    document.querySelector("tbody").innerHTML=null;
data.map(function (elem,index) {
   
    if(elem.type==="Volantier"){
      
    let tr=document.createElement("tr");
    tr.innerHTML=null;

    let td1=document.createElement("td");
    td1.innerText=elem.name;
    let td2=document.createElement("td");
    td2.innerText=elem.phone;
    let td3=document.createElement("td");
    td3.innerText=elem.email
    let td4=document.createElement("td");
    td4.innerText=elem.category  
    let td5=document.createElement("button")
    td5.innerText="Delete"
    td5.addEventListener("click",function(){
        Delete(elem,index)
    })
    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr);
}
    })
   }
   else if(change!==""){
   
    document.querySelector("tbody").innerHTML=null;
    data.map(function (elem,index) {     
        if(elem.category==change && elem.type==="Volantier"){
        let tr=document.createElement("tr");
        tr.innerHTML=null;
    
        let td1=document.createElement("td");
        td1.innerText=elem.name;
        let td2=document.createElement("td");
        td2.innerText=elem.phone;
        let td3=document.createElement("td");
        td3.innerText=elem.email
        let td4=document.createElement("td");
        td4.innerText=elem.category  
        let td5=document.createElement("button")
        td5.innerText="Delete"
        td5.addEventListener("click",function(){
            Delete(elem,index)
        })
        tr.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(tr);
    }
        })
   }
}

    function Delete(elem,index){
        data.splice(index,1)
        localStorage.setItem("Helpers",JSON.stringify(data))
        append(data)
    }