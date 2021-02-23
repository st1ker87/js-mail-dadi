// creo il mio vettore con le email
var email;
email = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "heidi@gmail.com"]

// creo le variabili
var bottonePass, mailCapture, procedi, bottoneRoll, playerDice, pcDice, vincitore;

// creo una funzione per poter verificare l'email inserita e far comparire il mio gioco
bottonePass = document.getElementById("btn_pass");
bottonePass.addEventListener("click",
    function () { 
        // verifico l'email inserita con un ciclo for
        for (var i = 0; i < email.length; i++){
            mailCapture = document.getElementById("email").value;
            if (email[i] == mailCapture) {
                procedi = true;
            }
        }
        if (procedi) {
            alert("La mail inserita è valida. Buon divertimento!")
            document.getElementById("play_dice").className = "show";
        }else {
            alert("Devi inserire una mail valida!");
        }
    }
);

bottoneRoll = document.getElementById("btn_roll");
bottoneRoll.addEventListener("click", 
    function () {
        playerDice = (Math.round(Math.random() * 5) + 1);
        pcDice = (Math.round(Math.random() * 5) + 1);
        document.getElementById("player_dice").className = "d" + playerDice;
        document.getElementById("pc_dice").className = "d" + pcDice;
        if (playerDice > pcDice) {
            document.getElementById("vincitore").innerHTML = "You Win!!!"
        } else if (playerDice == pcDice) {
            document.getElementById("vincitore").innerHTML = "- draw -"
        } else {
            document.getElementById("vincitore").innerHTML = "You lose."

        }

    }
);

// numbers = [1 , 5, 7, 8, 10];

// for (var i = 0; i < numbers.length; i++){
//     if ((numbers[i] % 2) != 0){
//         console.log(numbers[i]);
//     }
// }