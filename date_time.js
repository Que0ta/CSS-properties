// time.js

function updateDateTime() {
    var currentDateTime = new Date();

    var options = {
        // weekday: 'short',
        // year: 'numeric',
        // month: 'short',
        // day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };

    var formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);

    var timeElement = document.querySelector('.date_time');

    if (timeElement) {
        timeElement.textContent = formattedDateTime;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);
