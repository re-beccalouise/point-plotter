let userInput = document.getElementById('userInput'); //grabbing form
let box = document.getElementById('box'); //grabbing box


userInput.addEventListener('submit', e => { //e means event - when you press submit
    e.preventDefault() // prevents - refresh the page so you don't lose the values 

    let x
    let y 
    let xTrue
    let yTrue

    //code to validate user input e.g. max & min use a loop

    x = e.target.xco.value; //targeting the userInput form
    y = e.target.yco.value; //xco & yco values

    if ((x < 455 && x > 0) && (y < 565 && y > 0)) {
        xTrue = true;
        yTrue = true;
        //checking that the input is within the board dimensions
        //don't need to check for integer as input type=number

    } if (yTrue && xTrue === true) { 
        //if both coordinates are valid, create point & plot
        let circle = document.createElement('div');
        circle.classList.add('circle');

        circle.style.bottom = `${x}px`;
        circle.style.left = `${y}px`;
        //inputting the coordinates into the css

        box.appendChild(circle);
        //appending circle to parent of box 
    } else {
        alert('please enter a valid co-ordinate');
    }
});

//e holds all info on what has happened e.g target html, alt key pressed, type etc

