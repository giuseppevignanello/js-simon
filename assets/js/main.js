// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//Get an element of the dom to show the numbers 
const overlayEl = document.getElementById("overlay");
const messageEl = document.getElementById("message"); 
const playAgainBtn = document.querySelector(".play_again");
const numbersList = document.getElementById("numbers");
const submitEl = document.getElementById("submit"); 
let correctNumbers = []



//Take 5 random number with a function and save them in an array
let randomNumbers = [];
let userNumbers = [];

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

const inputTimeout = setTimeout(showInput, 30000);

const hideNumbersTimeout = setTimeout(hideNumbers, 30000);


let timeLeft = 30;
const countdownEl = document.getElementById('countdown');

const countdownInterval = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(countdownInterval);
  } else {
    countdownEl.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


function showInput() {

    // for (let i = 1; i < 6; i++) {
    //     let userNumber = Number(prompt(`Insert the ${i} number`));
    //     userNumbers.push(userNumber);
    //     // compare the user's array with the random's array 
    //     
    // }

    // alert(`Correct numbers are: ${correctNumbers}. You guessed ${correctNumbers.length} numbers`)


    // console.log(userNumbers);
    let inputEl = document.querySelector(".user_input"); 
    inputEl.classList.add("d-block")
    submitEl.addEventListener("click",
        function () {
          
            let userNumber = Number(document.querySelector("input").value);
            userNumbers.push(userNumber);
            document.querySelector("input").value = ""
            console.log(userNumbers);
            console.log(userNumber);
            if (randomNumbers.includes(userNumber)) {
                correctNumbers.push(userNumber);
            }
            if (userNumbers.length >= 5) {
                document.createElement("div"); 
                overlayEl.classList.add("d-block"); 
                messageEl.innerText = `Correct numbers: ${correctNumbers}.         Your score: ${correctNumbers.length} `
                // console.log(correctNumbers);
                // console.log(`Your score: ${correctNumbers.length} `);
            }
        }
    )
}


//hide numbers 
function hideNumbers() {
    numbersList.classList.add("d-none");
}




// /random number function
function random_number_in_a_int_range(min, max) {

    randomNumber = Number(Math.ceil(Math.random() * (max - min + 1)));
    return randomNumber

}

//play_again btn 

playAgainBtn.addEventListener ("click", 

function() {
    window.location.reload(); 

}
)

