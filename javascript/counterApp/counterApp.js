window.onload;

let add_btn = document.getElementById("add_btn");
let sub_btn = document.getElementById("sub_btn");
let count_num = document.getElementById("count_num");
let num = document.getElementById("counter_num");

add_btn.addEventListener("click",()=>{
    num+=1;
    count_num.innerHTML=num;
});

sub_btn.addEventListener("click",()=>{
    num -=1;
    count_num.innerHTML=num;
})

