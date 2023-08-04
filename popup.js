const saveButton = document.getElementById("save");

saveButton.addEventListener("click", async () => {
  chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
    chrome.scripting.executeScript(
      {
        target: {tabId: tab.id},
        files: ['sender.js'], 
        args: [dummyData]
     })
  });
});
