function checkTime(i) {
    if(i < 10) {
        i = "0" + i;
    };
    return i;
};

function startTime() {
    var currentTime = new Date();
    
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var ampm = hour >= 12 ? 'Pm' : 'Am';
    
if(hour > 12){
    hour = hour - 12;
    };
    
    minute = checkTime(minute);
    second = checkTime(second);
    
    document.getElementById('idOne').textContent = hour + ":" + minute + ":" + second + ' ' + ampm;
    
    setTimeout(startTime, 1000);
};

document.getElementById('idOne').addEventListener('onload', startTime(), false);