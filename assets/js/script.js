// Game instructions modal overlay
$(document).ready(function(){

  $('#instructions').click(function(){
    $('.modalOverlay, .modalContent').addClass('active');
  });
  $('#close, .modalOverlay').click(function(){
    $('.modalOverlay, .modalContent').removeClass('active');
  });

});

// Game selectors
const score = document.querySelector('.score span');
const time = document.querySelector('.time span');
const blocks = document.querySelectorAll(".block");
const startButton = document.querySelector('.buttons #start');
const resetButton = document.querySelector('.buttons #reset');

// Initial score
let points = 0;

// Hide start button on click and display reset button
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  resetButton.style.display = 'inline-block';

  // Initial game time
  let remainingTime = 10;

  // Update time and score on the page
  time.innerHTML = remainingTime;
  score.innerHTML = points;

  // Start game
  const startGame = setInterval(() => {
    let arrayNumber = Math.floor(Math.random() * 12);
    let currentBlock = blocks[arrayNumber];

    // Change blocks div text to bug icon
    currentBlock.innerHTML = `<p><i class="fa-solid fa-bug"></i></p>`;

    // Add points when user clicks on div containing bug icon
    for(let i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener('click', () => {
        if (blocks[i].innerHTML.includes('<i class="fa-solid fa-bug"></i>')) {
          points++;
          score.innerHTML = points;
          blocks[i].innerHTML = '&lt;/&gt;';
        }
      });
    }

    // After 2 seconds remove bug icon
    setTimeout(() => {
      currentBlock.innerHTML = `<p>&lt;/&gt;</p>`;
    }, 2000);
  }, 3000);

  // Decrement game time every second
  const timeInterval = setInterval(() => {
    remainingTime--;
    time.innerHTML = remainingTime;
    if (remainingTime === 0) {
      alert(`GAME OVER! Your score is ${points}`);

      clearInterval(startGame);
      clearInterval(timeInterval);
    }
  }, 1000);

  //Hide reset button on click and display start button
  resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none';
    startButton.style.display = 'inline-block';

    // Reset time and score
    points = 0;
    remainingTime = 10;
    time.innerHTML = remainingTime;
    score.innerHTML = points;
  });
});