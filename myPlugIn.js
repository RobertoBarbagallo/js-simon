//Variabili globali

numeroMinimo = 1
numeroMassimo = 50
numeriDaGenerare = 5
var timeout = 5000

//Funzioni per generare numeri random e inserirli in un Array

function rndNumGen(minNum, maxNum) {
    var rndNum = parseInt((Math.random() * maxNum) + minNum)
    return rndNum
}

function rndNumPush(quantityOfTimes, minNum, maxNum) {
    var arrayToReturn = [];

    while (arrayToReturn.length < quantityOfTimes) {
        var number = rndNumGen(minNum, maxNum)
        if (arrayToReturn.indexOf(number) === -1) {
            arrayToReturn.push(number)
        }
    }
    return arrayToReturn
}

var rndNumArray = []

rndNumArray = rndNumPush(numeriDaGenerare, numeroMinimo, numeroMassimo)

//Funzione per mpstrare l'alert

function showNum() {
    alert("Memorizza questi numeri, hai " + (timeout / 1000) + " secondi: " + rndNumArray.join(" ,"))
}

showNum()

//Funzione controllo del numero

function numberIsNumber(userInput) {
    var userInputNumber = parseInt(userInput)

    if (Number.isNaN(userInputNumber) && !userInput) {

        return false
    }
    return true
}

//Funzione eseguo prompt e pusho se è un numero e se non è un doppione

function collectingPromptAndPush (){
    var userArray = [];
    var remindedNumArray = []
    var quantityOfTimes = numeriDaGenerare


    do {
        var remindedNum = parseInt(prompt("Inserisci un  numero che ti ricordi")) 
        if (userArray.indexOf(remindedNum) === -1 && numberIsNumber(remindedNum)) {
        userArray.push(remindedNum)
          remindedNumArray  = checkInArray(userArray, rndNumArray, numeriDaGenerare)


        } else if (!numberIsNumber(remindedNum)) {
            alert("Non hai immesso un numero valido")
        } else {
            alert("Hai immesso un doppione")
        }
    } while (userArray.length < quantityOfTimes)

    return userArray
}

//Funzione confronto di due Array con stessa lunghezza

function checkInArray(tocheckArray, mainArray, theTwoArrayLenght) {
         
    var checkedItems = []
   

    for (var i = 0; i < theTwoArrayLenght; i++) {

        for (var j = 0; j < theTwoArrayLenght; j++) {

            if (tocheckArray[i] === mainArray[j]) {
                checkedItems.push(mainArray[j])}
            
        }

    }
    console.log(checkedItems)
    return checkedItems
}

//Main Loop ritardato di un numero variabile ti millisecondi

setTimeout(mainLoop, timeout)

function mainLoop() {

    var firstTarget = document.getElementById("firstarget")
    var remindedNumArray = []
  
   collectdedNum = collectingPromptAndPush()

   remindedNumArray  = checkInArray(collectdedNum, rndNumArray, numeriDaGenerare)


    console.log(remindedNumArray)
    firstTarget.innerHTML = ("Hai indovinato " + remindedNumArray.length + " numeri" + " e nello specifico i numeri erano " + remindedNumArray.join(", "))

    return

}


