var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
  ctx.fillStyle = '#90CAD7';
	ctx.strokeStyle = '#22545F';
	ctx.lineWidth=3;
  ctx.scale(1, 0.9)
  ctx.beginPath();
  ctx.arc(200, 290, 120, 0, 2*Math.PI);
	ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.lineWidth=4;
	ctx.scale(1, 0.6)
	ctx.beginPath();
	ctx.arc(130, 430, 20, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(220, 430, 20, 0, 2*Math.PI);
	ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = '#22545F';
	ctx.scale(0.6, 1)
	ctx.beginPath();
	ctx.arc(210, 258, 9, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(354, 258, 9, 0, 2*Math.PI);
	ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.lineWidth=8;
  ctx.rotate(8 * Math.PI/180);
	ctx.scale(1, 0.3)
	ctx.beginPath();
	ctx.arc(230, 1060, 50, 0, 2*Math.PI);
	ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
	ctx.moveTo(180, 310);
	ctx.lineTo(150, 310);
	ctx.lineTo(180, 250);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = '#396693';
  ctx.strokeStyle = '#262626';
	ctx.save();
	ctx.scale(1, 0.2)
	ctx.beginPath();
  ctx.lineWidth=6;
	ctx.arc(195, 950, 130, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
  ctx.restore();
	ctx.save();
  ctx.scale(1, 0.4)
	ctx.beginPath();
  ctx.lineWidth=5;
	ctx.arc(210, 420, 65, 0, Math.PI);
	ctx.lineTo(145,100);
	ctx.arc(210, 110, 65, Math.PI, 2*Math.PI);
	ctx.lineTo(275,420);
	ctx.fill();
 	ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth=5;
  ctx.arc(210, 103, 65, 2*Math.PI, Math.PI);
	ctx.fill();
  ctx.stroke();
  ctx.restore();
