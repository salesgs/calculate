export  function eventButton(element){
  const input = document.getElementById('input');
  const value = element.dataset.value;
  input.value += value; //colocando valor no input
  return input;
}