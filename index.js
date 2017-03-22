window.onload = function() {
    var second = 1; // counter
    var intervalHandler, intervalHandlerM, intervalHandlerH;
    var minute = 0;
    var hour = 0;


    function countSecond() {
        get('stopwatch').innerHTML = hour +":" + minute + ":" + second;
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }

    get('start').onclick = function() {
        intervalHandler = setInterval(countSecond, 1000);
    }

    get('stop').onclick = function() {
        clearInterval(intervalHandler);
    }

    get('reset').onclick = function() {
        get('stopwatch').innerHTML = 0 + ':' + 0;
    }
}

var get = function (id){
    return document.getElementById(id);
}
