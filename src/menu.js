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



    function createFood(name, cost){
        let cell = document.createElement("div")
        let foodName = document.createElement("div")
        let foodCost = document.createElement("div")

        cell.classList.add("gridCell")
        foodName.textContent = name
        foodCost = cost

        cell.append(foodName, foodCost)
        return cell
    }

const specialList = [
    {
        name: "TROLLBREAD",
        cost: "1 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },

]

specialList.forEach(food => {
    gridContain1.append(
        createFood(food.name, food.cost)
    )
})

const mealList = [
    {
        name: "TROLLBREAD",
        cost: "1 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },

]

mealList.forEach(food => {
    gridContain2.append(
        createFood(food.name, food.cost)
    )
})

const drinkList = [
    {
        name: "TROLLBREAD",
        cost: "1 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },

]

drinkList.forEach(food => {
    gridContain3.append(
        createFood(food.name, food.cost)
    )
})

const experList = [
    {
        name: "TROLLBREAD",
        cost: "1 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },
    {
        name: "OBSIDIAN JELLY",
        cost: "2 GOLD",
    },

]

experList.forEach(food => {
    gridContain4.append(
        createFood(food.name, food.cost)
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