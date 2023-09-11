let calculation = localStorage.getItem('calculation') || '';

updateText();
function UpdateCalculation(value){
  calculation += value
  updateText();
  localStorage.setItem('calculation', calculation);
}
function updateText(){
  document.querySelector('.js-message').innerHTML = calculation;
}