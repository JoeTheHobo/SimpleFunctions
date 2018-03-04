# SimpleFunctions
Making JavaScript easier.

Welcome to "Simple Functions", where we take big functions, and simplify them.
In this document I'll explain what all the functions do and how to use them. Lets start off with 

BASIC FUNCTIONS
	sfRepeat(Func, Times); 
		- This functions repeats whatever Function you told it to repeat. It will repeat "Times" times.
		- Example,
			sfRepeat(function() {console.log("here"},10);
				- This will do Console.log("here") ten times.
	
	sfRandom(num,z);
		- This will generate a whole number from 1-Num.
		- "z" checks if you want to start at 1 or 0. NOTE: You don't have to put this part in.
		-Example,
			sfRandom(10);
				-This will return a random number 1-10.
			sfRandom(10,0);
				-This will return a random number 0-10.
				
	sfFindArray(array,item);
		-This will return the number "item" is inside an array.
		-Example,
			var animals = ["cats","monkey","dog","lion"];
			sfFindArray(animals,"dog");
				-This will return the number 2.
				-NOTE: Arrays always start at number 0.
				
WEB DESIGN FUNCTIONS
	sfCreate("ELEMENT","innerHTML","id","color");
		-This will create an element with text, an id, and color!
		-"ELEMENT" is required to put in. You can put 0 in for innerHTML or id. That will ignor that part. Just ignor color if you don't want color.
		-Example,
			sfCreate("P","Hello World","me","red");
				-This will create a <p id="me" style="color:red">Hello World</p>
			sfCreate("BUTTON","Press Me");
				-This will create <button>Press Me</button>
				
	sfDispaly("display","id");
		-This will show/hide an element with the id.
		-Stuff you can type in "display" are ,
		"s" or "show". This will show an object.
		"h" or "hide". This will hide an object.
		"t" or "toggle" If the element is hidden, it will show. If the element is showing it will hide.
		Example,
			<p id="me">Hide me</p>
			<button onclick="sfDisplay('h','me');
				-This will Hide the <p> text.
				
ART FUNCTIONS
	sfMakeCanvas("id",width,height,"color");
		-This will create a canvas with the id given. It will be your height and width with your color.
		You can leave color blank if you want. It will auto color white.
		Example,
			sfMakeCanvas("me",200,200,"red");
				-This will make a 200x200 red canvas with id "me".
				
	sfDrawBlock("Parent Id",xpos,ypos,width,height,"color");
		-This will make a block inside a canvas.
		Make sure the "Parent Id" is the id of a canvas you have made.
		For Xpos you are able to write the following:
			A number, this is where you want it.
			"c", This will be in the center of the canvas.
			"l", This will be the left of a canvas.
			"r", this will be the right of a canvas.
		For Ypos you are able to write the following:
			A number, this is where you want it.
			"c", This will be in the center of the canvas.
			"t", This will be the top of the canvas.
			"b", This will be the bottom of a canvas.
		Example, 
			sfMakeCanvas("me",200,200,"red");
			sfDrawBlock("me","c","c",50,50,"blue");
				-Creates a 50x50 blue block in the center of the canvas.
			
