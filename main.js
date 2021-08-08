function setup()
{
canvas=createCanvas(300,300);
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
canvas.center();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function  modelLoaded()
{
 console.log("model is loaded");
}

function gotPoses(results)
{
 if(results.length>0)
 {
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
 }
}

function draw()
{
 image(video,0,0,300,300);
}

function take_snapshot()
{
save("myfilter.png");
}