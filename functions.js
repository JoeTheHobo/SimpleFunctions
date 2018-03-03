function drawCanvas(a,b,c,d) {
	var myCanvas = document.createElement("CANVAS");
    myCanvas.height = d;
    myCanvas.width = c;
    document.body.appendChild(myCanvas);  
    var ctx = myCanvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(a,b, c, d);
}
