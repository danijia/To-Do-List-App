const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
    if (inputBox.value === '') {
        alert("You have to write something"); // gives an alert if no text is entered
    } else {
        let li = document.createElement("li"); // creating one html element with the tag name li and storing this element in the li variable
        li.innerHTML = inputBox.value; // li.innerHTML = the text inside the li // inputBox.value whatever text we add in the input field will be added
        listContainer.appendChild(li); // the li will be displayed under this list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
};

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function keyPress() {
    if (inputBox.value === '') {
        alert("You have to write something"); // gives an alert if no text is entered
    } else {
        let li = document.createElement("li"); // creating one html element with the tag name li and storing this element in the li variable
        li.innerHTML = inputBox.value; // li.innerHTML = the text inside the li // inputBox.value whatever text we add in the input field will be added
        listContainer.appendChild(li); // the li will be displayed under this list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
};

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        keyPress();
    }
    // console.log("You hit enter!!!")
});