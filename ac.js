

img = "";
object = [];
ac_image = "";

function preload(){
  ac_image = loadImage('ac.jpg');
}


function setup() {
    

  canvas = createCanvas(640, 420);
  canvas.position (315, 200);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){

    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(ac_image, gotResult);
}

function gotResult(error, results){

    if (error){

        console.log(error);

    }
    console.log(results);
    object = results;
}

function draw(){

    image(ac_image, 0, 0, 640, 420);
    if(status != ""){

      for (i = 0; i < object.length; i++){

          document.getElementById("status").innerHTML = "Status : Object Detected";

          fill("#000000");
          percent = floor(object[i].confidence * 100);
          text(object[i].label + "" +percent+ "%", object[i].x + 15, object[i].y + 15);
          noFill();
          stroke("#000000");
          rect(object[i].x, object[i].y, object[i].width, object[i].height);
      }
  }
  
}
