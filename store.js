const left = document.querySelector(".left");
const right = document.querySelector(".right"); 

left.addEventListener('mouseenter',function(){
    left.style.width = "60%";
    right.style.width = "40%";
})
left.addEventListener('mouseleave',function(){
    left.style.width = "50%";
    right.style.width = "50%";
})
right.addEventListener('mouseleave',function(){
    left.style.width = "50%";
    right.style.width = "50%";
})
right.addEventListener('mouseenter',function(){
    right.style.width = "60%";
    left.style.width = "40%";
})