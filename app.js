




setInterval(()=>{
    
    var date = new Date();
    let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

document.getElementById("h").innerHTML = hours;
document.getElementById("m").innerHTML = minutes;
document.getElementById("s").innerHTML = seconds;

    if(hours==0){
        hours =12;
        document.getElementById("h").innerHTML = hours;
        document.getElementById("m").innerHTML = minutes;
        document.getElementById("s").innerHTML = seconds;
    }

    if(seconds<10){
        document.getElementById("s").innerHTML = `0${seconds}`;
    }

    if(minutes<10 ){
        document.getElementById("m").innerHTML =`0${minutes}`;

    }

    if(hours<10 ){
        document.getElementById("h").innerHTML = `0${hours}`;


    }
    else if (hours>12 && hours<=23){
        hours = hours -12;
    }

},1000);








