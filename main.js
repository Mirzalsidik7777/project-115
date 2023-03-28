function preload(){    
    
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
 }
 
 function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
}

function take_snapshot(){
    save('myFilterimage.png');
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
