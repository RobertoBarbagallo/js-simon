numeroMinimo = 1
numeroMassimo = 50
numeriDaGenerare = 5
var timeout = 5000



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



function showNum() {
    alert("Memorizza questi numeri, hai " + (timeout / 1000) + " secondi: " + rndNumArray.join(" ,"))
}

showNum()


setTimeout(mainLoop(numeriDaGenerare), timeout)

function mainLoop(quantityOfTimes) {

    var firstTarget = document.getElementById("firstarget")
    var userArray = [];
    var remindedNumArray = []



    do {
        var remindedNum = parseInt(prompt("Inserisci un  numero che ti ricordi")) 
        if (userArray.indexOf(remindedNum) === -1 && numberIsNumber(remindedNum)) {
        userArray.push(remindedNum)
          remindedNumArray  = checkInArray(userArray, rndNumArray, numeriDaGenerare)


        } else if (userArray.indexOf(remindedNum) > -1 && !numberIsNumber(remindedNum)) {
            alert("Non hai immesso un numero valido")
        } else {
            alert("Hai immesso un doppione")
        }
    } while (userArray.length < quantityOfTimes)



    function checkInArray(tocheckArray, mainArray, theTwoArrayLenght) {
        var times = theTwoArrayLenght
        var checkedItems = []
       

        for (var i = 0; i < times; i++) {

            for (var j = 0; j < times; j++) {

                if (tocheckArray[i] === mainArray[j]) {
                    checkedItems.push(mainArray[j])}
                
            }

        }
        console.log(checkedItems)
        return checkedItems
    }
      
    

    console.log(remindedNumArray)
    firstTarget.innerHTML = ("Hai indovinato " + remindedNumArray.length + " numeri" + " e nello specifico i numeri erano " + remindedNumArray.join(", "))

    return

}




function numberIsNumber(userInput) {
    var userInputNumber = parseInt(userInput)

    if (Number.isNaN(userInputNumber) && !userInput) {

        return false
    }
    return true
}