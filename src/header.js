export {topBar}

function topBar (){
    const header = document.querySelector("header")
    const headDiv = document.createElement("div")
    const heading = document.createElement("div")

    const nav = document.querySelector("nav")
    const home = document.createElement("button")
    const menu = document.createElement("button")
    const about = document.createElement("button")
    
    headDiv.classList.add("headDiv")
    heading.classList.add("heading")
    
    heading.textContent = "CROOKED CALDRON"
    home.textContent = "HOME"
    menu.textContent = "MENU"
    about.textContent= "ABOUT"

    const navBut = [home, menu, about]

    navBut.forEach(button =>{
        button.classList.add("navBut")
    })

    header.append(headDiv)
    headDiv.append(heading)

    header.append(nav)
    navBut.forEach(button =>{
        nav.append(button)
    })
}