chrome.runtime.onInstalled.addListener(() => {
  console.log("Trading Assistant Installed");
});

// Example OAuth2 authentication placeholder
chrome.identity.getAuthToken({ interactive: true }, function(token) {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError);
    return;
  }
  console.log("Google OAuth Token:", token);
});
