const blockYouTubeAds = () => {
    let videoAds = document.querySelectorAll('.video-ads, .ytp-ad-player-overlay, .ytp-ad-text');
    videoAds.forEach(ad => ad.remove());
  
    let skipButton = document.querySelector('.ytp-ad-skip-button');
    if (skipButton) {
      skipButton.click();
    }
  };
  
  const observer = new MutationObserver(blockYouTubeAds);
  observer.observe(document.body, { childList: true, subtree: true });
  
  setInterval(blockYouTubeAds, 1000);  