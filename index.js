const textarea = document.querySelector('#myTextarea');
textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
});

const buttonEncrypt = document.querySelector("#encrypt");
const buttonDecrypt = document.querySelector('#decrypt');
const message = document.querySelector("#notfound");
const buttonCopy = document.querySelector('#copy');


function encrypt () {
    let encryptText = textarea.value;
    let modifiedString = "";
    for (let i=0; i< encryptText.length; i++) {
        switch(encryptText[i]){
            case 'a': modifiedString += encryptText[i].replace(/a/g, 'ai');
            break;
            case 'e': modifiedString += encryptText[i].replace(/e/g, 'enter');
            break;
            case 'i': modifiedString += encryptText[i].replace(/i/g, 'imes');
            break;
            case 'o': modifiedString += encryptText[i].replace(/o/g, 'ober');
            break;
            case 'u': modifiedString += encryptText[i].replace(/u/g, 'ufat');
            break;
            default: modifiedString += encryptText[i];
        }
    };
    return modifiedString;
}
function decrypt (){
    let decryptText = textarea.value;
    let substrings = /(enter|imes|ufat|ober|ai)/g;

    
    function replacer (match, p1){
        switch (p1) {
            case 'enter': return 'e';
            case 'ufat': return 'u';
            case 'imes': return 'i';
            case 'ai': return 'a';
            case 'ober': return 'o';
            default: return match;
        }
    }
    
    decryptText = decryptText.replace(substrings, replacer);
    return decryptText;
}
function copyContent(){
    let selected = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(message);
    selected.removeAllRanges();
    selected.addRange(range);
    document.execCommand('copy');
    
}


buttonEncrypt.addEventListener("click", ()=> {

    message.textContent = encrypt();
    message.classList.add("found");
    buttonCopy.style.display = 'block';
    
});

buttonDecrypt.addEventListener("click", ()=> {
    message.textContent = decrypt();
    message.classList.add("found");
    buttonCopy.style.display = 'block';
})

buttonCopy.addEventListener("click", ()=> {
    copyContent();
})
