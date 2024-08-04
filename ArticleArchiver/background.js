if (chrome && chrome.runtime && chrome.runtime.onInstalled) {
  chrome.runtime.onInstalled.addListener(() => {
    if (chrome.declarativeNetRequest) {
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
          {
            id: 1,
            priority: 1,
            action: {
              type: "redirect",
              redirect: {
                regexSubstitution: "https://archive.is/\\0"
              }
            },
            condition: {
              regexFilter: "^https://www\\.nknews\\.org/\\d{4}/\\d{2}/.*",
              resourceTypes: ["main_frame"]
            }
          },
          {
            id: 2,
            priority: 1,
            action: {
              type: "redirect",
              redirect: {
                regexSubstitution: "https://archive.is/\\0"
              }
            },
            condition: {
              regexFilter: "^https://www\\.nknews\\.org/pro/.*",
              resourceTypes: ["main_frame"]
            }
          }
        ],
        removeRuleIds: [1, 2]
      });
    } else {
      console.error("Declarative Net Request API not available.");
    }
  });
} else {
  console.error("Chrome runtime or onInstalled is not available.");
}
