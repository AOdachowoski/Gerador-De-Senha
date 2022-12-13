let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*?@';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value; // O valor que aparecerá para o tamanho da senha recebe o valor do slider 

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;  // O tamhanho da senha será alterada toda vez que o valor do slider for modificado 
}


function generatePassword(){

  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){  
    pass += charset.charAt(Math.floor(Math.random() * n));  
  }
  
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword(){
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}