function openSite(url) {
  chrome.tabs.create({ url: url });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnNepse').addEventListener('click', () => {
    openSite('https://nepsealpha.com/');
  });

  document.getElementById('btnTradingView').addEventListener('click', () => {
    openSite('https://www.tradingview.com/');
  });

  document.getElementById('btnMeroLagani').addEventListener('click', () => {
    openSite('https://merolagani.com/latestmarket.aspx');
  });

  document.getElementById('btnForbes').addEventListener('click', () => {
    openSite('https://www.forbes.com/digital-assets/crypto-prices/?sh=77fb0c624785');
  });
});
