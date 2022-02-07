status1="";
objects=[];
function preload(){
    
    image1=loadImage("chair.png")

}
function setup(){
    canvas=createCanvas(250,350)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    }
    function modelLoaded(){
        status1=true
        console.log('model is loaded')
        objectDetector.detect(image1, gotResult)
    }
    function gotResult(error,results){
        if (error) {
            console.log("error")
        }else{
    console.log(results)
    objects=results;
        }
    }

function draw(){
    image(image1, 0,0,300,300)
    if (status1 != "") {
        document.getElementById("detect_status").innerHTML="Status: Objects Detected"
        for ( i=0 ;i < objects.length; i++) {
            fill("red")   
            percentage=floor(objects[i].confidence*100)
            text(objects[i].label+" "+percentage+"%",objects[i].x, objects[i].y)
            noFill()
            stroke("red")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)         
        }
    }
}
function back(){
    window.location="index.html"
    }
    function fan(){
        window.location="fan.html"
        }
        function chair(){
            window.location="chair.html"
            }
            function bottle(){
                window.location="bottle.html"
                }
                function bed(){
                    window.location="bed.html"
                    }