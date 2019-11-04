/*******************************************************************************
 * Options javascript for Flimiter add-on.                                     *
 * Currently supported social media types:                                     *
 *                                                                             *
 *   * Facebook                                                                *
 *                                                                             *
 *******************************************************************************/

/**
 * Default error handling (logs to console)
 */
function handleDefaultError(e) {
  console.log(e);
}

/**
 * Save settings to local storage.
 */
function saveSettings() {
  // Get the settings for the requested social media type.
  // Available `smType` options:
  //   * facebook
  function getSettingsFor(smType) {
    const maxPosts = document.querySelector("#" + smType + "-max-posts");
    const timeValue = document.querySelector("#" + smType + "-time-value");
    const timeUnit = document.querySelector("#" + smType + "-time-unit");
    const perTimeValue = document.querySelector("#" + smType + "-per-time-value");
    const perTimeUnit = document.querySelector("#" + smType + "-per-time-unit");

    return {
      maxPosts: maxPosts.value,
      timeValue: timeValue.value,
      timeUnit: timeUnit.options[timeUnit.selectedIndex].value,
      perTimeValue: perTimeValue.value,
      perTimeUnit: perTimeUnit.options[perTimeUnit.selectedIndex].value
    };
  }

  browser.storage.local.set({
    facebook: getSettingsFor("facebook")
  });
}

const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", saveSettings);

/**
 * Restore saved settings to the options UI
 */
function restoreSettings(settings) {
  // Restore the settings for the requested section of the options panel.
  // Available `smType` options:
  //   * facebook
  function restoreFor(smType) {
    const smSetting = settings[smType];

    if (typeof(smSetting) !== "undefined") {
      const maxPosts = document.querySelector("#" + smType + "-max-posts");
      const timeValue = document.querySelector("#" + smType + "-time-value");
      const timeUnit = document.querySelector("#" + smType + "-time-unit-" + smSetting.timeUnit);
      const perTimeValue = document.querySelector("#" + smType + "-per-time-value");
      const perTimeUnit = document.querySelector("#" + smType + "-per-time-unit-" + smSetting.perTimeUnit);

      maxPosts.value = smSetting.maxPosts;
      timeValue.value = smSetting.timeValue;
      timeUnit.selected = true;
      perTimeValue.value = smSetting.perTimeValue;
      perTimeUnit.selected = true;
    }
  }

  restoreFor("facebook");
}

const storedSettings = browser.storage.local.get();
storedSettings.then(restoreSettings, handleDefaultError);
