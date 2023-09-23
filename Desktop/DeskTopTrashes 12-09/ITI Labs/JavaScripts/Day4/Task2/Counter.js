var stopwatch = document.getElementById("stopwatch");
    var startBtn = document.getElementById("start-btn");
    var timeoutId = 0;
    var sec = 0;
    var min = 0;

    
    function start(flag) {
      if (flag) {
        startBtn.disabled = true;
      }

      timeoutId = setTimeout(function() {
        
        sec = parseInt(sec);
        min = parseInt(min);

        sec++;

    
        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }

   

        if (sec < 10) {
          sec = '0' + sec;
        }

        if (min < 10) {
          min = '0' + min;
        }

        stopwatch.innerHTML = min + ':' + sec + '';

        start();
      }, 1000);
    }

    
    function pause() {
      clearTimeout(timeoutId);
      startBtn.disabled = false;
    }

    