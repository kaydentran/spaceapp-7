"use strict";

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

/**
* Event handler for befoeinstallpropt event.
* saves the event 7 shows install button.
*
* @param {Event} evt
*/

function saveBeforeInstallPromptEvent(evt) {
deferredInstallPrompt = evt;
installButton.removeAttribute('hidden');
}

function installPWA(evt){
  
// CODELAB: Add code show install prompt & hide the install button.
deferredInstallPrompt.prompt();
  
// Hide the install button, it can't be called twice.
evt.srcElement.setAttribute('hidden', true);
  
  // CODELAB: Log user response to prompt.
deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
}

// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
// CODELAB: Add code to log the event
console.log('Weather App was installed.', evt);
}