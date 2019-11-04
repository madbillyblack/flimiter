/*******************************************************************************
 *                                                                             *
 * Main javascript for Flimiter. Runs when on a supported social media page.   *
 *                                                                             *
 *******************************************************************************/

// Where the hamster picture lives
const hampsterPic = browser.extension.getURL("img/hamster-booty.gif");

/**
 * Social media data constants used by Flimiter
 */
const smConstants = {
  facebook: {
    contentDivs: [".fbUserContent"]
  }
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

  if ( url.match(/*facebook.com*/) ) {
    return "facebook";
  }
}

const smType = getSocialMediaType();

/**
 * Updates the page with hamster blockers, according to settings
 */
function limitContent(settings) {
  // Generates a hampster div
  function hampsterify(div) {
    var hampster = document.createElement("img");
    hampster.setAttribute("src", hampsterPic);
  }


  const flimiterSettings = settings[smType];
  const flimiterConsts = smConstants[smType];
  const maxPosts = flimiterSettings.maxPosts;
  // TODO: handle time-based settings

  let contentDivs = [];
  for (let selector of flimiterConsts.contentDivs || []) {
    let divs = document.querySelectorAll(selector);
    for (let div of divs) {
      contentDivs.push(div);
    }
  }

  // This isn't enabled. We can skip.
  if (typeof(maxPosts) === "undefined") {
    return;
  }
  else if (maxPosts > 0) {
    contentDivs.forEach(function(div, i, array) {
      if (i > maxPosts) {

      }
    });
  }

  // Sanity check
  if (typeof(flimiterType) === "undefined") { return; }



  // Get content divs that may need to be replaced
  function contentSelectors() {

  }


  const selectors =

  if (typeof(flimiterType) !== "undefined") {
    const
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
  storedSettings.then(limitContent, handleDefaultError);
}

updatePage();
