var img = "" ;
var status="";
var objectdetecter="";
var object=[];
function preload()
{
img=loadImage("dog_cat.jpg");
}
function setup()
{
canvas=createCanvas(600 , 400)
canvas.center()
objectdetecter=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("Status").innerHTML="Status : Detecting Object please Wait"
}
function draw()
{
image(img, 0 ,  0 , 600 , 400 )
fill("red")
text("Dog" , 200 ,25)
noFill()
rect(100 , 50 , 300 , 300)
fill("red")
text("Cat" , 450 ,50)
noFill()
rect(250 , 70 , 300 , 300)
}
function modelLoaded()
{
console.log("Model is not got the object");
status=true
objectdetecter.detect(img , gotResult);
}
function gotResult(error , result)
{
if(error)
{
    console.log(error);
}
else
{
    console.log(result);
    object=result;
}
}