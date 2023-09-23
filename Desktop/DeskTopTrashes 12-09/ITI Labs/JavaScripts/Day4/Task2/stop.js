var startTime;
var elapsedTime = 0;
var intervalId;

var saveNowTime;

function startStopwatch() {
    
    
    startTime = Date.now();


    intervalId = setInterval(() => {
      
      var currentTime = Date.now();
      
      elapsedTime = currentTime - startTime;

      var seconds = Math.floor(elapsedTime / 1000) % 60;
      var minutes = Math.floor(elapsedTime / (1000 * 60));

      document.getElementById("stopwatch").innerHTML =
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 10);
    saveNowTime=elapsedTime;
    currentTime = saveNowTime
  }
  function stopStopwatch() {
    
    clearInterval(intervalId);
  }



document.write(startTime());