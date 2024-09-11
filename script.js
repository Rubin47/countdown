document.getElementById('start-timer').addEventListener('click', function() {
    const inputDate = document.getElementById('event-date').value;
    if (!inputDate) {
      alert('Please enter a valid date.');
      return;
    }
  
    const eventDate = new Date(inputDate).getTime();
    
    // Update the countdown every second
    const timerInterval = setInterval(function() {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
  
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "<h2>Event Has Passed!</h2>";
        return;
      }
  
      // Calculating days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      // Update HTML
      document.getElementById("days").innerText = days < 10 ? "0" + days : days;
      document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
  });
  