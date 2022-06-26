//Variables and constants declaration
const carrContainer = document.querySelector('.carr-container');
const points = document.querySelectorAll('.point');
let position = 0;

//Collections
const collection1 = [
    {
        pictureID: 1,
        img: './images/c1-img1.jpg'
    },
    {
        pictureID: 2,
        img: './images/c1-img2.jpg'
    },
    {
        pictureID: 3,
        img: './images/c1-img3.jpg'
    },
    {
        pictureID: 1,
        img: './images/c1-img4.jpg'
    }
];

const collection2 = [
    {
        sculptureID: 1,
        img: './images/c2-img1.jpg'
    },
    {
        sculptureID: 2,
        img: './images/c2-img2.jpg'
    },
    {
        sculptureID: 3,
        img: './images/c2-img3.jpg'
    },
    {
        sculptureID: 4,
        img: './images/c2-img4.jpg'
    }
];

points.forEach((point, i) => {
    point.addEventListener('click', () => {
        let calcMove = 0;
        //Restart the position 
        if (position > 3) {
            position = 0;
        }
        //Calculate the space that carrContainer will move
        calcMove = position * -25;
        //Increment the position
        position++;
        //Move carrContainer to show the next image
        carrContainer.style.transform = `translateX(${calcMove}%)`;
        //Change arrows icons styles
        points.forEach((point, i) => {
            point.classList.remove('active');
        });
        points[i].classList.add('active');
    });
});