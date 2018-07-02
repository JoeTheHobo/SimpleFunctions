/*
*	JS SimpleFunctions
*	Created by John Jones (JoeTheHobo)
*	in 07/2/18, though there are older versions made before this one
*	Version 8
*/

function help(func) {
	if (func) {
		if (func == "get") {
			print("---------");
			print("Showing help for the 'get' function.");
			print("");
			print("get(elem,html,color,bgcolor)");
			print("elem: the id or class.");
			print("html: the inner html of the object.");
			print("color: to apply a color to the text");
			print("bgcolor: to apply a background color to the element.");
			print("NOTE: Only elem is needed. Everything else is optional, if you want to apply a color, but not the HTML, put html as 0. You then can ignor the BGCOLOR if you don't want it.");
			print("");
			print("EX:");
			print("get('yourid','hey').style.backgroundColor = 'red'");
			print("");
			print("If you want to do classes instead of ids, here is that example. Notice the '.' in the begining of the classname");
			print("get('.yourclass','hey')[0].style.backgroundColor = 'red'");
			print("NOTE: This is still not that good. The '[0]' is which element to use. Set up a repeat function and go through all your classes to apply your style/other to all elements with the class.");
		}
		if (func == "create") {
			print("---------");
			print("Showing help for the 'create' function.");
			print("");
			print("create(elem,html,id,paren,color)");
			print("elem: The type of element. like p, div, or btn.");
			print("html: the inner html of the object.");
			print("id: give the new element an id");
			print("paren: Where this element is placed. Leave blank if you want it to just go at the end of the body.");
			print("color: to apply a color to the element.");
			print("NOTE: This returns the id, so you can add things to the end of this functions.");
			print("");
			print("EX:");
			print("create('div','yourtext','itsID').style.backgroundColor = 'red'");
		}
	} else {
		print("--------------------------------------");
		print("Showing all functions you may perform:");
		print("");
		print("help(function) - rewrite function to be any of these and it will explain more of that functions.");
		print("");
		print("Often Functions");
		print("---");
		print("get(elem,html,color,bgcolor)");
		print("create(elem,html,id,paren,color)");
		print("repeat(func,times)");
		print("getKey(e)");
		print("keyPressed(key,func)");
		print("isActive(id)");
		print("strtoarr(str,how)");
		print("arrtostr(arr)");
		print("");
		print("Math Functions");
		print("---");
		print("sfMath - Helps a lot with doing math in arrays");
		print("floor(num)");
		print("random(num)");
		print("rnd(num,yes)");
		print("random - Helps if you want a random item/die roll/ card/number");
		print("");
		print("LocalStorage, Saving info Functions");
		print("---");
		print("getPref(variable,prefName,result)");
		print("savePref(variable,prefName)");
		print("");
		print("Artsy Functions");
		print("---");
		print("display - Can hide/show functions");
		print("print(text)");
		print("makeCanvas(id,width,height,color)");
		print("draw - If you want to draw different shapes");
		print("makeGrid(table)");
	}
}

function get(elem,html,color,bgcolor) {
	
	var newelem = "";
	if (elem.charAt(0) == "." || elem.charAt(0) == "#") {
		for (var i = 1; i < elem.length; i++) {
			newelem += elem.charAt(i);
		}
	} else {
		for (var i = 0; i < elem.length; i++) {
			newelem += elem.charAt(i);
		}
	}
	
	
	if (elem.charAt(0) == ".") {
		
		if (html) {
			document.getElementsByClassName(newelem)[0].innerHTML = html;
		}
		if (color) {
			document.getElementsByClassName(newelem)[0].style.color = color;
		}
		if (bgcolor) {
			document.getElementsByClassName(newelem)[0].style.backgroundColor = bgcolor;
		}
		
		return document.getElementsByClassName(newelem);
		
	} else {
		if (html) {
			document.getElementById(newelem).innerHTML = html;
		}
		if (color) {
			document.getElementById(newelem).style.color = color;
		}
		if (bgcolor) {
			document.getElementById(newelem).style.backgroundColor = bgcolor;
		}
	
		return document.getElementById(newelem);
	}
	
}
//EX: get("#id","myHTML").onclick = function() {myFUNCTION()};

function create(elem,html,id,paren,color) {
	if (elem == "btn") {
		elem = "button";
	}
	var newelem = document.createElement(elem);
	newelem.id = id;
	if (html) {
		newelem.innerHTML = html;
	}
	if (paren) {
		get(paren).appendChild(newelem);
	} else {
		document.body.appendChild(newelem);
	}
	
	if (color) {
		get(id,0,color);
	}
	
	if (id) {
		return get(id);
	}
}
//EX: create("p","itame","id",0,"green").style.backgroundColor = "red";

function rnd(num,yes) {
	if ((yes == "y") || (yes == "yes")) {
		return Math.floor(Math.random() * (num + 1));
	} else {
		return Math.floor(Math.random() * num) + 1;
	}
}
//EX: var num = rnd(6); 
//It will return a whole number 1-6

function arrtostr(arr) {
	return arr.toString();
}

function strtoarr(str,how) {
	if (how) {
		return str.split(how);
	} else {
		return str.split(",");
	}
}

function floor(num) {
	return Math.floor(num);
}
//Just the Math.floor Functions but shorter

function random(num) {
	return Math.random() * num;
}
//Just the Math.random function but shorter, and you put the number inside the ()

var display = {
	"hide": function(id) {
		get(id).style.display = "none";
	},
	"h": function(id) {
		get(id).style.display = "none";
	},
	
	"show": function(id) {
		get(id).style.display = "block";
	},
	"s": function(id) {
		get(id).style.display = "block";
	},
	
	"b": function(id) {
		get(id).style.display = "block";
	},
	"block": function(id) {
		get(id).style.display = "block";
	},
	
	"n": function(id) {
		get(id).style.display = "none";
	},
	"none": function(id) {
		get(id).style.display = "none";
	}
	
	
}
//EX: display.show("#yo");
//It will show the element with the id.
//Only works with ids
//You also can do (show,s,hide,h,none,n,block,b)

function repeat(func,times) {
	for (var i = 0; i < times; i++) {
			func();
	}
}
//EX: repeat(function() {console.log("hi")},10);
//It will console.log("hi") ten times.

var sfMath = {
			"avg" : function(list) {
						var sfTotal = 0;
						var kewli = 0;
						repeat(function() {
							sfTotal += list[kewli];
							kewli++;
						},list.length);
						return sfTotal / list.length;
					},
			"total" : function(list) {
						var sfTotal = 0;
						var kewli = 0;
						repeat(function() {
							sfTotal += list[kewli];
							kewli++;
						},list.length);
						return sfTotal;
					},
			"highest" : function(list) {
							var sfHighest = null;
							var kewli = 0;
							repeat(function() {
								if (sfHighest == null) {
									sfHighest = list[kewli];
								} else {
								 if (list[kewli] > sfHighest) {
									sfHighest = list[kewli];
								 }
								}
								
								kewli++;
							},list.length);
							
							return sfHighest;
						},
			"lowest" : function(list) {
							var sfHighest = null;
							var kewli = 0;
							repeat(function() {
								if (sfHighest == null) {
									sfHighest = list[kewli];
								} else {
								 if (list[kewli] < sfHighest) {
									sfHighest = list[kewli];
								 }
								}
								
								kewli++;
							},list.length);
							
							return sfHighest;
						},
			"add" : function(num,num2) {
				return (num * 10000 + num2 * 10000) / 10000;
			}
		};

		
var random = {
	"letter" : function() {
		var alllettersx = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		return alllettersx[0(26) - 1];
	},
	"coin" : function(a) {
				if (a) {
					if (a == "h") {
						if (rnd(2) == 2) {
						return true; 
						} else {
							return false;
						}
					} else {
						if (rnd(2) == 2) {
						return false; 
						} else {
							return true;
						}
					}
				} else {
					if (rnd(2) == 2) {
						return "heads"; 
					} else {
						return "tails";
					}
				}
			},
	"die" : function(a) {
				if (a) {
					return rnd(a);
				} else {
					return rnd(6);
				}
			},
	"card" : function() {
				var allcards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
				var allsuits = ["Spade","Heart","Club","Diamond"];
				
				return allsuits[rnd(4) - 1] + " " + allcards[rnd(13) - 1];
			},
	"shape" : function(a) {
				var basicshapes = ["Triangle","Square","Circle"];
				var complexshapes = ["Triangle","Square","Circle","Rectangle","Oval","Decagon","Hexagon","Pentagon","Octagon","Parallelogram","Ellipse"];
				var threedshapes = ["Cube","Cone","Sphere","Cylinder"];
				var complex3dshapes = ["Cube","Cone","Sphere","Cylinder","Dodecahedron","Octahedron","Tetrahedron","Ellipsoid"];
				
				if (a == "b") {
					return basicshapes[rnd(basicshapes.length) - 1];
				}
				if (!a) {
					return basicshapes[rnd(basicshapes.length) - 1];
				}
				if (a == "c") {
					return complexshapes[rnd(complexshapes.length) - 1];
				}
				if (a == "3d") {
					return threedshapes[rnd(threedshapes.length) - 1];
				}
				if (a == "3dc") {
					return complex3dshapes[rnd(complex3dshapes.length) - 1];
				}
			},
	"name" : function(a) {
				var girlnames = ["Emma","Olivia","Sophia","Ava","Isabella","Mia","Abigail","Emily","Charlotte","Harper","Madison","Amelia","Elizabeth","Sofia","Evelyn","Avery","Chloe","Ella","Grace","Victoria","Aubrey","Scarlett","Zoey","Addison","Lily","Lillian","Natalie","Hannah","Aria","Layla","Brooklyn","Alexa","Zoe","Penelope","Riley","Leah","Audrey","Savannah","Allison","Samantha","Nora","Skylar","Camila","Anna","Paisley","Ariana","Ellie","Aaliyah","Claire","Violet","Stella","Sadie","Mila","Gabriella","Lucy","Arianna","Kennedy","Sarah","Madelyn","Eleanor","Kaylee","Caroline","Hazel","Hailey","Genesis","Kylie","Autumn","Piper","Maya","Nevaeh","Serenity","Peyton","Mackenzie","Bella","Eva","Taylor","Naomi","Aubree","Aurora","Melanie","Lydia","Brianna","Ruby","Katherine","Ashley","Alexis","Alice","Cora","Julia","Madeline","Faith","Annabelle","Alyssa","Isabelle","Vivian","Gianna"];
				var boynames = ["Noah","Liam","Mason","Jacob","William","Ethan","James","Alexander","Michael","Benjamin","Elijah","Daniel","Aiden","Logan","Matthew","Lucas","Jackson","David","Oliver","Jayden","Joseph","Gabriel","Samuel","Carter","Anthony","John","Dylan","Luke","Henry","Andrew","Isaac","Christopher","Joshua","Wyatt","Sebastian","Owen","Caleb","Nathan","Ryan","Jack","Hunter","Levi","Christian","Jaxon","Julian","Landon","Grayson","Jonathan","Isaiah","Charles","Thomas","Aaron","Eli","Connor","Jeremiah","Cameron","Josiah","Adrian","Colton","Jordan","Brayden","Nicholas","Robert","Angel","Hudson","Lincoln","Evan","Dominic","Austin","Gavin","Nolan","Parker","Adam","Chase","Jace","Ian","Cooper","Easton","Kevin","Jose","Tyler","Brandon","Asher","Jaxson","Mateo","Jason","Ayden","Zachary","Carson","Xavier","Leo","Ezra","Bentley","Sawyer","Kayden","Blake","Nathaniel"];
				if (a == "boy" || a == "male") {
					return boynames[rnd(boynames.length) - 1];
				}
				if (a == "girl" || a == "female") {
					return girlnames[rnd(girlnames.length) - 1];
				}
				if (!a) {
					if (rnd(2) == 2) {
						return boynames[rnd(boynames.length) - 1];
					} else {
						return girlnames[rnd(girlnames.length) - 1];
					}
				}
			},
	"color" : function() {
		var chars = "ABCDEF0123456789";
		var use = "";
		repeat(function() {
			use += chars.charAt(rnd(chars.length) - 1);
		},6);
		return "#" + use;
		
	}
};

function getKey(e) {
	var x = e.keyCode;
	var y = String.fromCharCode(x);
	return y;
}

//With saving Vars and such
function getPref(variable,prefName,result) {
	if (localStorage.getItem(prefName) !== null) {
		variable = localStorage.getItem(prefName);
	} else {
		variable = result;
	}
}

function savePref(variable,prefName) {
	var someVarName = variable;
	localStorage.setItem(prefName, someVarName);
}

//Making games easier with
function keyPressed(key,func) {
	document.body.onkeypress = function(e) {
		if (getKey(e) == key) {
			func();
		}
	}
}

//Testing activity
function isActive(id) {
	if (get(id) == document.activeElement) {
		return true;
	} else {
		return false;
	}
}

//Fun new console.log
function print(text) {
	console.log(text);
}



function makeCanvas(id,width,height,color) {
  	var sfmyCanvas = document.createElement("CANVAS");
    sfmyCanvas.id = id;
    sfmyCanvas.width = width;
    sfmyCanvas.height = height;
    
    
    if (color) {
		sfmyCanvas.style.backgroundColor = color;
	}
	
	document.body.appendChild(sfmyCanvas);
 }


 var draw = {
	 "block" : function(a,b,c,d,e,f) {
		 var sfCtx = get(a).getContext("2d");
	   
		
		if (b == "c") {
			b = get(a).width/2 - e/2;
		}
		if (c == "c") {
			c = get(a).height/2 - d/2;
		}
		if (b == "l") {
			b = 0;
		}
		if (c == "t") {
			c = 0;
		}
		if (b == "r") {
			b = get(a).width - e;
		}
		if (c == "b") {
			c = get(a).height - d;
		}
		
		
		if (b == "fs") {
			f = c;
		  e = get(a).height;
		  d = get(a).width;
		  c = 0;
		  b = 0;
		}
		
		
		sfCtx.fillStyle = f;
		sfCtx.fillRect(b + d/2,c + e/2,d,e);
	 },
	 "circle" : function(paren,x,y,radi,color) {
		var ctx = get(paren).getContext("2d");
		ctx.beginPath();
		ctx.arc(x,y,radi,0,2*Math.PI);
		ctx.fillStyle = color;
		ctx.stroke();
		ctx.fill();
	 }
 }
 
 //MAKING A TABLE!
 
 function makeGrid(table) {
		let mgX = 0, mgY = 0, mgWidth, mgHeight, mgBgc, mgId, mgcellHeight, mgcellWidth, mgBorder = 0, mgParent = 0, mgHTML = 0, mgrnd, mgclass;
		
		let i = 0;
		repeat(function() {
			if (table[i] == "x") {
				i++;
				mgX = table[i];
			}
			if (table[i] == "y") {
				i++;
				mgY = table[i];
			}
			if (table[i] == "width") {
				i++;
				mgWidth = table[i];
			}
			if (table[i] == "height") {
				i++;
				mgHeight = table[i];
			}
			if (table[i] == "bgc") {
				i++;
				mgBgc = table[i];
			}
			if (table[i] == "id") {
				i++;
				mgId = table[i];
			}
			if (table[i] == "cellWidth") {
				i++;
				mgcellWidth = table[i];
			}
			if (table[i] == "cellHeight") {
				i++;
				mgcellHeight = table[i];
			}
			if (table[i] == "border") {
				i++;
				mgBorder = table[i];
			}
			if (table[i] == "parent") {
				i++;
				mgParent = table[i];
			}
			if (table[i] == "html") {
				i++;
				mgHTML = table[i];
			}
			if (table[i] == "rnd") {
				i++;
				mgrnd = table[i];
			}
			if (table[i] == "class") {
				i++;
				mgclass = table[i];
			}
			
			
			i++;
		},table1.length);
		
		//CHECKING
			if (mgX == 0) {
				mgX = "x";
			}
			if (mgY == 0) {
				mgY = "y"
			}
		//FINISH CHECKING
		
		//Making the table
		if (mgParent == 0) {
			create("table",0,mgId);
		} else {
			create("table",0,mgId,mgParent);
		}
		
		if (mgBorder !== 0) {
			get(mgId).style.border = mgBorder;
		}
		
		get(mgId).style.borderCollapse = "collapse";
		let x, y = 0;
		repeat(function() {
			let row = get(mgId).insertRow(0);
			x = 0;
			repeat(function() {
			let cell = row.insertCell(0);
			cell.width = mgcellWidth;
			cell.height = mgcellHeight;
			cell.style.backgroundColor = mgBgc;
			cell.id = "x" + mgX + "y" + mgY;
			if (mgHTML == "--/rnd") {
				cell.innerHTML = rnd(mgrnd);
			} else {
				cell.innerHTML = mgHTML;
			}
			if (mgclass) {
				cell.className = mgclass;
			}
			
			x++;
			},mgWidth);
			y++;
		},mgHeight);
		
	}
	
	/*EXAMPLE:
	let table1 = [
		"x","ex",
		"y","why",
		"cellHeight",20,
		"cellWidth",20,
		"width",10,
		"height",10,
		"bgc","green",
		"id","main",
		"border","5px solid black",
		"parent","yo",
		"html","--/rnd",
		"rnd",6,
		"class","so",
	];

	makeGrid(table1);
	*/
