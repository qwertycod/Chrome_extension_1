# Chrome_extension_1
**Chrome extension: pass data from background(browser tab) to popup js**

**Goal**

We want to pass data from chrome browser tab to an extension popup js file.

The JavaScript that we are running the browser tab is inserted by the extension itself. Now we want to communicate between the browser tab and the extension popup.

In our previous project we have seen passing data from popup js to chrome tab or the background in the chrome extension. Now the situation is reversed here.

We will be using chrome methods for passing data.

We will use chrome.runtime.sendMessage() method for sending messages and chrome.runtime.onMessage.addListener(handleMessage) for receiving the messages.

![c](https://github.com/qwertycod/Chrome_extension_1/assets/112320985/90add143-0bd1-425f-bc83-3e0b227d79c3)

**Coding**

**popup.js** code

First let’s see code to inject a javascript function or a javaScript file into the browser tab via chrome extension.

We have a save button, on click of it we want to insert our javascript file called sender.js into the browser.

The method we are using is chrome.tabs.query and we are passing another method inside it i.e. chrome.scripting.executeScript

chrome.scripting.executeScript() this method takes 3 parameters,

a – target (the target tabId that we got via Chrome.tabs.query method.

b – file or function that will run inside the browser tabs.

c – an args variable where we can pass our arguments to the above function in form of array.


The code of chrome.tabs.query is written inside the popup.js

**Sender.js** code

We have a notifyBackgroundPage method which we will use for passing data from Sender.js or chrome tab or the background js to the popup js.

We will be using the chrome method – 

chrome.runtime.sendMessage() where will pass our customized data with 2 parameters success and message.

In my example, I have used the method like this, you can change it accordingly.
