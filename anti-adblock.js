// Fake ad script to bypass ad-block detection
window.fakeAdScript = document.createElement("script");
window.fakeAdScript.innerHTML = `
  var adsBlocked = false;
  function adBlockDetected() { adsBlocked = true; }
`;
document.head.appendChild(window.fakeAdScript);