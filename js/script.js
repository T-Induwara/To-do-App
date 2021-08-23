console.log("Script loaded!");

var userInput = document.getElementById("work");

var btn = document.getElementById("add-btn");

var list = document.getElementById("middle-list");

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
btn.onclick = function(){
    if(userInput.value !== undefined && userInput.value !== null && userInput.value !== ""){
        var newItem = document.createElement("li");
        var textNode = document.createTextNode(userInput.value);
        newItem.appendChild(textNode);
        newItem.id = "li-" + (list.childElementCount + 1);

        list.appendChild(newItem);
        console.log(list.childElementCount);


        userInput.value="";
    }
    else{
        alert("Please enter a task to add.")
    }
    
}