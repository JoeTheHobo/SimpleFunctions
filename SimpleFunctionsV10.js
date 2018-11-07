window.F = false;
window.T = true;

function $(ele) {
	let set = true;
	switch(ele.charAt(0)) {
		case '.':
			set = false;
			return document.querySelectorAll(ele);
		case '#':
			set = false;
			return document.querySelectorAll(ele)[0];
		case '<':
			set = false;
			ele = ele.cut(0);
			if (ele.charAt(ele.length - 1) == '>') {
				ele = ele.cut(ele.length - 1);
			}
			return document.querySelectorAll(ele);
	}
	if (set) {
		return document.querySelectorAll('#' + ele)[0];
	}
}
function mV(vars, res) {
	let arr = vars.toArray(' ');
	for (let i = 0; i < arr.length; i++) {
		eval('window.' + arr[i] + ' = res');
	}
}
function rnd(num,num2) {
	if (num2) return Math.floor(Math.random() * (num2 - num + 1)) + num;
	else return Math.floor(Math.random() * num) + 1;
}
function TsF(vari) {
	if (vari) return false;
	else return true;
}

function create(elem) {
	let ele = document.createElement(elem);
	document.appendChild(ele);
	return ele;
}
String.prototype.letters = function(first,last) {
	let a = "";
	for (var i = 0; i < this.length; i++){
		if (i >= first && i <= last)
			a += this.charAt(i);
	}
	return a;
}
Object.prototype.Rows = function(rows) {
	this.rows = rows;
	return this;
}
Object.prototype.Cols = function(cols) {
	this.cols = cols;
	return this;
}
Object.prototype.Placeholder = function(txt) {
	this.placeholder = txt;
	return this;
}
Object.prototype.$P = function(x = 1) {
	let a = this
	for (var i = 0; i < x; i++) {
		a = a.parentNode;
	}
	return a;

}
Object.prototype.addBR = function() {
	this.$P().create('br');
	return this;
}
Object.prototype.ss = function(left,right) {
	eval('this.style.' + left + '=' + '"' + right + '"');
	return this;
}
Object.prototype.ID = function(id) {
	this.id = id;
	return this;
}
Object.prototype.CLASS = function(classn) {
	this.className = classn;
	return this;
}
Object.prototype.create = function(elem) {
	let ele = document.createElement(elem);
	this.appendChild(ele);
	return ele;
}
Object.prototype.ONCLICK = function(func) {
	this.addEventListener('click',func);
	return this;
}
Object.prototype.$ = function(ele) {
	let set = true;
	switch(ele.charAt(0)) {
		case '.':
			set = false;
			return this.querySelectorAll(ele);
		case '#':
			set = false;
			return this.querySelectorAll(ele)[0];
		case '<':
			set = false;
			ele = ele.cut(0);
			if (ele.charAt(ele.length - 1) == '>') {
				ele = ele.cut(ele.length - 1);
			}
			return this.querySelectorAll(ele);
	}
	if (set) {
		return this.querySelectorAll('#' + ele)[0];
	}
}
Object.prototype.html = function(html) {
	if (this.tagName == 'INPUT' || this.tagName == 'TEXTAREA') {
		this.value = html;
	} else this.innerHTML = html;
	return this;
}
Object.prototype.show = function(what = 'block') {
	this.style.display = 'block';
	return this;
}
Object.prototype.hide = function() {
	this.style.display = 'none';
	return this
}
Object.prototype.centerX = function() {
	this.style.marginLeft = -(trimStyle(this.style.width,true) / 2) + 'px';
	return this;
}
Object.prototype.centerY = function() {
	this.style.marginTop = -(trimStyle(this.style.height,true) / 2) + 'px';
	return this;
}


Array.prototype.rnd = function() {
	return this[rnd(this.length) - 1];
}
Array.prototype.remove = function(num) {
	this.splice(num,1);
 	return this;
}
Array.prototype.tostr = function(how) {
	return this.toString();
}
Array.prototype.total = function(tot = 0) {
	for (var i = 0; i < this.length; i++) {
		tot += this[i];
	}
	return tot;
}
Array.prototype.avg = function() {
	return this.total() / this.length;
}
Array.prototype.highest = function(high = null) {
	for (var i = 0; i < this.length; i++) {
		if (high == null)
			high = this[i];
		else {
			if (this[i] > high)
				high = this[i];
		}
	}
	return high;
}
Array.prototype.lowest = function(low = null) {
	for (var i = 0; i < this.length; i++) {
		if (low == null)
			low = this[i];
		else {
			if (this[i] < low)
				low = this[i];
		}
	}
	return low;
}
Array.prototype.cut = function(num, toNum = num) {
	let newArr = [];
	for (var i = 0; i < this.length; i++) {
		if (i >= num && i <= toNum) {
			
		} else newArr.push(this[i]);
	}
	return newArr;
}



String.prototype.far = function(find,replace) {
	return this.split(find).join(replace);
}
String.prototype.rnd = function() {
	return this.charAt(rnd(this.length) - 1);
}
String.prototype.cut = function(num,toNum = num) {
	let newStr = "";
	for (var i = 0; i < this.length; i++) {
		if (i >= num && i <= toNum) {
			
		} else newStr += this.charAt(i);
	}
	return newStr;
}
String.prototype.toArray = function(how) {
	if (how) {
		return this.split(how);
	}else
		return this.split(",");
}
String.prototype.reverse = function() {
	let a = "";
	for (var i = this.length; i > -1; i--) {
		a += this.charAt(i);
	}
	return a;
}


function toJSON(obj) {
	return JSON.stringify(obj);
}
function toJS(obj) {
	return JSON.parse(obj);
}
function readFile(file,func) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			func(toJS(xhttp.responseText));
		}
	}
	xhttp.open("GET",file,true);
	xhttp.send();
}

console.slog = (txt) => {
	let texts = [];
	let addons = [];
	let text = '';
	let prev = false;
	for (var i = 0; i < txt.length; i++) {
		if (txt.charAt(i) == '.' && txt.charAt(i + 1) == '[') {
			if (prev) {
				texts.push(text);
				text = '';
			}
			i += 2;
			let add = '';

			for (var j = i; j < txt.length; j++) {
				if (txt.charAt(j) == ']') {
					addons.push(add);
					i = j;
					j = txt.length;
				} else {
					add += txt.charAt(j);
				}
			}
			prev = true;
		} else {
			text += txt.charAt(i);
		}
	}
	texts.push(text);

	let string = 'console.log(';
	for (var i = 0; i < texts.length; i++) {
		string += ' "%c' + texts[i] + '" +';
	}
	string = string.substring(0, string.length - 1);
	string += ',';
	let numAdd = 0;
	if (addons == 0)
		numAdd = 1;
	for (var i = 0; i < addons.length + numAdd; i++) {
		string += ' "' + addons[i] + '",';
	}		
	string = string.substring(0, string.length - 1);
	string += ')';
	eval(string);
}
console.error = (text = '') => {
	console.slog('.[background: red; font-weight: bold] ERROR: .[background: red;]' + text);
}
console.warn = (text = '') => {
	console.slog('.[background: yellow; font-weight: bold] WARNING: .[background: yellow]'+text);
}
console.debug = (text = '') => {
	console.slog('.[background: orange; font-weight: bold] DEBUG: .[background: orange]'+text);
}




let time = {
	
	second: function() {
		let date = new Date;
		return date.getSeconds();
	},
	minute: function() {
		let date = new Date;
		return date.getMinutes();
	},
	hour: function() {
		let date = new Date;
		return date.getHours();
	},
	year: function() {
		let date = new Date;
		return date.getFullYear();
	},
	month: function() {
		let date = new Date;
		let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		return months[date.getMonth()];
	},
	day: function() {
		let date = new Date;
		return date.getDate();
	},
	dayOfWeek: function() {
		let date = new Date;
		let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		return days[date.getDay()];
	},
	millisecond: function() {
		let date = new Date;
		return date.getMilliseconds();
	},
	daysInMonth: function(month) {
		var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if( (new Date(time.year, 1, 29)).getDate() == 29 ) days_in_month[1] = 29;
		if (isString(month)) {
			let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
			return days_in_months[months.indexOf(month)]
		} else {
			return days_in_months[month];
		}
	},
	daysInMonths: function() {
		var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if( (new Date(time.year, 1, 29)).getDate() == 29 ) days_in_month[1] = 29;
		return days_in_months;
	}	
}
function wait(milliseconds) {
  milliseconds = milliseconds * 1000;
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function isString(string) {
	if (typeof string === 'string' || string instanceof String)
		return true
	else
		return false
}




function trimStyle(string,also) {
	if (also)
		return Number(string.cut(string.length - 1).cut(string.length - 2));
	else
		return string.cut(string.length - 1).cut(string.length - 2);
}	







let pref = {
	save: function(variable,prefName,hiddenTag = ":!>@") {
		if (!Array.isArray(variable)) {
			if (typeof variable === 'object') {
				localStorage.setItem(prefName, ':!>O' + toJSON(variable));
			} else localStorage.setItem(prefName, variable);
		} else {
			let toSet = "";
			for (var i = 0; i < variable.length; i++) {
				toSet += variable[i] + hiddenTag;
			}
			localStorage.setItem(prefName, toSet);
		}
	},
	get: function(prefName, result = null, hiddenTag = ":!>@") {
		if (localStorage.getItem(prefName) !== null) {
			if (localStorage.getItem(prefName).includes(hiddenTag)) {
				toGive = localStorage.getItem(prefName).split(hiddenTag);
				return toGive;
			} else {
				if (localStorage.getItem(prefName).letters(0,3) == ':!>O') {
					return toJS(localStorage.getItem(prefName).cut(0,3));
				} else return localStorage.getItem(prefName);
			}
		} else {
			return result;
		}
	},
	delete: function(prefName,type = 'one') {
		switch(type) {
			case "all":
				localStorage.clear();
				break;
			case "one":
				localStorage.removeItem(prefName);
				break;
		}
	},
	clear: function() {
		localStorage.clear();
	},
	log: function() {
		console.log('----------');
		console.log("All Prefs:");
		console.log(" ");
		for (var i = 0; i < localStorage.length; i++) {
			console.slog('.[color: darkred]' + localStorage.key(i) + " = .[color: black]" + pref.get(localStorage.key(i)))
			console.log(pref.get(localStorage.key(i)));
		}
		console.log('----------');
	},
	
}

let crc = {
	open: function(opt) {
		document.body.create('div').className = 'cmbox';
		let menu = $('.cmbox')[0];
		menu.style.width = '300px';
		menu.style.background = 'white';
		menu.style.boxShadow = '1px 1px 5px 1px grey';
		menu.style.position = 'fixed';
		menu.style.zIndex = '999';
		menu.style.display = 'none';
		document.body.create('div').className = 'cmhider';
		let hider = $('.cmhider')[0];
		hider.style.width = '100%';
		hider.style.height = '100%';
		hider.hide();
		hider.style.zIndex = '998';
		hider.style.position = 'fixed';
		hider.onclick = function() {
			menu.hide();
			hider.hide();
		}
		
		if (!$('<style>')[0]) document.head.create('style');
		$('<style>')[0].innerHTML += '.cmsidebar { width: 300px; background: white; margin-top: -25px; margin-left: 300px; box-shadow: 1px 1px 5px 1px grey; position: fixed; display: none;  }';
		$('<style>')[0].innerHTML += '.cmchild { margin-left: 25px; padding-top: 5px;}';
		$('<style>')[0].innerHTML += '.cmholder { height: 25px; font-size: 14px; width: 100%; cursor: pointer; user-select: none; } .cmholder:hover { background: #eee; }';
		$('<style>')[0].innerHTML += '.cmbr { width: 100%; height: 20px; }';
		$('<style>')[0].innerHTML += '.cmsbr { width: 100%; height: 5px; }';
		$('<style>')[0].innerHTML += '.cmbar { width: 100%; height: 10px; margin-top: 10px; border-top: 1px solid #ddd;}';

		window.oncontextmenu = function (e) {
			menu.show();
			hider.show()
			menu.style.left = e.clientX + 'px';
			menu.style.top = e.clientY + 'px';
			return false;     // cancel default menu
		}
		if (opt) crc.options(opt);
	},
	options: function(opt,parent = $('.cmbox')[0]) {
		let menu = parent;
		menu.html('');
		menu.create('div').CLASS('cmsbr');
		for (var i = 0; i < opt.length; i++) {
			if (opt[i].charAt(0) == '<') {
				switch(opt[i]) {
					case '<br>':
						menu.create('div').CLASS('cmbr');
						break;
					case '<bar>':
						menu.create('div').CLASS('cmbar');
						break;
					case '<tab>':
						let a = menu.create('div').CLASS('cmholder');
						a.create('div').CLASS('cmchild').html(opt[i + 1]);
						let b = a.create('div').CLASS('cmsidebar');
						crc.options(opt[i + 2],b);
						a.onmouseover = function() {
							b.show();
						}
						a.onmouseout = function() {
							b.hide();
						}
						i++;
						i++;
						break;
				}
			} else  {
				let a = menu.create('div').CLASS('cmholder');
				a.create('div').CLASS('cmchild').html(opt[i]).$P().ONCLICK(opt[i + 1]);
				a.ONCLICK(function() {
					$('.cmbox')[0].hide();
					$('.cmhider')[0].hide();
				});

				i++;
				

			}
		}
		menu.create('div').CLASS('cmsbr');
	}
}
