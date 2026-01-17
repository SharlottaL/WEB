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
    let target = document.getElementById("switch-background").src;
    let path = target.split('/');
    let file = path[path.length - 1];
    document.body.className = file === "moon.png" ? "dark" : "white";
    document.getElementById("switch-background").src = `img/${file === "moon.png" ? "sun.png" : "moon.png"}`;

}