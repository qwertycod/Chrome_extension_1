// some async api calls()
.then(function(response) {
     console.log('work complete');
      console.log(response);
      notifyBackgroundPage(true, 'Work created !');
})


function notifyBackgroundPage(value, msg) {
     const sending = chrome.runtime.sendMessage({
         success: value,
         message: msg 
    });
   sending.then(handleResponse, handleError); // send error in case of error
}

function handleResponse(message) {
    if (message && (message.response == 'decodeHtml'))
       {
         console.log('decodeHtml', message.value);
       } 
     }

function handleError(error) {
     // console.log(`Error: ${error}`);
}
