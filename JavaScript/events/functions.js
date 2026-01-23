// JavaScript source code
function setImage()
{
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("photo").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
function setBackground()
{
    let color_tool = document.getElementById('choose-color');
    let color = color_tool.value;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = color;
    document.getElementById('color-sample').style.backgroundColor = inverse_color;
    document.getElementById('color-sample').style.width = "200px";
    document.getElementById('color-sample').style.height = "200px";
}
function switchBackground()
{
    //let target = document.getElementById("switch-background").src;
    //let path = target.split('/');
    //let file = path[path.length - 1];
    let delay = document.getElementById("delay").value;
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    document.getElementById("switch-background").style.transition = `background-image ${delay}s, filter ${delay}s`;
    document.body.className = document.body.className == "dark" ? "white":"dark";
   // document.body.className = file === "moon.png" ? "dark" : "white";
   // document.getElementById("switch-background").src = `img/${file === "moon.png" ? "sun.png" : "moon.png"}`;

}
document.addEventListener
(
    "mousemove",
    function(event)
    {
        let x = event.clientX;
        let y = event.clientY;
        document.getElementById("mouse").innerHTML = `X =${x}, Y=${y}`;
    }
);

function addLeadingZero(number)
{
    return number < 10 ? "0" + number:number;
}
document.body.onload = function tick_timer()
{
    let time = new Date();
    //document.getElementById("full-time").innerHTML = time;
    document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

    document.getElementById("years").innerHTML = addLeadingZero(time.getFullYear());
    document.getElementById("months").innerHTML = addLeadingZero(time.getMonth() + 1);
    document.getElementById("days").innerHTML = addLeadingZero(time.getDate());

    document.getElementById("day-of-week").innerHTML = time.toLocaleDateString("en", { weekday: 'long' });

    document.getElementById('current-date').style.visibility = document.getElementById('show-date').checked ? "visible" : "hidden";
    document.getElementById('day-of-week').style.visibility = document.getElementById('show-weekday').checked ? "visible" : "hidden";

    setTimeout(tick_timer, 100);
}
