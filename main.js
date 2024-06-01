function setup (){
    canvas = createCanvas(380, 380);
    canvas.centre ();
    video = createCapture(VIDEO);
    video.size (380,380);
    video.hide ();
}

function start(){
    objectDectector = ml5.objectDector('cocossd',modelLoaded);
    document.getElementById("ststus").innerHTML = "Status : Detecting objects";
}
function draw() {
image(video, 0, 0, 380, 380);

if(status !="")
{
    r = random(255);
    g = random(255);
    g = random(255);
    objectDectector.detect(video, gotResult);
    for (i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status : Object Detection";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
        
        fill(r,g,b);
        percent = floor(objecta[i].confidence * 100);
        text(objects[i].label +" " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        Rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     }
   }

}
function modelLoaded() {
    console.log("Model Loaded")
    status =true;
    objectDectector.detect(img, gotResult);
}