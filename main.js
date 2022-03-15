function capture(){
   Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'/>"
   });
}

console.log("ml5 version:", ml5.version)
classification = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NFv3pSyQA/model.json", modelLoaded);