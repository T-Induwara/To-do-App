console.log("Script loaded!");

var userInput = document.getElementById("work");
var inputText = userInput.innerHTML;

var btn = document.getElementById("add-btn");

btn.onmouseover = function(){
    btn.classList.add("btn-hover");
}
btn.onmouseleave = function(){
    btn.classList.remove("btn-hover");
}
btn.onmousedown = function(){
    btn.classList.add("btn-click");
    console.log(userInput.value);
}
btn.onmouseup = function(){
    btn.classList.remove("btn-click");
}