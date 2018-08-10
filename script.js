var time=0;
var running =0;
function startpause(){
    if(running==0){
        running=1;
        increment()
        document.getElementById('start').innerHTML="pause";
        document.getElementById('startpause').style.backgroundColor="rgb(221, 192, 25)";
        document.getElementById('startpause').style.borderColor="rgb(221, 192, 25)";
    }
    else{
        running=0;
        document.getElementById('start').innerHTML="resume";
        document.getElementById('startpause').style.backgroundColor="rgb(28, 165, 28)";
        document.getElementById('startpause').style.borderColor="rgb(28, 165, 28)";
    }
}
function reset(){
    // running=0;
    // document.getElementById('start').innerHTML="start";
    // document.getElementById("output").innerHTML="00:00:00:00";
    // document.getElementById('startpause').style.backgroundColor="#dddddd";
    // document.getElementById('startpause').style.borderColor="#dddddd";
    location.reload();
    
}
function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60)
            var secs = Math.floor(time/10%60)
            var hours = Math.floor(time/10/60/60)
            var tenth = time%10;
            if(mins<10){
                mins= "0" + mins;
            }
            if(secs<10){
                secs= "0" + secs;
            }
            document.getElementById("output").innerHTML= hours + ":" + mins + ":" +secs + ":" + tenth;
            
            increment();
        },100)

        
    }
}

