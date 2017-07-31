/*******************************************************************************
 *                                                                             *
 * Main javascript for Flimiter. Runs when on a supported social media page.   *
 *                                                                             *
 *******************************************************************************/

// If there is nothing in storage, use these settings.
/*var defaultSettings = {
  facebook: {}
}
*/
/**
 * Default error handling (logs to console)
 */
/*function handleDefaultError(e) {
  console.log(e);
}
*/

/**
 * Figure out which social media site this is, in order to find settings.
 */
function getSocialMediaType() {
  const url = window.content.location.href;

  // TODO: check for facebook
  if ( true ) {
    return "facebook";
  }
}

//const smType = getSocialMediaType();
//var flimiterSettings;

/**
 * Set the main settings for Flimiter and obscure content according to settings.
 */
/*function init(settings) {
  if (!settings.facebook) {
    browser.storage.local.set(defaultSettings);
    settings = defaultSettings;
  }

  // TODO: when I have the smType, use it to set the settings
  flimiterSettings = settings;
  if (typeof(flimiterSettings) !== "undefined") {
    console.log(flimiterSettings);
  }
}

//const storedSettings = browser.storage.local.get();
//storedSettings.then(init, handleDefaultError);

/**
 * Updates the page with the appropriate hamster blockers.
 */
function hamsterfy() {
  // TODO: deal with no settings set for page
  // TODO: deal with settings not loaded
  console.log('FLIMITER: hamsterfy');
}

window.addEventListener("load", hamsterfy);

// TODO: handle scroll event

