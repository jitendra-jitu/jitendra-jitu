const dragon = document.getElementById('dragon');
const obstacle = document.getElementById('obstacle');

function jump() {
  if (!dragon.classList.contains('jump')) {
    dragon.classList.add('jump');
    setTimeout(() => dragon.classList.remove('jump'), 500);
  }
}

document.addEventListener('keydown', jump);

const checkCollision = setInterval(() => {
  const dragonBottom = parseInt(window.getComputedStyle(dragon).getPropertyValue('bottom'));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

  if (obstacleLeft < 90 && obstacleLeft > 50 && dragonBottom <= 50) {
    alert('Game Over!');
    clearInterval(checkCollision);
  }
}, 10);
