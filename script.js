const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

const toggle = document.getElementById("toggle");
const body = document.getElementById('test');

const starCollection = document.getElementById("starCollection")

toggle.addEventListener('change', function() {
if (toggle.checked) {
body.classList.add('checked1');
} else {
body.classList.remove('checked1');
}
});

function addTask(){
    if (inputBox.value ===''){
        alert("You need to write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const pseudoElement = window.getComputedStyle(document.querySelector("ul li.checked"), "::before");
        const backgroundImage = pseudoElement.getPropertyValue("background-image");
        if(backgroundImage.includes("checked.png")){
        let yellow_star = document.createElement("p");
        yellow_star.innerHTML = "&#11088";
        starCollection.appendChild(yellow_star);
        }
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    localStorage.setItem("stars",starCollection.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
