//https://teachablemachine.withgoogle.com/models/nYcSyhH-T/
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});


Webcam.attach('#webcam');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("picturediv").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nYcSyhH-T/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function check() {
    console.log('check');
    img=document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    console.log(results);
    if(error){
        console.log(error);
    } else {
        prediction = results[0].label;
        document.getElementById("prediction").innerHTML=prediction;
        if (prediction = 'ILY') {
        prediction = 'ILY';
        } else if (prediction == 'NO') {
        prediction = 'NO';
        } else if (prediction == 'YES'){
        prediction = 'YES';
        } else if (prediction == 'RESTROOM'){
        prediction = 'RESTROOM';
        } else if (prediction == 'STOP'){
        prediction = 'STOP';
            } else if (prediction == 'ME TOO'){
        prediction = 'ME TOO';
        } else if (prediction == 'HELP'){
        prediction = 'HELP';
        }
    document.getElementById("prediction").innerHTML = prediction;
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The prediction is "+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
