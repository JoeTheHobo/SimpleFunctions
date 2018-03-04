/*ADD HERE:
  sfNewGame("thisgame");
  sfNewSprite("sprite1","block",10,10,"blue");
  sfSpriteControl("sprite1","WASD")
  sfNewStage("stage1",200,200,"red");
  
  sfGotoStage("stage1");
  sfAddSprite("stage1","sprite1","c","c");
  }*///THis is for testing gaming
  
  
  
  
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
          
          For xpos and ypos you can put "c", that centers the object in the center of the canvas.
          
        
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
      - Finds the number the item is inside of the array chosen. It will return the number the item is located at in the array.
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
  
  
  function sfCreate(element,text,id,color) {
  	var sfNew = document.createElement(element);
    if (id !== 0) {
    	sfNew.id = id;
    }
    sfNew.innerHTML = text;
    if (color) {
    	sfNew.style.color = color;
    }
    document.body.appendChild(sfNew);
  }
  
  function sfDisplay(a,b) {
  a = a.toString();
  b = b.toString();
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
  function sfDrawBlock(a,b,c,d,e,f) {//ID,X,Y,Width,Height,Color,
  	if (sfConnects !== 0) {
    	var sfCtx = sfGid(sfConnects).getContext("2d");
      	f = e;
        e = d;
        d = c;
        c = b;
      	b = a;
      	a = sfConnects;
    } else {
    var sfCtx = sfGid(a).getContext("2d");
    }
    
    if (b == "c") {
    	b = sfGid(a).width/2 - e/2;
    }
    if (c == "c") {
    	c = sfGid(a).height/2 - d/2;
    }
    if (b == "l") {
    	b = 0;
    }
    if (c == "t") {
    	c = 0;
    }
    if (b == "r") {
    	b = sfGid(a).width - e;
    }
    if (c == "b") {
    	c = sfGid(a).height - d;
    }
    
    
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
        if (!b) { 
        
        } else {
      		document.getElementById(a).innerHTML = b;
        }
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
  var sfConnects = 0;
	function sfConnect(id) {
  	sfConnects = id;
  }
  function sfDisconnect(id) {
  	sfConnects = 0;
  }
  
	//END # FUNCTIONS
  
  //TESTING:
  /*function sfAddSprite(pid,id,x,y) {
  	var sfNum = sfFindArray(sfSprites,id);
    if (!sfSpriteX[sfNum]) {
    	sfSpriteX.push(x);
      sfSpriteY.push(y);
    }
    sfDrawBlock(pid,sfSpriteX[sfNum],sfSpriteY[sfNum],sfSpriteWidth[sfNum],sfSpriteHeight[sfNum],sfSpriteColor[sfNum]);
  }
  function sfGotoStage(id) {
  	var sfNum = sfFindArray(sfStages,id);
    sfMakeCanvas(id,sfStageWidth[sfNum],sfStageHeight[sfNum],sfStageColor[sfNum]);
  }
  function sfNewStage(id,width,height,color) {
  	sfStages.push(id);
    sfStageWidth.push(width);
    sfStageHeight.push(height);
    sfStageColor.push(color);
  }
  function sfSpriteControl(id,type) {
  	sfSpriteMove.push(type);
  }
  function sfNewSprite(id,type,width,height,color) {
  	sfSprites.push(id);
    sfSpriteType.push(type);
    sfSpriteWidth.push(width);
    sfSpriteHeight.push(height);
    sfSpriteColor.push(color);
  }
  
  
  
 function sfGame() {
  	var sfGames = [];
    var sfSprites = [];
    var sfSpriteX = [];
    var sfSpriteY = [];
    var sfSpriteType = [];
    var sfSpriteWidth = [];
    var sfSpriteHeight = [];
    var sfSpriteColor = [];
    var sfSpriteMove = [];
    var sfStages = [];
    var sfStageColor = [];
    var sfStageWidth = [];
    var sfStageHeight = [];
  }
  //DON'T NEED
  function sfNewGame(id) {
  	//sfGame();
  	sfGames.push(id);
  }*/
