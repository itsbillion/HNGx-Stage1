function getCurrentTime() {
    var today = new Date(); 
    var day = today.getDay();
    var listOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = today.getUTCHours().toString().padStart(2, '0');
    var minutes = today.getUTCMinutes().toString().padStart(2, '0');
    var seconds = today.getUTCSeconds().toString().padStart(2, '0');
    var currentTime = hours + ":" + minutes + ":" + seconds;
    document.querySelector(".day").innerHTML = listOfDays[day];
    document.querySelector(".time").innerHTML = currentTime;
}

window.onload = function() {
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
}