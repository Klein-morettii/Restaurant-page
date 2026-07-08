export {menu}

function menu(){
    const contain = document.querySelector("#contain")
    const menHead = document.createElement("div")
    const menuHeading = document.createElement("div")
    const warning = document.createElement("div")

    const houseSpecial = document.createElement("div")
    const gridContain1 = document.createElement("div")

    const meal = document.createElement("div")
    const gridContain2 = document.createElement("div")

    const drinks = document.createElement("div")
    const gridContain3 = document.createElement("div")

    const exper = document.createElement("div")
    const gridContain4 = document.createElement("div")

    const onHouse = document.createElement("div")
    const onHouse1 = document.createElement("div")
    const onHouse2 = document.createElement("div")

    menuHeading.textContent = "DELICACIES AVAILABLE FOR THY TO TRY"
    warning.textContent = "wasting of food is not tolerated"
    onHouse1.textContent = "If you want to try our experimental dishes but are worried about the cost, dont worry for it is on the house,"
    onHouse2.textContent = "What isnt on the house is if you got cursed or got transfigured into a Chihuahua."
    houseSpecial.textContent = "HOUSE SPECIAL"
    meal.textContent = "MEAL"
    drinks.textContent = "DRINKS"
    exper.textContent = "EXPERIMENTAL DISHES"

    menHead.classList.add("menHead")
    menuHeading.classList.add("menuHeading")
    warning.classList.add("warning")
    onHouse.classList.add("onHouse")
    onHouse1.classList.add("onHouse1")
    onHouse2.classList.add("onHouse2")
    houseSpecial.classList.add("foHead")
    gridContain1.classList.add("gridContain1")
    meal.classList.add("foHead")
    gridContain2.classList.add("gridContain2")
    drinks.classList.add("foHead")
    gridContain3.classList.add("gridContain3")
    exper.classList.add("foHead")
    gridContain4.classList.add("gridContain4")



    function createFood(name, descr, cost){
        let cell = document.createElement("div")
        let foodName = document.createElement("div")
        let desc = document.createElement("div")
        let foodCost = document.createElement("div")

        cell.classList.add("gridCell")
        foodName.classList.add("foodNam")
        desc.classList.add("descr")
        foodCost.classList.add("monii")

        foodName.textContent = name
        desc.textContent = descr
        foodCost = cost

        cell.append(foodName, desc, foodCost)
        return cell
    }

const specialList = [
    {
        name: "DRAGONBREATH CRYSTALS",
        desc: "Element-themed bits of rock candy with slight magical effects related to the element.",
        cost: "5 GOLD",
    },
    {
        name: "KRAKOYAKI",
        desc: "A savory fried dough snack, made with bits of real Kraken. One is often enough to feed a large party,",
        cost: "20 GOLD",
    },
    {
        name: "FLAYERADE", 
        desc: "Juice from a blue, squidlike fruit that confers mild telepathic senses for a few hours.",
        cost: "15 GOLD",
    },

]

specialList.forEach(food => {
    gridContain1.append(
        createFood(food.name, food.desc, food.cost)
    )
})

const mealList = [
    {
        name: "TROLLBREAD",
        desc: "A greenish bread made with troll blood, it slowly grows back as you eat it. Has a chance of growing other parts. If left unfinished, it might grow into a troll.",
        cost: "2 GOLD",
    },
    {
        name: "BLOODWINE BERRIES", 
        desc: "From a haunted a forest, they can make a tangy juice that harmlessly simulates the effects of blood, and makes a popular option for local vampires.",
        cost: "10 GOLD",
    },
    {
        name: "BANSHEE BURGER",
        desc: "This odd purplish burger moves on its own and tries to yell. If you don't hold the flapping buns down it yodels loudly at you, adding 1d100 lb. to the hearer's body weight for one day.",
        cost: "12 GOLD",
    },

]

mealList.forEach(food => {
    gridContain2.append(
        createFood(food.name, food.desc, food.cost)
    )
})

const drinkList = [
    {
        name: "CLOUD COFFEE",
        desc: "A bluish-white and slightly chatoyant beverage that is popular among cloud giants. Served hot, and often enjoyed because of its chill reducing and moderate stimulant effects.",
        cost: "5 GOLD",
    },
    {
        name: "HULKA SELTZER",
        desc: "Bubbly, amber-colored, and confusing beverage. Increases strength briefly, but the drinker is made more susceptible to illusion magic. ",
        cost: "6 GOLD",
    },
    {
        name: "ELDRITCH OOLONG",
        desc: "Steepings of an herb grown in far-flung voids. It is merchanted by flocks of imps that amble through open rifts in search of trade. The longer you wait to drink it, the better it will taste to you. Immortals may keep brews on tap for ages",
        cost: "25 GOLD",
    },

]

drinkList.forEach(food => {
    gridContain3.append(
        createFood(food.name, food.desc, food.cost)
    )
})

const experList = [
    {
        name: "SWORD IN THE CHEESE",
        desc: "A normal seeming sword stuck in a magical, centuries-old wheel of ultrahard cheese. None have been able to successfully pull the sword out from this wheel. Somehow everything fails.",
        cost: "10 GOLD",
    },
    {
        name: "HELLFIRE FLAMBE",
        desc: "Served in a golden urn full of fire, with magical hoses to drink from. This dish involves drinking actual fire, though the flavor can be modified by placing magical wood chips in the urn.",
        cost: "6 GOLD",
    },
    {
        name: "CORNE MACABRE",
        desc: "A large, blackened ear of roasted bone-colored corn. Has a mildly earthy flavor reminiscent of graves. Each kernel on the cob is shaped like a tiny skull. Sometimes they bite back...",
        cost: "2 GOLD",
    },

]

experList.forEach(food => {
    gridContain4.append(
        createFood(food.name, food.desc, food.cost)
    )
})


    contain.append(menHead)
        menHead.append(menuHeading)
        menHead.append(warning)
    contain.append(onHouse)
        onHouse.append(onHouse1)
        onHouse.append(onHouse2)
    contain.append(houseSpecial)
    contain.append(gridContain1)
    contain.append(meal)
    contain.append(gridContain2)
    contain.append(drinks)
    contain.append(gridContain3)
    contain.append(exper)
    contain.append(gridContain4)


}   