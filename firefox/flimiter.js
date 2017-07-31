/*******************************************************************************
 *                                                                             *
 * Main javascript for Flimiter. Runs when on a supported social media page.   *
 *                                                                             *
 *******************************************************************************/

/**
 * Default browser settings, if none found
 */
var defaultSettings = {
  facebook: {}
}

/**
 * Default error handling (logs to console)
 */
function handleDefaultError(e) {
  console.log(e);
}


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

const smType = getSocialMediaType();

/**
 * Updates the page with hamster blockers, according to settings
 */
function hamsterfy(settings) {
  const flimiterType = settings[smType];

  if (typeof(flimiterType) !== "undefined") {

  }

  // TODO: deal with no settings set for page
  // TODO: deal with settings not loaded
  console.log('FLIMITER: hamsterfy');
}

/**
 * Initialize flimiter settings for page and initialize page.
 * This should be called every time the page updates
 */
function updatePage() {
  const storedSettings = browser.storage.local.get();
  storedSettings.then(hamsterfy, handleDefaultError);
}

updatePage();
