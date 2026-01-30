// JavaScript source code
var id = null;

function Move() 
{
    const elem = document.getElementById("animation");
    var x_pos = 0;
    var y_pos = 0;
    var x_shift = 1;
    var y_shift = 1;
    clearInterval(id);
    let interval = document.getElementById("interval").value;
    id = setInterval(frame, interval);

    let sizeFont = document.getElementById("size_font").value;
    elem.style.fontSize = sizeFont + "px";
        function frame() 
        {
        x_pos += x_shift;
        y_pos += y_shift;
        elem.style.top = x_pos + 'px';
        elem.style.left = y_pos + 'px';
        if (x_pos === 0) x_shift = 1;
        if (x_pos === document.documentElement.clientHeight - 50) x_shift = -1;
        if (y_pos === 0) y_shift = 1;
        if (y_pos === document.documentElement.clientWidth - 150) y_shift = -1;
    }
}
function addLeadingZero(number)
{
    return number < 10 ? "0" + number:number;
}
document.body.onload = function tick_timer()
{
    let time = new Date();

   document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
   document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
   document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

   setTimeout(tick_timer, 100);
}