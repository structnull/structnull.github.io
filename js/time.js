// static/js/time.js
function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = (hours % 12) || 12;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return `${formattedDate} ${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

function updateTime() {
  const now = new Date();
  const formattedTime = formatTime(now);

  const timeElement = document.getElementById("real-time");
  if (timeElement) {
    timeElement.textContent = formattedTime;
  }
}

setInterval(updateTime, 1000);
