var dots = [];
var cols = 5;
var rows = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// spacing between our grid
	var spacing = windowWidth / cols; // space between dots in grid

	// creating grid - setting x and y up to 5 cols & rows
	for (var y = 0; y < rows; y++) { // for every column
		for (var x = 0; x < cols; x++) { // fill the entire row first
			var ySpace = spacing + y * spacing; 
			var xSpace = spacing/2 + x * spacing; 
			dots.push(new Dot(xSpace, ySpace, 2));
		}
	}

	console.log(dots);
}

function draw() {
	background('white');

	for (var i = 0; i < dots.length; i++) {
		dots[i].display();
	}
}

function Dot(x, y, r) {
	this.x = x; 
	this.y = y; 
	this.r = r;

	this.display = function() {
		fill('green');
		noStroke();
		translate(this.x, 5); 
		ellipse(0, 0, this.r * 2); 
	}
}

// resources: coding train tutorial on plinko challenge