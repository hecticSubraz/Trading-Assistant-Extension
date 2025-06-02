function openSite(url) {
  chrome.tabs.create({ url: url });
}
