
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

class CssPropControl {
    constructor(element) {
        this.element = element;
    }
    get(varName) {
        return getComputedStyle(this.element).getPropertyValue(varName);
  
    }

    set(varName, val) {
        return this.element.style.setProperty(varName, val)
      }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector('#dark-mode-toggle');
toggle.addEventListener('click', () => {
    let mode = toggle.checked ? 'dark' : 'light';
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
})