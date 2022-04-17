var noseX=0;
var noseY=0;
var rightwristX=0;
var leftwristX=0;
var difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function draw(){
    background('#919c9a');
    fill('#0EF7EC');
    stroke('#0EF7EC');
    square(noseX,noseY,difference)
}

function modelloaded(){
    console.log('model is loaded');
}

function gotposes(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX + "noseY=" + noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+" rightwristX="+rightwristX)
    }
}


