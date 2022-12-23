let userInput = document.getElementById('userInput'); //grabbing form
let box = document.getElementById('box'); //grabbing box

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.constructPoint();
    }

    constructPoint() {
        let circle = document.createElement('div');
        circle.classList.add('circle');

        circle.style.bottom = `${this.x}px`;
        circle.style.left = `${this.y}px`;
        //inputting the coordinates into the css

        box.appendChild(circle);
        //appending circle to parent of box 
    }
}

const wait = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const initialSetup = () => {
    const points = [];

    let p1 = new Point(100, 50) //top
    let p2 = new Point(100, 400) //left
    let p3 = new Point(400, 250) //right

    points.push(p1, p2, p3);

    return points;
}

let points = initialSetup();

userInput.addEventListener('submit', async e => { //e means event - when you press submit
    e.preventDefault() // prevents - refresh the page so you don't lose the values 
    let x
    let y 
    let currentPoint

    //code to validate user input e.g. max & min use a loop

    x = e.target.xco.value; //targeting the userInput form
    y = e.target.yco.value; //xco & yco values

    if ((x < 455 && x > 0) && (y < 565 && y > 0)) {
        //checking that the input is within the board dimensions
        //don't need to check for integer as input type=number

        currentPoint = new Point(x, y)
        
    } else {
        alert('please enter a valid co-ordinate');
    }

    while (true) {
        await wait(100);

        let randPoint = points[Math.floor(Math.random()*points.length)];

        let xDist = (randPoint.x + currentPoint.x) /2;
        let yDist = (randPoint.y + currentPoint.y) /2;

        currentPoint = new Point(xDist, yDist);
    }
})
