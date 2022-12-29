window.addEventListener('afterprint', () => {
    chrome.runtime.sendMessage("Print")
});