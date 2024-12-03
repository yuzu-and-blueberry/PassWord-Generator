

let pass1El = document.querySelector('#genpass1')
let pass2El = document.querySelector('#genpass2')

function genPass() {
    let pass = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%*'
    for (let i = 0; i < 12; i++) {
        let char = Math.floor(Math.random() * characters.length + 1);
        pass += characters.charAt(char);
    }
    return pass;
}

function genPasses() {
    pass1El.textContent = genPass()
    pass2El.textContent = genPass()
}