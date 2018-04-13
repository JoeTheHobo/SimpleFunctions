/*
*	JS SimpleFunctions
*	Created by John Jones (JoeTheHobo)
*	in 04/13/18, though there are older versions made before this one
*/

function get(elem,html,color) {
	
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
		
		return document.getElementsByClassName(newelem);
		
	} else {
		if (html) {
			document.getElementById(newelem).innerHTML = html;
		}
		if (color) {
			document.getElementById(newelem).style.color = color;
		}
	
		return document.getElementById(newelem);
	}
	
}
//EX: get("#id","myHTML").onclick = function() {myFUNCTION()};

function create(elem,html,id,paren,color) {
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
				return (num * 10000 + mum2 * 10000) / 10000;
			}
		};

		
var random = {
	"letter" : function() {
		var alllettersx = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		return alllettersx[sfRandom(26) - 1];
	},
	"coin" : function(a) {
				if (a) {
					if (a == "h") {
						if (sfRandom(2) == 2) {
						return true; 
						} else {
							return false;
						}
					} else {
						if (sfRandom(2) == 2) {
						return false; 
						} else {
							return true;
						}
					}
				} else {
					if (sfRandom(2) == 2) {
						return "heads"; 
					} else {
						return "tails";
					}
				}
			},
	"die" : function(a) {
				if (a) {
					return sfRandom(a);
				} else {
					return sfRandom(6);
				}
			},
	"card" : function() {
				var allcards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
				var allsuits = ["Spade","Heart","Club","Diamond"];
				
				return allsuits[sfRandom(4) - 1] + " " + allcards[sfRandom(13) - 1];
			},
	"shape" : function(a) {
				var basicshapes = ["Triangle","Square","Circle"];
				var complexshapes = ["Triangle","Square","Circle","Rectangle","Oval","Decagon","Hexagon","Pentagon","Octagon","Parallelogram","Ellipse"];
				var threedshapes = ["Cube","Cone","Sphere","Cylinder"];
				var complex3dshapes = ["Cube","Cone","Sphere","Cylinder","Dodecahedron","Octahedron","Tetrahedron","Ellipsoid"];
				
				if (a == "b") {
					return basicshapes[sfRandom(basicshapes.length) - 1];
				}
				if (!a) {
					return basicshapes[sfRandom(basicshapes.length) - 1];
				}
				if (a == "c") {
					return complexshapes[sfRandom(complexshapes.length) - 1];
				}
				if (a == "3d") {
					return threedshapes[sfRandom(threedshapes.length) - 1];
				}
				if (a == "3dc") {
					return complex3dshapes[sfRandom(complex3dshapes.length) - 1];
				}
			},
	"name" : function(a) {
				var girlnames = ["Emma","Olivia","Sophia","Ava","Isabella","Mia","Abigail","Emily","Charlotte","Harper","Madison","Amelia","Elizabeth","Sofia","Evelyn","Avery","Chloe","Ella","Grace","Victoria","Aubrey","Scarlett","Zoey","Addison","Lily","Lillian","Natalie","Hannah","Aria","Layla","Brooklyn","Alexa","Zoe","Penelope","Riley","Leah","Audrey","Savannah","Allison","Samantha","Nora","Skylar","Camila","Anna","Paisley","Ariana","Ellie","Aaliyah","Claire","Violet","Stella","Sadie","Mila","Gabriella","Lucy","Arianna","Kennedy","Sarah","Madelyn","Eleanor","Kaylee","Caroline","Hazel","Hailey","Genesis","Kylie","Autumn","Piper","Maya","Nevaeh","Serenity","Peyton","Mackenzie","Bella","Eva","Taylor","Naomi","Aubree","Aurora","Melanie","Lydia","Brianna","Ruby","Katherine","Ashley","Alexis","Alice","Cora","Julia","Madeline","Faith","Annabelle","Alyssa","Isabelle","Vivian","Gianna"];
				var boynames = ["Noah","Liam","Mason","Jacob","William","Ethan","James","Alexander","Michael","Benjamin","Elijah","Daniel","Aiden","Logan","Matthew","Lucas","Jackson","David","Oliver","Jayden","Joseph","Gabriel","Samuel","Carter","Anthony","John","Dylan","Luke","Henry","Andrew","Isaac","Christopher","Joshua","Wyatt","Sebastian","Owen","Caleb","Nathan","Ryan","Jack","Hunter","Levi","Christian","Jaxon","Julian","Landon","Grayson","Jonathan","Isaiah","Charles","Thomas","Aaron","Eli","Connor","Jeremiah","Cameron","Josiah","Adrian","Colton","Jordan","Brayden","Nicholas","Robert","Angel","Hudson","Lincoln","Evan","Dominic","Austin","Gavin","Nolan","Parker","Adam","Chase","Jace","Ian","Cooper","Easton","Kevin","Jose","Tyler","Brandon","Asher","Jaxson","Mateo","Jason","Ayden","Zachary","Carson","Xavier","Leo","Ezra","Bentley","Sawyer","Kayden","Blake","Nathaniel"];
				if (a == "boy") {
					return boynames[sfRandom(boynames.length) - 1];
				}
				if (a == "girl") {
					return girlnames[sfRandom(girlnames.length) - 1];
				}
				if (!a) {
					if (sfRandom(2) == 2) {
						return boynames[sfRandom(boynames.length) - 1];
					} else {
						return girlnames[sfRandom(girlnames.length) - 1];
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
