function startClock() {
    alert("Clock Started");
    setInterval(function() {
        var date = new Date();
        var time = date.toLocaleTimeString();
        document.getElementById("clock").innerHTML = time;
    }, 1000);
    document.getElementById('btn').style.display="none";
}