let btn=document.querySelector("#fun");
btn.addEventListener("click",function(){
    let universe=document.querySelector(".us");
    let para=document.querySelector(".new");
    para.innerText="Creating a better world requires teamwork, partnerships and collaboration as we need an entire army of companies to work together to build a better world within the next few decades.";
   universe.appendChild(para);
    
    
})
btn.addEventListener("dblclick",function(){
    let para=document.querySelector(".new");
    para.innerText="";
});
let alrt=document.querySelector(".alert");
let cont=document.querySelector(".contactus");
alrt.addEventListener("click",function(){
   let kwak=alert("successfully submitted");
   cont.append(kwak);
});