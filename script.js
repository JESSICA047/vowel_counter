const textInput = document.getElementById('inputText');
const result = document.getElementById('result');

function isvowel(text) {
    const vowels = ["a","e","i","o","u"];
    let count = 0;


    for (let char of text.toLowerCase() ){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

function checkVowels() {
    const user_input = textInput.value;
    const vowelCount = isvowel(user_input);
    result.innerHTML = `NUMBER OF VOWELS: ${vowelCount}`;
    reset()
}

function reset(){
    textInput.value=""
}
// Read on for loops ;
// DOM manipulation
// inner text , inner html 
