karma-webdriver-example
=======================

An example project to use Karma 0.9.2. with WebDriver and Sauce Labs

Currently requires our forked copy of [Karma] which is karma@canary with [CustomLauncherPullRequest] applied, as well
as a Sauce Connect tunnel open to your Sauce Labs account. Replace SAUCELABS_USERNAME and SAUCELABS_APIKEY in the
karma.conf.js file with your username and api key respectively.

[Karma]: https://github.com/karma-runner/karma
[CustomLauncherPullRequest]: https://github.com/karma-runner/karma/pull/533