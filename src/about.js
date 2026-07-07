export {about}

function about() {
     const contain = document.querySelector("#contain")
    const containerAbout = document.createElement("div")
        const story = document.createElement("div")
            const lore = document.createElement("div")
            const reminder = document.createElement("div")
            const remindYap = document.createElement("div")
        const seat = document.createElement("div")
            const head = document.createElement("div")
            const form = document.createElement("form")
            
            const field = document.createElement("fieldset")
                const legend = document.createElement("legend")
                    const field1 = document.createElement("div")
                        const label1 =document.createElement("label") /* travellers name */
                        const input1 = document.createElement("input")
                    const field2 = document.createElement("div")
                        const label2 =document.createElement("label") /* party number */
                        const input2 = document.createElement("input")
                    const field3 = document.createElement("div")
                        const label3 =document.createElement("label")   /* date */
                        const input3 = document.createElement("input")
                    const field4 = document.createElement("div")
                        const label4 =document.createElement("label") /* species */
                        const input4 = document.createElement("input")
                    const submit = document.createElement("button")

        const dialog = document.createElement("dialog")
            const to = document.createElement("div")
            const dialogYap = document.createElement("div")
            const dialogYap1 = document.createElement("div")
            const dialogYap2 = document.createElement("div")
            const dialogYap3 = document.createElement("div")
            const dialogYap4 = document.createElement("div")
            const dialogYap5 = document.createElement("div")
            const dialogRules = document.createElement("div")
            const dialogContainer = document.createElement("ul")
                const dialogRules1 = document.createElement("li")
                const dialogRules2 = document.createElement("li")
                const dialogRules3 = document.createElement("li")
                const dialogRules4 = document.createElement("li")
                const dialogRules5 = document.createElement("li")
            const close = document.createElement("button")

    /*type of input */
    input1.type = "text"
    input2.type = "date"
    input3.type = "number"
    input4.type = "species"
    /*giving class names to the created elements*/
    containerAbout.classList.add("containerAbout")
    story.classList.add("story")
        lore.classList.add("lore")
        reminder.classList.add("reminder")
        remindYap.classList.add("remindYap")
    seat.classList.add("seat")
        head.classList.add("head")
        form.classList.add("form")
        dialog.classList.add("dialog")
        submit.classList.add("submit")
    to.classList.add("to")
    dialogYap.classList.add("dialogYapp")
    dialogYap1.classList.add("dialogYap")
    dialogYap2.classList.add("dialogYap")
    dialogYap3.classList.add("dialogYap")
    dialogYap4.classList.add("dialogYap4")
    dialogYap5.classList.add("dialogYap4")
    
    const dialogrule = [dialogRules1, dialogRules2, dialogRules3, dialogRules4, dialogRules5]
    dialogrule.forEach(li =>{
        li.classList.add("list")
    })
    close.classList.add("close")

    /* textcontent */
    story.textContent = "THE LAGACY OF THE CROOKED CALDRON"
        lore.textContent = "More than three centuries ago, during an age when frightened kingdoms hunted anything touched by magic, an old innkeeper named Eldrin Cauldron vanished from the maps. Most rumors had that he was executed or killed but another faint rumor says that Eldrin struck a bargain with an ancient spirit that lived between roads. Not a god. Not a demon. Something older. In exchange for protecting those who sought refuge, the inn itself would be hidden from the ordinary world amd when the bargain was struck, the tavern disappeared. The Crooked Cauldron no longer exists on any road, in any kingdom, or on any map. It rests in a fold between places, where wandering souls, exhausted adventurers, hedge witches, scholars, mercenaries and the occasionally confused dragon hunter gather beneath one roof. Those invited always arrive. Those who search rarely do."
        reminder.textContent = "WHY RESERVATION "
        remindYap.textContent = "Due to the recent allowance of the non mages to the establishment as well as te large number of usual travellers, non mages who dont want to risk sharing tables with random wizards, fearsome necromancers, occational dragonborns or those who want to enjoy thier evening with their friends or family may reserve a table to themselves."

        legend.textContent = "RESERVE A TABLE"
        label1.textContent = "TRAVELLER'S NAME:  "
        label2.textContent = "DATE OF VISIT:  "
        label3.textContent = "NUMBER OF GUESTS:  "
        label4.textContent = "SPECIES:  "
        submit.textContent = "REGISTER"

    to.textContent = "DEAR CUSTOMER"
    dialogYap.textContent = "[RESERVATION ACCEPTED]"
    dialogYap1.textContent ="After a thorough review of your request, your family history, and the regrettable incidents attached to your name, the management of the CROOKED CAULDRON has approved your visit." 
    dialogYap2.textContent = " Within the coming days, a physical copy of this letter shall arrive by owl. Gather every member of your party around the parchment before setting it aflame."
    dialogYap3.textContent = " First-time visitors are advised to close their eyes during transit. The tavern exists between roads that ordinary minds were never meant to witness. Attempts to bring more guests than those declared in your reservation will result in... unexpected seating arrangements."
    dialogYap4.textContent = "We eagerly await your arrival."
    dialogYap5.textContent = "Keeper of the Crooked Cauldron"
    close.textContent= "CLOSE"


    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        dialog.showModal()
    })
    close.addEventListener("click", ()=>{
        dialog.close()
    })
    /*appending */
    contain.append(containerAbout)
    containerAbout.append(story)
        story.append(lore)
        story.append(reminder)
        story.append(remindYap)
    containerAbout.append(seat)
        seat.append(form)   
            form.append(field)
            field.append(legend)
            field.append(field1)
                field1.append(label1)
                field1.append(input1)
            field.append(field2)
                field2.append(label2)
                field2.append(input2)
            field.append(field3)
                field3.append(label3)
                field3.append(input3)
            field.append(field4)
                field4.append(label4)
                field4.append(input4)
            field.append(submit)

    contain.append(dialog)
        dialog.append(to)
        dialog.append(dialogYap)
        dialog.append(dialogYap1)
        dialog.append(dialogYap2)
        dialog.append(dialogYap3)
        dialog.append(dialogYap4)
        dialog.append(dialogYap5)
        dialog.append(dialogRules)
        dialog.append(dialogContainer)
        dialogrule.forEach(li =>{
            dialog.append(li)
        })
        dialog.append(close)

        return {
            submit, close
        }

}