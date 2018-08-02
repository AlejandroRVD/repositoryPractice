var totext = document.getElementById('textbox');
var tobutton = document.getElementById('buttonlines');
tobutton.addEventListener("click" , clickdrawing);

var select = document.getElementById("ToDraw");
var ToDo = select.getContext("2d");

function Draw (color , xini , yini , xfin , yfin)
{
  ToDo.beginPath();
  ToDo.strokeStyle = color;
  ToDo.moveTo(xini,yini);
  ToDo.lineTo(xfin,yfin);
  ToDo.stroke();
  ToDo.closePath();
}

function clickdrawing ()
{
  var lines = parseInt(totext.value);
  var start = 0;
  var xin , yfi;
  for(start = 0; start <= lines; start++)
  {
    Draw ("Red" , xin , 0 , 300 , yfi);
    // console.log(xin);
    // console.log(start);
    xin = start * (select.width / lines);
    yfi = (select.width / lines) * (start + 1);
  }
}
