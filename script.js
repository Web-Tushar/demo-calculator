let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let gun = document.querySelector(".gun");
let vag = document.querySelector(".vag")
let result = document.querySelector(".result")


plus.addEventListener("click",function(){
     result.innerHTML = (parseInt(input1.value) + parseFloat(input2.value));
})

minus.addEventListener("click",function(){
     result.innerHTML = (parseInt(input1.value) - parseFloat(input2.value));
})

gun.addEventListener("click",function(){
     result.innerHTML = (parseInt(input1.value) * parseFloat(input2.value));
})

vag.addEventListener("click",function(){
     result.innerHTML = (parseInt(input1.value) / parseFloat(input2.value));
})