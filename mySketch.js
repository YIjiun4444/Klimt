function setup() {
	createCanvas(windowWidth, windowHeight - 5);
	background(0);
	rectMode(CENTER)


}

var x1 = 0,
	y1 = 25,
	x2 = 15,
	y2 = 0,
	x3 = 30,
	y3 = 25
var x4 = 15,
	y4 = 0,
	x5 = 30,
	y5 = 25,
	x6 = 45,
	y6 = 0
var w = 30
var rx = 15
var ry = 12


var r = 0
var x = 50,
	  y = 50
var vx = 3,
	  vy = 3




function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
	
	
	X = random(width)
	y = random(height)
	var colorR = map(mouseX,0,width+10,0,205,true)
	var colorR1 = map(mouseX,mouseY,width-20,0,180,true)
	var colorRs =map(mouseX,mouseY,width+60,0,90,true)
	//print(colorR)
	fill(colorR+50,colorR1+80,100)
	stroke(230,210,130)
	strokeWeight(random(0,5));
  ellipse(random(width), random(height), 20, 20);	
  ellipse(random(width), random(height), 10, 20);
	ellipse(random(width), random(height), 20, 10);

	
	
	
	
	
	
	
	

			

	
	colorScheme  = ['#5f9ea0','#daa520','#808000','#ffe761','#ffc72b','#2b5dff','#16cc5f'];
	colorSchemegoldenperiod = ['#fff8d4','#ffde38','#ffd500','#db960b','#ded4ba','##e8aa00','#261c00'];
	
	
	let colorSchemeIndex = int(random(7));
	fill(colorSchemegoldenperiod[colorSchemeIndex])
	triangle(x1, y1, x2, y2, x3, y3);
	
	fill(0);
	stroke(colorScheme[colorSchemeIndex])	
	triangle(x4, y4, x5, y5, x6, y6);
	x1 += w
	x2 += w
	x3 += w
	x4 += w
	x5 += w
	x6 += w


	if (x1, x2, x3 > windowWidth) {
		x1 = 0
		y1 += 25
		x2 = 15
		y2 += 25
		x3 = 30
		y3 += 25
	}

	if (x4, x5, x6 > windowWidth) {
		x4 = 15
		y4 += 25
		x5 = 30
		y5 += 25
		x6 = 45
		y6 += 25

	}

	noStroke()
	fill(100, 0, 0);
	//noS
	rect(rx, ry, 3, 25);
	rx += 30
	if (rx > width) {
		rx = 15
		ry += 25


}

	
		
	
	
	
}