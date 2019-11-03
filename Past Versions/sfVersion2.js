//START SIMPLE FUNCTIONS
  
  //START WEB DESIGN
  
  
  function sfCreate(element,text,id,color) {
  	var sfNew = document.createElement(element);
    if (id !== 0) {
    	sfNew.id = id;
    }
	if (text !== 0) {
		sfNew.innerHTML = text;
	}
    if (color) {
    	sfNew.style.color = color;
    }
    document.body.appendChild(sfNew);
  }
  
  function sfDisplay(dispaly,id) {
  display = display.toString();
  id = id.toString();
  	if (display == "h" || display == "hide") {
    	sfgid(id).style.display = "none";
    }
    if (display == "s" || display == "show") {
    	sfgid(id).style.display = "block";
    }
    if (display == "t" || display == "toggle") {
    	if (sfgid(id).style.display == "none") {
          	sfgid(id).style.display = "block";
      } else {
          	sfgid(id).style.display = "none";
      }
    }
  }
  
  //START ART FUNCTION/GAME
  window.sfPxUseSize = 0;
    window.sfPxUseColor = 0;
    window.sfPxSize = 1;
    window.sfPxColor = "black";
    function sfDrawPxDefine(size,color) {
    	if (size !== 0) {
      	sfPxSize = size;
        sfPxUseSize = 1;
      }
      if (color) {
      	sfPxUseColor = 1;
      	sfPxColor = color;
      }
    }
    
    
    function sfDrawPx(id,x,y,size,color) {
    	if (sfConnects) {
      	color = size;
        size = y;
        y = x;
        x = id;
        if (sfPxUseSize == 1) {
        	size = sfPxSize;
        }
        if (sfPxUseColor == 1) {
        	color = sfPxColor;
        }
        y = y * size;
        x = x * size;
        sfDrawBlock(x,y,size,size,color);
      } else {
      	if (sfPxUseSize == 1) {
        	size = sfPxSize;
        }
      	y = y * size;
        x = x * size;
        if (sfPxUseColor == 1) {
        	color = sfPxColor;
        }
        sfDrawBlock(id,x,y,size,size,color);
      }
    }
    function sfDrawBorder(id,size,color) {
    	if (sfConnects) {
      	color = size;
        size = id;
        sfCanWidth = sfGid(sfConnects).width;
        sfCanHeight = sfGid(sfConnects).height;
      	sfDrawBlock("l","t",sfCanWidth,size,color);
        sfDrawBlock("l",sfCanHeight - size,sfCanWidth,size,color);
      	sfDrawBlock("l","t",size,sfCanHeight,color);
      	sfDrawBlock(sfCanWidth - size,"t",size,sfCanHeight,color);

      } else {
      	sfCanWidth = sfGid(id).width;
        sfCanHeight = sfGid(id).height;
      	sfDrawBlock(id,"l","t",sfCanWidth,size,color);
        sfDrawBlock(id,"l",sfCanHeight - size,sfCanWidth,size,color);
      	sfDrawBlock(id,"l","t",size,sfCanHeight,color);
      	sfDrawBlock(id,sfCanWidth - size,"t",size,sfCanHeight,color);
      }
    }
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

function sfRandom(num,z) {
	if (z == 0) {
 		return(Math.floor(Math.random() * (num + 1)));
    } else {
      return(Math.floor(Math.random() * num) + 1);
    }
}
	function sfFindArray(array,item) {
  	var sfneed;
    for (var sfi = -1; sfi < array.length; sfi++) {
    	if (array[sfi] == item) {
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
  function sfDisconnect() {
  	sfConnects = 0;
  }



function sfDebugOpen() {
  	window.sfDebugColor = "black";
    window.sfDebugText = "DEBUG";
  }
  function sfDebugStyle(other,color) {
  	if (other) {
    	sfDebugText = other;
    }
    if (color) {
    	sfDebugColor = color;
    }
  }
  function sfDebug(item,type,name) {
    if (!name) {
      name = "";
    }
    if (type) {
      sfCreate(type,sfDebugText + " " + name + ": " + item,"SFDEBUG");
      sfGid("SFDEBUG",0,sfDebugColor);
    } else {
      console.log("DEBUG" + " " + name + ": " + item,);
    }
  }
  
	//END # FUNCTIONS
