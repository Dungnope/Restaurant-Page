
import {content} from './index.js'
import cake from "./img_src/Cake.webp";
import coffee from "./img_src/Coffee.webp";
import hamburger from "./img_src/Hamburger.webp";
function removeContent(){
    while(content.hasChildNodes())
    {
        content.removeChild(content.firstChild);
    }
}

function home(){
    const home = `         
    <section class="flex" id="hero">
        <div id="Herosection" class="row flex">
            <div class="heading flex">
                <h1><span>The Majestic</span> Food For The Fresh Guys</h1>
                <p>Festive Dining At Farthings Where 
                   We Are Strong Believers In 
                   Using The Very Best Produced</p>
            </div>
            <div class="interactive flex">
                <button class="btn">See our menus</button>
                <div class="watch">
                    <span><i class="fa-solid fa-play"></i></span>
                    <span>Watch video</span>
                </div>
            </div>
        </div>
    </section>
    <section class="food_menu flex">
        <ul class="food__list row flex">
            <li>  
                <h2>Steaks & BBQ</h2>
                <p>Every bite brings the bold taste of real BBQ perfection</p>
                <div class="food__price flex"><span>$80</span> per person</div>
            </li>
            <li>
                <div class="food__content">
                    <h2>Pizza and Hamburger</h2>
                <p>Every try brings the rich taste of real pizza perfection!</p>
                </div>
                <div class="food__price flex"><span>$80</span> per person</div>
            </li>
        </ul>
    </section>`;
    content.setHTMLUnsafe(`${home}`);
}

function menu(...args)
{   
    removeContent();

    const itemList = [
        {
            dish_name: "Carrot cake",
            dis_price: "$9.00",
            dish_desc: "Moist spiced cake made with grated carrots and layered with rich cream cheese frosting"
        },

        {
            dish_name: "Tiramisu",
            dis_price: "$8.54",
            dish_desc: "Classic Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa"
        },

        {
            dish_name: "Pineapple upside-down cake",
            dis_price: "$7.00",
            dish_desc: "Caramelized pineapple rings baked on top of a buttery vanilla cake"
        },        
        
        {
            dish_name: "Red velvet cake",
            dis_price: "$6.00",
            dish_desc: "Velvety soft red cake with hints of cocoa, layered with smooth cream cheese frosting"
        },
        // Main dish
        {
            dish_name: "Fresh cut fries",
            dis_price: "$10.00",
            dish_desc: "Famous cooked to a crisp"
        },

        {
            dish_name: "Mac & Cheese fries",
            dis_price: "$12.54",
            dish_desc: "Fresh cut fries - Mac & Cheese"
        },

        {
            dish_name: "Hot dog",
            dis_price: "$9.00",
            dish_desc: "Hottest hot dog"
        },        
        
        {
            dish_name: "Bacon cheeseburger",
            dis_price: "$13.40",
            dish_desc: "Premium Beef - Bacon - Sliced Cheese"
        },
    ]

    const drinks = [
        {
            dish_name: "Coca Cola",
            dis_price: "$2.50",
            dish_desc: "The more you drink, the better you eat"
        },

        {
            dish_name: "Pepsi",
            dis_price: "$3.46",
            dish_desc: "The fresh berverage for the infinite party"
        },

        {
            dish_name: "Hot black coffee",
            dis_price: "$5.50",
            dish_desc: "Elegant drink for the stress"
        },

        {
            dish_name: "avocado smoothie",
            dis_price: "$4.00",
            dish_desc: "The cool of natural with combination of iced"
        }
    ]
    const imgList = [
        `${cake}`, `${hamburger}`, `${coffee}`
    ];
    const normalClass = "primary";
    const reverseClass = "reverse";
    let step = 2;
    function createBlock()
    {
        this.sectionMenu = document.createElement("section");
        this.menuContent = document.createElement("div");
        this.menuContentList = document.createElement("div");
        this.menuList = document.createElement("ul");
        this.sectionMenu.classList.add("menu");
        this.menuList.classList.add("flex");
        this.Decision = function(count)
        {
            if(count === 2)
            {
                this.menuContent.classList.add("menu_content", "row", "flex", `${normalClass}`);
                this.menuContentList.classList.add("menu_content-list", "flex", `${normalClass}`);
                this.menuList.innerHTML += `<img src="${imgList[0]}" alt="cake">`
                this.menuList.innerHTML += `<li class="list_title">Dessert</li>`;
            }
            else if(count === 1)
            {
                this.menuContent.classList.add("menu_content", "row", "flex", `${reverseClass}`);
                this.menuContentList.classList.add("menu_content-list", "flex", `${reverseClass}`);
                this.menuList.innerHTML += `<img src="${imgList[1]}" alt="hamburger">`
                this.menuList.innerHTML += `<li class="list_title" style="color: var(--primarycolor)">Dish Menu</li>`;
            }
            else
            {
                this.menuContent.classList.add("menu_content", "row", "flex", `${normalClass}`);
                this.menuContentList.classList.add("menu_content-list", "flex", `${normalClass}`);
                this.menuList.innerHTML += `<img src="${imgList[2]}" alt="coffee">`
                this.menuList.innerHTML += `<li class="list_title">Drinks</li>`;
            }
        }
        this.Merge =  function(){
            this.menuContentList.append(this.menuList);
            this.menuContent.append(this.menuContentList);
            this.sectionMenu.append(this.menuContent);
        }
    }
    while(args[0] > 0)
    {
        if(step === 2)
        {
            const menuBook = new createBlock();
            menuBook.Decision(step);
            for(let i = 0; i < itemList.length / 2; i++)
            {
                const items = 
                `<li class="dish_info flex">
                    <p class="dish_name">${itemList[i].dish_name}</p>
                    <p class="dish_price">${itemList[i].dis_price}</p>
                    <p class="dish_desc">${itemList[i].dish_desc}</p>
                </li>`;
               menuBook.menuList.innerHTML += items;
            }
            menuBook.Merge();
            content.append(menuBook.sectionMenu);
            step--;
        }
        if(step < 2){
            const menuBook = new createBlock();
            menuBook.Decision(step);
            for(let i = 4; i != itemList.length; i++)
            {
                const items = `<li class="dish_info flex">
                    <p class="dish_name" style="color: var(--primarycolor)">${itemList[i].dish_name}</p>
                    <p class="dish_price" style="color: var(--secondarycolor-100)">${itemList[i].dis_price}</p>
                    <p class="dish_desc" style="color: var(--primarycolor)">${itemList[i].dish_desc}</p>
                </li>`;
               menuBook.menuList.innerHTML += items;
            }
            menuBook.Merge();
            menuBook.sectionMenu.style.backgroundColor = `var(--primarycolor)`;
            content.append(menuBook.sectionMenu);
            step--;
        }
        
        if(step < 1)
        {
            const menuBook = new createBlock();
            menuBook.Decision(step);
            for(let i = 0; i < drinks.length; i++)
            {
                const items = 
                `<li class="dish_info flex">
                    <p class="dish_name">${drinks[i].dish_name}</p>
                    <p class="dish_price">${drinks[i].dis_price}</p>
                    <p class="dish_desc">${drinks[i].dish_desc}</p>
                </li>`;
               menuBook.menuList.innerHTML += items;
            }
            menuBook.Merge();
            content.append(menuBook.sectionMenu);
            step--;
        }
        args[0]--;
        step = 2;
    }

}

function contact()
{
    const contact = `
    <div class="contact__section flex">
            <div class="contact__menu row flex">
                <h2>Contact</h2>
                <div class="contact__info flex">
                    <div class="contact__phone">
                        <a href="#"><i class="fa-solid fa-phone"></i></a>
                        <p>083-257-9999</p>
                    </div>
                    <div class="contact__profile">
                        <a href="https://github.com/Dungnope" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <p>DungNope</p>
                    </div>
                </div>
            </div>
        </div>`
    content.setHTMLUnsafe(contact);
}

export {home, menu, contact};

{/* <section class="menu">
        <div class="menu_content row flex primary">
            <div class="menu_content-list flex primary">
                <ul class="flex">
                    <img src="../src/img_src/Cake.png" alt="Cake">
                    <li class="list_title">Dessert</li>
                    <li class="dish_info flex">
                        <p class="dish_name">Carrot cake</p>
                        <p class="dish_price">$9.00</p>
                        <p class="dish_desc">Moist spiced cake made with grated carrots and layered with rich cream cheese frosting</p>
                    </li>
                    <li class="dish_info flex">
                        <p class="dish_name">Tiramisu</p>
                        <p class="dish_price">$8.54</p>
                        <p class="dish_desc">Classic Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa</p>
                    </li>
                    <li class="dish_info flex">
                        <p class="dish_name">Pineapple upside-down cake</p>
                        <p class="dish_price">$7.00</p>
                        <p class="dish_desc">Caramelized pineapple rings baked on top of a buttery vanilla cake</p>
                    </li>
                    <li class="dish_info flex">
                        <p class="dish_name">Red velvet cake</p>
                        <p class="dish_price">$6.00</p>
                        <p class="dish_desc">Velvety soft red cake with hints of cocoa, layered with smooth cream cheese frosting</p>
                    </li>
                </ul>
            </div>
        </div>
    </section> */}