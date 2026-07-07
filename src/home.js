export {home}

const greetings = " Zaaaa Wardo "

function home(){
    const contain = document.querySelector("#contain")
    const heroImg  = document.createElement("div")
    const heroText = document.createElement("div")
        const divHeroText = document.createElement("div")
        const tableDiv = document.createElement("div")
            const table = document.createElement("button")
        
    heroImg.classList.add("heroImg")
    heroText.classList.add("heroText")
    divHeroText.classList.add("divHeroText")
    tableDiv.classList.add("tableDiv")
    table.classList.add("table")
    divHeroText.textContent = "Where every traveler leaves with a full stomach... and perhaps one extra curse."
    table.textContent= "Get a Table"


    contain.append(heroText)  
        heroText.append(divHeroText)  
        heroText.append(tableDiv)
            tableDiv.append(table)
    contain.append(heroImg)


    const feature = document.createElement("div")
    const leftYap = document.createElement("div")
        const leftYapText = document.createElement("div")
    const rightYap = document.createElement("div")
        const rightYapCell = document.createElement("div")
            const cell1 = document.createElement("div")
            const cell2 = document.createElement("div")

    const cell = [cell1, cell2]

    feature.classList.add("feature")
    leftYap.classList.add("leftYap")
    rightYap.classList.add("rightYap")
    leftYapText.classList.add("leftYapText")
    rightYapCell.classList.add("rightYapCell")
    cell.forEach(div =>{
        div.classList.add("cell")
    })

    leftYap.textContent = "WELCOME, GREAT MAGICIANS"
    leftYapText.textContent = "Hidden between crooked alleys and forgotten roads, The Crooked Cauldron has served witches, wizards, wandering vault breakers and the occasional dragon hunter for over 300 years. Whether you seek a warm meal or a place to escape the rain... our doors remain open."
    
    rightYap.textContent = "TODAY'S SPECIAL"
    
    cell1.textContent = "AGE STATEMENT WHISKEY"
    cell2.textContent = "CURSE COOKIES"

    contain.append(feature)
        feature.append(leftYap)
            leftYap.append(leftYapText)
        feature.append(rightYap)
            rightYap.append(rightYapCell)
                cell.forEach(div =>{
                    rightYapCell.append(div) 
                })
    
    return {
        table, contain
    }
}

/*
function middleSection(){
    const contain = document.querySelector("#contain")
    const hero = document.createElement("div")
    const 
}
*/