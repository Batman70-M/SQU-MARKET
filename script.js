function updateDateTime() {
    var currentDate = new Date();
    var day = currentDate.getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear()
    var formattedDate = daysOfWeek[day] + " " + month + " " + year;

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var formattedTime = hours + ':' + minutes + ':' + seconds;

    document.getElementById('current-date').textContent = formattedDate;
    document.getElementById('current-time').textContent = formattedTime;
}

// Update date and time every second
setInterval(updateDateTime);
updateDateTime(); // Initial update


document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.photo-gallery img');
    var currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';

        // Set a timeout to call the function again after 3 seconds
        setTimeout(showNextImage, 3000);
    }

    // Show the first image initially
    images[currentIndex].style.display = 'block';

    // Start the automatic image rotation
    showNextImage();
});