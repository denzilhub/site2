var canvas,ctx,w,h, colorLine = "#000" ,widthLine = 5;
function init () {
	canvas = document.getElementById("canvas");
	w = canvas.width;
	h = canvas.height;
	flag = 0;
	ctx = canvas.getContext('2d');
	ctx.strokeRect(0,0,w,h);

	canvas.addEventListener("mousedown",function(event){
		ctx.beginPath();
		ctx.moveTo(event.offsetX,event.offsetY);
		flag = 0;
		canvas.addEventListener("mousemove",function(event){
			if (flag == 0){
				ctx.lineTo(event.offsetX,event.offsetY);
				ctx.strokeStyle = colorLine;
				ctx.lineWidth = widthLine;
				ctx.stroke();
			}
			canvas.addEventListener("mouseup",function(event){
				flag = 1
			},false);
		},false);
	},false);

	/*choice of colors*/
	var colors = $("#wrapper span"), aktualColor = $(".aktual-color");
	aktualColor.css({"background-color": "#000"});
	colors.click(function(){
		var thisColor = $(this).css("background-color");
		colorLine = thisColor;
		aktualColor.css({"background-color": thisColor});
	});

	var aktualWidth = $ (".aktual-line-width span");
	var plus = $("#plus");
	var minus = $("#minus");
	plus.click(function(e){
		e.preventDefault();
		widthLine += 1;
		aktualWidth.text(widthLine + "px");
	});

	minus.click(function(e){
		e.preventDefault();
		widthLine -= 1;
		aktualWidth.text(widthLine + "px");
	});

}