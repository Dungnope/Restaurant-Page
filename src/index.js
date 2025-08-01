import './style.css';
import {home, menu, contact} from  './components.js';
const content = document.getElementById("content");
const menuList = document.querySelectorAll(".list ul li");
const bottomBar = `4px solid var(--accent_orange-200)`;
const logo = document.getElementById("Logo");
menuList[0].style.borderBottom = bottomBar;

home();

menuList.forEach(e => {
    e.addEventListener("click", item => {
        content.classList.remove("flex");
        content.removeAttribute("style");
        for(let i = 0; i < menuList.length; i++)
        {
            if(menuList[i].hasAttribute("style")) menuList[i].removeAttribute("style");
        }

        if(e.textContent === "Home") {
            home();
        }
        else if(e.textContent === "Menus")
        {
            menu(1); //number menu want to add, include: dessert and main
        }
        else
        {
            contact();
            content.classList.add("flex");
            content.style.flexDirection =`column`;
        }
        e.style.borderBottom = bottomBar;
    })
})

logo.addEventListener("click", e => {
    home();
    menuList[0].style.borderBottom = bottomBar;
    for(let i = 1; i < menuList.length; i++)
    {
        if(menuList[i].hasAttribute("style"))
        {
            menuList[i].removeAttribute("style");
            break;
        }
    }
})

export {content};
       