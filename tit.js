let title=document.querySelector(".type");
let fame="i am hero";
let index=1;
let typewriter=()=>{
    let new_title=fame.slice(0,index);
    title.innerText=new_title;
    index++;
    setTimeout(()=>{
       typewriter();
    },600)
}
typewriter();