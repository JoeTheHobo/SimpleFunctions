 /*Tutorial
  	Art/Canvas:
    	sfMakeCanvas("id","width","height","color"); 
      - Makes a canvas
    		NOTES:You don't need to put in a color, the basic color is white.
        
      sfDrawBlock("Parent id",xpos,ypos,width,height,"color"); 
      - makes a block connected to the canvas you made
      	NOTES: For "Parent id" put the id of the canvas it is connected to.
        
        	You don't have to write the xpos,ypos,width,and height, Intead write this
          drawBlock("Parent id","fs","color");
          This will make a block that covers the full Canvas.
        
    Numbers/Functions:
    	sfGid("id","innerHTML","color"); 
      - Gets an element with the id you put in
      	NOTES: This is exactly (document.getElementById("id")) - But shorter
        
        	"innerHTML" and "color" are optional. If you want to change the color and not the innerhtml, then in the "innerHTML" type 0. 
          
        
      sfRandom(number,0); 
      - Generates a random number between 1 and your number input.
      	NOTES: You don't need to put the "0", only put it on if you want to 
        generate a random number between 0 and your number input.
        
      sfFindArray(array,"item");
      - Finds the number the item is inside of the array chosen.
      	NOTES: if the item is a number, don't use ""
        
    Webdesign:
    	sfDisplay("s/h/t","id"); 
      - This shows/hides/toggles an element with the id stated.
      	NOTES: "s" means show, it will show the element
        	"h" means hide, it will hide the element
          "t" means toggle, if the element is hidden, it will show it. Also vise versa
          
      sfCreate("ELEMENT","id","text","color");
      - Creates an element with an id and text.
      	NOTES: Make sure the "ELEMENT" section is in all caps. EX: "P" for paragraph
        
        	For the "id" you can put 0, (No "") it will not give it an id.
          
          You don't have to put "color" in the code. Only if you want.
        
      
  */
  
  
  
  //START SIMPLE FUNCTIONS
  //START WEB DESIGN
  
  
  function sfCreate(a,b,c,d) {
  	var sfNew = document.createElement(a);
    if (b !== 0) {
    	sfNew.id = b;
    }
    sfNew.innerHTML = c;
    if (d) {
    	sfNew.style.color = d;
    }
    document.body.appendChild(sfNew);
  }
  
  function sfDisplay(a,b) {
  a = a.toString();
  b = b.toString();
  console.log(a);
  	if (a == "h" || a == "hide") {
    	sfgid(b).style.display = "none";
    }
    if (a == "s" || a == "show") {
    	sfgid(b).style.display = "block";
    }
    if (a == "t" || a == "toggle") {
    	if (sfgid(b).style.display == "none") {
          	sfgid(b).style.display = "block";
      } else {
          	sfgid(b).style.display = "none";
      }
    }
  }
  
  //START ART FUNCTION/GAME
  function sfDrawBlock(a,b,c,d,e,f) {
    var sfCtx = sfGid(a).getContext("2d");
    
    if (b == "fs") {
    	f = c;
      e = sfGid(a).height;
      d = sfGid(a).width;
      c = 0;
      b = 0;
    }
    
    
    sfCtx.fillStyle = f;
    sfCtx.fillRect(b,c,d,e);
  }
  function sfMakeCanvas(a,b,c,d) {
  	var sfmyCanvas = document.createElement("CANVAS");
    sfmyCanvas.id = a;
    sfmyCanvas.width = b;
    sfmyCanvas.height = c;
    console.log("HERE:" + sfmyCanvas);
    document.body.appendChild(sfmyCanvas);
    
    if (d) {
    	sfDrawBlock(a,"fs",d);
    }
  }
  //END
	//START NUMBER FUNCTIONS
   function sfRepeat(func, times, time) {
   if (time){
   time = time * 1000;
   } else {
   time = 0;
   }
    setTimeout(func(),time);
    --times && sfRepeat(func, times);
		}
  
  function sfGid(a,b,c) {
  		console.log(b);
        if (b == 0) { 
        
        } else {
      		document.getElementById(a).innerHTML = b;
        }
      console.log(c);
      if (c) {
      	document.getElementById(a).style.color = c;
      }
      return(document.getElementById(a));
  }

function sfRandom(a,b) {
	if (b == 0) {
 		return(Math.floor(Math.random() * (a + 1)));
    } else {
      return(Math.floor(Math.random() * a) + 1);
    }
}
	function sfFindArray(a,b) {
  	var sfneed;
    for (var sfi = -1; sfi < a.length; sfi++) {
    	if (a[sfi] == b) {
      	sfneed = sfi;
      	break;
      }
    }
    return(sfneed);
  }
	//END # FUNCTIONS
