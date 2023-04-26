function startPalindromo(){
    let userWord = prompt("Scrivi la tua parola da verificare: ");
    alert(isPalindroma(userWord));
}

function startPariDispari(userChoose){
    let userNumber = -1;
    while(userNumber < 1 || userNumber > 5 || isNaN(userNumber)){
        userNumber = prompt("Digita un numero da 1 a 5: ");
    }
    let enemyNumber = Math.floor(Math.random() * (5 - 1) + 1);
    if(isEven(parseInt(userNumber) + enemyNumber)){
        if(userChoose == 1){
            alert(`Tu hai scelto "${userNumber}" e il computer ha scelto "${enemyNumber}". Hai vinto!`);
        }else{
            alert(`Tu hai scelto "${userNumber}" e il computer ha scelto "${enemyNumber}". Hai perso!`);
        }
    }else{
        if(userChoose == 2){
            alert(`Tu hai scelto "${userNumber}" e il computer ha scelto "${enemyNumber}". Hai vinto!`);
        }else{
            alert(`Tu hai scelto "${userNumber}" e il computer ha scelto "${enemyNumber}". Hai perso!`);
        }
    }
}

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

function isPalindroma(word){
    let reverseWord = "";
    for (let index = word.length - 1; index >= 0; index--) {
        reverseWord += word[index];
    }
    console.log(reverseWord);
    if(word.toLowerCase() == reverseWord.toLowerCase()){
        return true;
    }
    return false;
}

