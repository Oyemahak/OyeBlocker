const adSelectors = [
    'iframe[src*="ads"]',
    'div[id*="ad"], div[class*="ad"], div[class*="sponsored"]',
    'img[src*="ads"], img[alt*="ad"], img[alt*="sponsored"]',
    'script[src*="ads"], script[src*="track"]',
    '[aria-label="Sponsored"], [aria-label="Advertisement"]',
    'div[data-adblock-key], div[class*="overlay-ad"]',
    'a[href*="popads"], a[href*="redirect"]',
    '.video-ads, #player-ads, .ytp-ad-module' // YouTube ads
  ];
  
  // Function to remove ads
  const removeAds = () => {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
  };
  
  // Run ad removal on page load & every second to catch new ads
  document.addEventListener("DOMContentLoaded", removeAds);
  setInterval(removeAds, 1000);  