
function linkHover(event) {
    event.target.style.borderBottom = "1px solid black";
}

function hoverOff(event) {
    event.target.style.borderBottom = "";
}

for (elem of document.getElementsByClassName('navBar')) {
    elem.addEventListener('mouseover', linkHover);
    elem.addEventListener('mouseout', hoverOff);
}

function buttonHover(event) {
    event.target.style.backgroundColor = "turquoise";
}
function buttonOff(event) {
    event.target.style.backgroundColor = "blue";
}

for (elem of document.getElementsByClassName('link-icon')) {
    elem.addEventListener('mouseover', buttonHover);
    elem.addEventListener('mouseout', buttonOff);
}