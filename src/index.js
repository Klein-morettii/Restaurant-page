import { topBar} from "./header.js"
import {home} from "./home.js"
import { menu } from "./menu.js"
import{about} from "./about.js"
import {footer} from "./footer.js"

import "./styles.css"


let buttons = topBar()
let cont = home()
buttons.home.addEventListener("click", ()=>{
    showHome()
})
buttons.menu.addEventListener("click", ()=>{
    showMenu()
})
buttons.about.addEventListener("click", ()=>{
    showAbout()
})

footer()

function showHome(){
    cont.contain.innerHTML = ""
    home()
}
function showMenu(){
    cont.contain.innerHTML = ""
    menu()
}
function showAbout(){
    cont.contain.innerHTML = ""
    about()
}