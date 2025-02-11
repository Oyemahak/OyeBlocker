const toggleButton = document.getElementById('toggle');
const statusText = document.getElementById('status');

chrome.storage.sync.get(["adBlockEnabled"], (data) => {
  if (data.adBlockEnabled === false) {
    statusText.textContent = "OFF";
    toggleButton.textContent = "Turn ON";
  } else {
    statusText.textContent = "ON";
    toggleButton.textContent = "Turn OFF";
  }
});

toggleButton.addEventListener("click", () => {
  chrome.storage.sync.get(["adBlockEnabled"], (data) => {
    const newStatus = !data.adBlockEnabled;
    chrome.storage.sync.set({ adBlockEnabled: newStatus });

    if (newStatus) {
      statusText.textContent = "ON";
      toggleButton.textContent = "Turn OFF";
    } else {
      statusText.textContent = "OFF";
      toggleButton.textContent = "Turn ON";
    }
  });
});