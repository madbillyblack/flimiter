# Firefox Flimiter Extension

This is a Firefox extension that lets you limit your social media consumption.
Here are the social media sites currently supported:

* Facebook

There are two ways to limit consumption:

* Number of posts
* Amount of time per hour/day (not implemented)

Limiting the number of posts will only allow you to read that many posts,
before it starts replacing your posts with dancing hamsters. Limiting amount of
time will convert all posts to hamsters once you have been on the social media
for the specified length of time. When you reach the end of your time, you can
refresh the page and once again read your social media site.

By default, both options are set to `0`, which means that they are disabled.
You can set one or both limiters by going to `Add-ons` -> `Flimiter` -> 
Preferences.

## Development

To install the plugin for development:

1. Open Firefox and go to `about:debugging`.
2. Check `Enable add-on debugging`.
3. Hit the button for `Load Temporary Add-On`. Select the `manifest.json` for
  this project.

If you make any development changes, hit the `Reload` button from the
`about:debugging` screen. You will need to reload your plugin every time you
close all your browser windows.
