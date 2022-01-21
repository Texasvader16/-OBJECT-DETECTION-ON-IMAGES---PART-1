img = ""

 function preload()
{
    img = loadImage("TV.jpg")
}

function setup()
{
canvas = createCanvas(640 , 420)
canvas.center()
}

function draw()
{
    image(img , 0 , 0 , 640 , 420)
    fill("#ff0000")
    text("TV" ,  50 , 85)
    noFill();
    stroke("#7B0CEA")
    rect(45 , 72 , 400 , 200)
}