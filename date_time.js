// time.js

function updateDateTime() {
    var currentDateTime = new Date();

    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    var formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);

    var timeElement = document.querySelector('.date_time');

    if (timeElement) {
        timeElement.textContent = formattedDateTime;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);
