
const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".php");
const tabThree = document.querySelector(".python");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");

function setColors(tab,bgColor,iconClass,infoColor){
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class="${iconClass}"></i>`;
    for(let i = 0; i < item.length; i++){
        item[i].style.color = infoColor;
    }
}

tabOne.addEventListener("click", ()=>{
    setColors(tabOne,"#00d8ff","fab fa-react", "#00d8ff");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabTwo.addEventListener("click", ()=>{
    setColors(tabTwo,"#474A8A","fab fa-php", "#474A8A");
    tabTwo.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabThree.addEventListener("click", ()=>{
    setColors(tabThree,"#4B8BBE","fab fa-python", "#4B8BBE");
    tabThree.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabOne.classList.remove("tabOne");
})

setColors(tabOne, "#00d8ff", "fab fa-react", "#00d8ff");
tabOne.classList.add("tabOne");