export default function calculate(){
  const resultInput = document.getElementById('result');
  const input = document.getElementById('input');
  resultInput.value='ERROR';
  resultInput.classList.add('error');

  // só será executada se o eval não retornar erro
  const result = eval(input.value); //simula o Read Eval Print loop
  resultInput.value=result;
  resultInput.classList.remove('error');
}