// Variables and constants declaration
const carrContainer = document.querySelector('.carr-container');
const points = document.querySelectorAll('.point');
const carrImg = document.querySelector('.carr-img');
const arrows = document.querySelectorAll('.arrow');
let position = 0;
let position1 = 0;

// Function to move the div horizontally
function moveCarr(element, pos) {
  let calcMove = 0;
  // Calculate the space that carrContainer will move
  calcMove = pos * -25;
  // Move carrContainer to show the next image
  element.style.transform = `translateX(${calcMove}%)`;
}

// Function to change arrows icons styles
function activeArrows(points, i) {
  points.forEach((point) => {
    point.classList.remove('active');
  });
  points[i].classList.add('active');
}

points.forEach((point, i) => {
  point.addEventListener('click', () => {
    // Restart the position
    if (position > 3) {
      position = 0;
    }
    moveCarr(carrContainer, position);
    activeArrows(points, i);
    position += 1;
  });
});

arrows.forEach((arrow, i) => {
  arrow.addEventListener('click', () => {
    // Restart the position
    if (position1 > 3) {
      position1 = 0;
    }
    moveCarr(carrImg, position1);
    activeArrows(arrows, i);
    position1 += 1;
  });
});