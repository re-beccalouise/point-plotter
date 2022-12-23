// elements up here document.getElementById ()

let xCo = document.getElementById('xco');
let yCo = document.getElementById('yco');
let createPoint = document.getElementById('createPoint');
let dimensions = document.getElementById('box');
let newPoint = document.getElementById('circle');

createPoint.addEventListener('click')


function main() {
    console.log(xCo);
}

// let userInputX = 
// let userInputY = 

class Point {
    constructor(x, y) {
        // console.log('coordinates', x, y);
        this.xPos = x;
        this.yPos = y;
    }

    constructPoint () {
        //create elements for point
    }

    addPoint () {
        // console.log('coordinates', this.xPos, this.yPos);
        // newPoint.style.backgroundColor = 'black';
        newPoint.style.bottom = `${this.xPos}px`;
        newPoint.style.left = `${this.Pos}px`;
    }
}

const point1 = new Point(`${xCo}, ${yCo}`);

point1.addPoint();


//addEventListener 

// when the user clicks add point, the values are taken in from input and run through
// an add to dom function to create a circle witin the box 