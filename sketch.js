var dots = [];
var cols = 10;
var rows = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// spacing between our grid
	var spacing_w = (windowWidth/2) / cols; // space between dots in grid
	var spacing_h = (windowHeight/2)/ rows;

	// creating grid - setting x and y up to 5 cols & rows
	for (var y = 0; y < rows; y++) { // for every column
		for (var x = 0; x < cols; x++) { // fill the entire row first
			
			var x_space = 5 + x * spacing_w; 
			var y_space = 5 + y * spacing_h; 

			dots.push(new Dot(x_space, y_space, 2));
		}
	}

	console.log(dots);
}

function draw() {
	background('black');

	for (var i = 0; i < dots.length; i++) {
		dots[i].display();
	}
}

function Dot(x, y, r) {
	this.x = x; 
	this.y = y; 
	this.r = r;

	this.display = function() {
		fill('orchid');
		noStroke(); 
		ellipse(this.x, this.y, this.r * 2); 
	}
}

// resources: coding train tutorial on plinko challenge