Webcam.set({
width:310,
height:300,
image_format:'png',
png_quality:90,

constraints: {
facingMode:"envirment"
}
})

camera=document.getElementById("camera");
Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    })
}

console.log("ml5_version:",ml5.version);
classifier=ml5.imageClassifier("MobileNet",ModelLoaded);

function ModelLoaded(){
    console.log("model_loaded");
}

function identify(){
    img=document.getElementById("captured_img");
    classifier.classify(img,getResult);
}
function getResult(error,result){
if(error){
    console.error("error!");
}
else{
    console.log(result);
    document.getElementById("contains").innerHTML=result[0].label;
}
}    
