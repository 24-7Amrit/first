




var flag = 3
var a=document.querySelector("h1")

//console.log(a)
a.innerHTML= "second"

// a.style.color="pink"
// a.style.backgroundColor="blue"

a.addEventListener("click",function(){
    if(flag == 0){
    a.innerHTML="third"
    a.style.color="green"
    flag = 0}
    if(flag == 1){
    a.innerHTML="fourth"
    a.style.color="red"
    flag = 2}
    if(flag == 2){
    a.innerHTML="fifth"    
    a.style.color="blue"
    flag = 3}

})


