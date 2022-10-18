const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = ""
let passwords = []
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function pickCharacter() {
    let randomNum = Math.floor( Math.random() * characters.length)
    return characters[randomNum]
}

function generatePassword() {
    for( let i = 0; i < 15; i ++) {
        let passwordLetter = pickCharacter()
        password += passwordLetter
    }
    return password
}

function generatePasswords() {
    password = ""
    passwords.push(generatePassword())
    return passwords
}

function generatePasswordArray() {
    passwords = []
    generatePasswords()
    generatePasswords()  
    password1El.textContent = passwords[0]
    password2El.textContent = passwords[1] 
    console.log(passwords)
}






