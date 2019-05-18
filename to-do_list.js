var ul = document.querySelector("ul");
var input = document.getElementById("userinput");
var enterButton = document.getElementById("enter");
var clearButton = document.getElementById("clear");

function clear() {
    ul.innerHTML = "";
};

function createNewList() {
    var li = document.createElement("li");
    var t = document.createTextNode(input.value);
    var newDiv = document.createElement("div");
    var iconDiv = document.createElement("div");
    li.appendChild(t);
    newDiv.className = "div-n";
    newDiv.appendChild(li)
    newDiv.appendChild(iconDiv);
    ul.appendChild(newDiv);
    input.value = "";
    iconDiv.classList.add("icon-div");
    var icon = document.createElement("i");
    icon.classList.add("far", "fa-trash-alt");
    icon.style.cursor = "pointer";
    iconDiv.appendChild(icon);
    deleteOnClick();
};

function enterItems() {
    if (input.value.length > 0) {
        createNewList();
    };
};

function addItemAfterKeypress(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        createNewList();
    };
};

/*
function done(e) {
    var divN = document.getElementsByClassName("div-n");
    for (var g = 0; g < divN.length; g++) {
        divN[g].classList.toggle("done2");
    };
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    };
};
*/
function done(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    };
};


function deleteItem() {
    var d = document.getElementsByTagName("i");
    for (var k = 0; k < d.length; k++) {
        this.parentNode.parentNode.remove();
    };
};

function deleteOnClick() {
    var deleteIcon = document.getElementsByTagName("i");
    for (var a = 0; a < deleteIcon.length; a++) {
        deleteIcon[a].addEventListener("click", deleteItem);
    };
};

function createDeleteIcon() {
    var li = document.getElementsByTagName("li");
    for (var j = 0; j < li.length; j++) {
        var icon = document.createElement("i");
        var iconDiv = document.getElementsByClassName("icon-div");
        icon.classList.add("far", "fa-trash-alt");
        icon.style.cursor = "pointer";
        iconDiv[j].appendChild(icon);
    };

};


clearButton.addEventListener("click", clear);
enterButton.addEventListener("click", enterItems);
input.addEventListener("keypress", addItemAfterKeypress);
ul.addEventListener("click", done);
// ul.addEventListener("click", done2);
createDeleteIcon();
deleteOnClick()