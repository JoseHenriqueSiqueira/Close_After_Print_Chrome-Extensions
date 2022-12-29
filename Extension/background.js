chrome.runtime.onMessage.addListener(
  async function(msg, sender, sendResponse) {
    if (msg == "Print"){
        const [tab] = await chrome.tabs.query({active:true, currentWindow:true})
        try {
            chrome.tabs.remove(tab.id);
        }catch (error) {}    
  }}
);