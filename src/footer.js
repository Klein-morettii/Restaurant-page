export{footer}

function footer(){
    const footer = document.querySelector("footer")
    const develop = document.createElement("div")
    const proff = document.createElement("div")

    develop.classList.add("develop")
    proff.classList.add("proff")

    develop.textContent = "Developed by Arry"
    proff.textContent = "Apprentice mage at Crooked Caldron"
    footer.append(develop)
    footer.append(proff)
}