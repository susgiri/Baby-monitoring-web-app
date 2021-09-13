
var sound="";
var status;
object = [];

function preload(){
sound= loadSound("DangerAlarm.mp3");
status = "";
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
}

function draw(){
image(video,0,0,300,300);
if(status != ""){
    objectDetector.detect(video,gotResult);

for(i=0;i<object.length;i++){
if(object[i].label == "person"){
    document.getElementById("status").innerHTML = "Baby Is Found";
    sound.stop();
}


    
    else{
        document.getElementById("status").innerHTML = "Baby Not Found";

       sound.play();
    }
}
}

}

function modelLoaded(){
    console.log("cocossd is loaded");
    status = "true";

}

function gotResult(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        object=results;

    }
}