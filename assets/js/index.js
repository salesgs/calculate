import { eventButton } from"./modules/EventButton.js";
import calculate from "./modules/calculate.js";
import clear from "./modules/Clear.js";
const main = document.querySelector('main');
const root = document.querySelector(':root');
const resultInput = document.getElementById('result');

// array com valores permitidos para fazer a verificação no input 
const allowedKeys =["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach((element)=>{
  element.addEventListener('click',function buttonClick(element){
    const target = element.currentTarget; //alvo clicado
    eventButton(target); //passa pra função o elemento clicado
  });
});

document.getElementById('clear').addEventListener('click',clear);

input.addEventListener('keydown',function(ev){
 ev.preventDefault();
  if(allowedKeys.includes(ev.key)){ //checa se o valor da tecla está incluso
    input.value +=ev.key;
    return
  }if(ev.key==='Backspace'){
    input.value = input.value.slice(0,-1); //appagando valor
  }
  if(ev.key==='Enter'){
    calculate();
  }
});

document.getElementById('equal').addEventListener('click',function(event){
  event.preventDefault();
    calculate();
});


// botão copiar
document.getElementById('copyToClipboard').addEventListener('click',function(ev){
  const button = ev.currentTarget
  if(button.innerText==='Copy'){ //
    button.innerText='Copied!';//mensage
    button.classList.add('success'); 
    navigator.clipboard.writeText(resultInput.value);
  }else{
    button.innerText='Copy';
    button.classList.remove('success');
  }
});


// trocar a cor de fundo
document.getElementById('themeSwitcher').addEventListener('click',function(){
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
});

/*
Para esse projeto você irá utilizar o código do projeto Calc.js desenvolvido nas aulas. Projeto Prático Guiado do módulo anterior, JavaScript II -DOM. Você deverá modularizar o código javascript da aplicação, dividindo o conteúdo do arquivo index.js em diferentes módulos utilizando a sintaxe do ES Modules. O projeto deve conter pelo menos 3 módulos
*/

// click de números   OK
// calculo de números OK