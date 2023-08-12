const inputs = document.getElementById("input");
const list = document.getElementById("lists");
const com = document.getElementById("comp");
function addToDo(){
    if(inputs.value === ""){
        alert("Please add task " + "(እባኩዎትን የእርስዎ የተግባር ዝርዝር ያስገቡ)")
    }
    else{
           let li = document.createElement("li"); //creating li element
           li.innerHTML = inputs.value; //adding the value of the input field to the list element
           list.appendChild(li); 
           inputs.value = "";
        const img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/128/9221/9221692.png";
        li.appendChild(img);
        saveData();
    }
    
}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
 
function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();