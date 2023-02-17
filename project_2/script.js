var a=1;
function changevalue(){
    
    var element=document.getElementById("heading");
    a++;
    element.innerHTML=a;
    
}
function changevalue1(){
    
    var element=document.getElementById("heading");
    a--;
    element.innerHTML=a;
    
}
function changevalue2(){
    
    var element=document.getElementById("heading");
    a=1;
    element.innerHTML=a;
    
}

var button=document.getElementById("increment");
button.addEventListener('click',changevalue);
var button=document.getElementById("decrement");
button.addEventListener('click',changevalue1);
var button=document.getElementById("reset");
button.addEventListener('click',changevalue2);