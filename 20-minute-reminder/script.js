// Request permission for notifications
Notification.requestPermission().then(function (permission) {
  if (permission === "granted") {
    // Set interval to show notification every 20 minutes
    // setInterval(showNotification, 20 * 60 * 1000);

    // Function to create and show notification
    function showNotification() {
      new Notification("Reminder", {
        body: "Time to take a break!",
      });
    }

    // Function to update countdown timer
    function updateTimer() {
      const timerElement = document.getElementById("timer");
      let timeLeft = 20 * 60; // 20 minutes in seconds

      function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`;
      }

      function countdown() {
        timerElement.textContent = formatTime(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
          timeLeft = 20 * 60; // Reset timer after 20 minutes
          showNotification();
        }
      }

      // Initial call to start countdown
      countdown();

      // Update timer every second
      setInterval(countdown, 1000);
    }

    // Call function to update countdown timer
    updateTimer();
  }
});

// To improve it: add system time to send notifications
