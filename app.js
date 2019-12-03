let inputDetails = Array.from(document.querySelectorAll('input'))
let submitButtonSelector = document.getElementById("add-entry");
let storageArr = []

submitButtonSelector.addEventListener("click", (e) => {
    e.preventDefault();
    addEntry()
    addEntryToLocalStorage(storageArr)
    console.log("Entry Added to Local Storage")
})

function addEntry(){
    let newEntry = {}
    inputDetails.forEach(val =>{
        newEntry[val.id] = val.value
    })
    //localStorage.setItem("storedata", JSON.stringify(storageArr.push(newEntry)))
    storageArr.push(newEntry)
}

function addEntryToLocalStorage(storageArr){
    localStorage.setItem("storedata", JSON.stringify(storageArr))
}

function fillCards(storageData){
    for(i=0; i<storageData.length; i++){
        let card = document.createElement("div")
        card.className = "card"
        document.querySelector("body > div > div")
        //document.querySelector("body > div > div > div:nth-child(1)")
            .appendChild(card)
        Object.entries(storageData[i]).forEach(([key, value]) =>{
            //document.querySelector("body > div > div > div")
            let dataLabel = document.createElement("label");
            document.querySelector("body > div > div")
                .appendChild(dataLabel).innerText = `${key.charAt(0)
                .toUpperCase() + key.slice(1)}:`
            let dataInnerValue = document.createElement("p");
            document.querySelector("body > div > div")
                .appendChild(dataInnerValue).innerText = `${value}`;
        })
    }
}



window.addEventListener('DOMContentLoaded', (e) => { 
    if(localStorage.length !== 0){
        let storageData = JSON.parse(window.localStorage.getItem("storedata"))
        fillCards(storageData)
    } else{
        console.log("Local storage empty")
    }
});

