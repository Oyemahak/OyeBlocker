chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          "id": 1,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://*.doubleclick.net/*",
            "resourceTypes": ["script", "image", "sub_frame"]
          }
        },
        {
          "id": 2,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://*.googlesyndication.com/*",
            "resourceTypes": ["script", "image", "sub_frame"]
          }
        },
        {
          "id": 3,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://*.adservice.google.com/*",
            "resourceTypes": ["script", "image", "sub_frame"]
          }
        }
      ],
      removeRuleIds: [1, 2, 3]
    });
  });  