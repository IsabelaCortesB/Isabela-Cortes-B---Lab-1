let canvas;

let URL1 = 'https://randomuser.me/api/';
let URL2 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let URL3 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let URL4 = 'https://dog.ceo/api/breeds/image/random';
let URL5 = 'https://catfact.ninja/fact';

let isFetched1 = undefined;
let isFetched2 = undefined;
let isFetched3 = undefined;
let isFetched4 = undefined;
let isFetched5 = undefined;



function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    button1 = createButton('Random User');
    button1.position(300,600);

    button2 = createButton('Current price');
    button2.position(500,600);

    button3 = createButton('Data USA')
    button3.position(700,600);
   
    button4 = createButton('Dog')
    button4.position(900,600);
    
    button5 = createButton('Cat Fact')
    button5.position(1100,600);
    

}
function draw() {
    background(0, 50);
    newCursor();
    
    fill(255)

    if (isFetched1 !== undefined) {
        text(`Hi, my name is ${isFetched1} dolares.`, 300, 200, 600)
        
    }

    if (isFetched2 !== undefined) {
        text(`El precio del Bitcoin es ${isFetched2} dolares.`, 300, 300, 400)
    }

    if (isFetched3 !== undefined) {
        text(` Nation : ${isFetched3[0]}, Population : ${isFetched3[1]} , Year : ${isFetched3[2]}`, 300, 400, 500)
        
    }

    if (isFetched4 !== undefined) {
        image(isFetched4, 800, 80, 400, 400)
    }

    if (isFetched5 !== undefined) {
        text(`Cat fact: ${isFetched5}.`, 300, 500, 500)
    }
}

function mousePressed(){

    //Put here your fetch functions
    button1.mousePressed(() =>{
        console.log('1');
        fetch(URL1)
            .then(response => response.json())
            .then(data => {
                isFetched1 =  data.results[0].name.first 
            })
    });

    button2.mousePressed(() =>{
        console.log('2');
        fetch(URL2)
            .then(response => response.json())
            .then(data => {
                isFetched2 =  data.bpi.USD.rate
                console.log(isFetched2) 
            })
    });

    button3.mousePressed(() =>{
        console.log('3');
        fetch(URL3)
            .then(response => response.json())
            .then(data => {
                isFetched3 = [data.data[0].Nation , data.data[0].Year ,  data.data[0].Population]
            })
    });

    button4.mousePressed(() =>{
        console.log('4');
        fetch(URL4)
            .then(response => response.json())
            .then(data => {
                isFetched4 =  loadImage(data.message)
            })
    });

    button5.mousePressed(() =>{
        console.log('5');
        fetch(URL5)
            .then(response => response.json())
            .then(data => {
                isFetched5 = data.fact
            })
    });

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}