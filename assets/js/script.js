//Game instructions modal overlay
$(document).ready(function(){

  $('#instructions').click(function(){
    $('.modalOverlay, .modalContent').addClass('active');
  });
  $('#close, .modalOverlay').click(function(){
    $('.modalOverlay, .modalContent').removeClass('active');
  });

});

//Game selectors
const score = document.querySelector('.score span');
const time = document.querySelector('time span');
const blocks = document.querySelectorAll('.blocks');
const startButton = document.querySelector('.buttons #start');
const resetButton = document.querySelector('.buttons #reset');

//Initial score
let points = 0;

//Hide start button on click and display reset button
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  resetButton.style.display = 'inline-block';

  //Hide reset button on click and display start button
  resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none';
    startButton.style.display = 'inline-block';
  });
});