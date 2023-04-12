function generatePassword(elm){
    elm = document.getElementById(elm);
    elm.value = generateRandomPassword();
}

function generateRandomPassword(){
    return Math.random().toString(35).slice(-12);
}

function copyToClipboard(){
    let copyText = document.getElementById("password");
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    toastr.success('Senha copiada com sucesso!')
}

function resetPassword(){
    let password = document.getElementById("password");
    password.value = "";
}

