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

function handleMessage(request, sender, sendResponse)
{
     console.log(`A browser script sent a message: ${request.message}`);
     if(request.success) {
          showSuccessMessage(request.message) 
     }
    else if(request.success == false) {
       showErrorMessage(request.message);
    }
   
    // sendResponse({ response: "Response from popup script" }); // used to send response to the sender
}

chrome.runtime.onMessage.addListener(handleMessage);

function showSuccessMessage(msg){
  document.getElementById('saved').textContent = msg ? msg : 'Saved !'
   }

 showErrorMessage(errorMessage){
    document.getElementById('saved').textContent = errorMessage ? errorMessage : 'Error occourred !'
}
