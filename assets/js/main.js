// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//Get an element of the dom to show the numbers 

const numbersList = document.getElementById("numbers");

//Take 5 random number with a function and save them in an array
let randomNumbers = [];

while (randomNumbers.length < 5) {
    let randomNumber = random_number_in_a_int_range(1, 1000);
    const randomNumberItem = document.createElement("li");
    randomNumberItem.append(randomNumber)
    numbersList.append(randomNumberItem)


    if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
    }

}


console.log(randomNumbers);

//Show the prompts with a setTiming function and save them in an array

const promptsTimeout = setTimeout(showPrompts, 30500);

const hideNumbersTimeout = setTimeout(hideNumbers,30000)

function showPrompts() {

   for (let i = 1; i < 6; i++) {
      prompt(`Insert the ${i} number`)
  }

}

function hideNumbers(){
    numbersList.classList.add("d-none"); 
}




// compare the user's array with the random's array 





// /random number function
function random_number_in_a_int_range(min, max) {

    randomNumber = Number(Math.ceil(Math.random() * (max - min + 1)));
    return randomNumber

}