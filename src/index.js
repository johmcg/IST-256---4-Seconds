var btn = document.getElementById("btnTimer");
btn.addEventListener("click", clicked);
var timesClicked = 0;
var startDate, stopDate, totalTime;
var secondsLabel = document.getElementById("seconds");
var timeLogStart = document.getElementById("starting");
var timeLogEnd = document.getElementById("ending");
var currentColor = "btn-outline-dark";
var newColor;
var info = [];
var tries = 0;
var timesTried = document.getElementById("attempts");
var allScores = [];
var xyValues = [];

function clicked() {
    timesClicked += 1;
    if (timesClicked % 2 == 0) { //if even number it is assumed the user just clicked stop
        stopDate = new Date();
        totalTime = (stopDate - startDate) * .001; //milliseconds to seconds
        totalTime = (Math.round(totalTime * 100) / 100).toFixed(2); //rounds to two decimal places
        btn.innerHTML = "Start"; //Changes button text
        secondsLabel.innerHTML = totalTime + " Seconds"; //Shows seconds below button


        //This section changes color of button.
        if (totalTime == 4) {
            newColor = "btn-success"
        } // green
        else if (totalTime > 3.8 && totalTime < 4.2) {
            newColor = "btn-primary"
        } //blue
        else if (totalTime > 3.5 && totalTime < 4.5) {
            newColor = "btn-warning"
        } //yellow
        else {
            newColor = "btn-danger"
        } //red

        //startOrStop.classList.replace("'fa-stop'", "'fa-play'");
        btn.classList.replace(currentColor, newColor);
        currentColor = newColor;
        //End of button color change section

        tries += 1; //attempts

        let user = { //stores attempts, start, and stop times
            attempt: tries,
            start: startDate,
            stop: stopDate
        };


        info.push(user); //adds to array of user info


        timeLogStart.innerText = info[tries - 1].start; //changes Start time to Toast Message
        timeLogEnd.innerText = info[tries - 1].stop; //changes Stop time to Toast Message
        timesTried.innerText = tries; //changes attempt number to Toast Message
        allScores.push(totalTime); //adds time to Array keeping track of all times a user got

        uncharted();

    } else { //if even number it is assumed the user just clicked start
        startDate = new Date();
        btn.innerHTML = "Stop";
        //startOrStop.classList.replace("fa-play", "fa-stop");

    }
}

function uncharted() {
    for (var i = 0; i < allScores.length; i++) {
        xyValues.push({x: (i + 1), y: allScores[i]});
    }

    new Chart("myChart", {
        type: "scatter",
        data: {
            datasets: [{
                pointRadius: 4,
                pointBackgroundColor: "rgb(0,0,255)",
                data: xyValues
            }]
        },
        options: {
            legend: {display: false},
            scales: {
                xAxes: [{ticks: {min: 0, max: 25}}],
                yAxes: [{ticks: {min: 0, max: 10}}],
            }
        }
    });
}

