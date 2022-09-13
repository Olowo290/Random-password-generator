const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let hey = document.getElementById("input1")
let hi = document.getElementById("input2")

function genPasswords(){
    
    let password1 = ""
    let password2 = ""
    
    for (i = 0; i < 10; i++){
      let randomNumber = characters[Math.floor(Math.random() * characters.length )]
      password1 += randomNumber
    }
    
    for (i = 0; i < 10; i++){
        let randomNumber = characters[Math.floor(Math.random() * characters.length )]
        password2 += randomNumber
    }
    
    hey.textContent = password1
    hi.textContent = password2
}