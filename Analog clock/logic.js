const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function ClockTick() {
    const date = new Date();
    
    // Calculate the fractional values for rotation
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours() % 12) / 12;

    // Rotate the clock hands
    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
    // Apply the rotation using the transform property
    element.style.transform = `rotate(${rotation * 360}deg)`;
}

// Update the clock every second
setInterval(ClockTick, 1000);

// Initial call to set the clock hands immediately on page load
ClockTick();
