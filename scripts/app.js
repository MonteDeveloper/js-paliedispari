function startPalindromo(){
    let userWord = prompt("Scrivi la tua parola da verificare: ");
    alert(isPalindroma(userWord));
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

