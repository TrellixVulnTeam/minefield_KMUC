/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

pref("services.sync.serverURL", "https://bittoco.pw/sync/index.php/");
pref("services.sync.userURL", "user/");
pref("services.sync.miscURL", "misc/");
pref("services.sync.termsURL", "http://www.bittoco.pw/sync/terms.shtml");
pref("services.sync.privacyURL", "http://www.bittoco.pw/sync/privacy.shtml");
pref("services.sync.statusURL", "https://bittoco.pw/status/");
pref("services.sync.syncKeyHelpURL", "http://www.bittoco.pw/sync/keyhelp.shtml");

pref("services.sync.lastversion", "firstrun");
pref("services.sync.sendVersionInfo", true);

pref("services.sync.scheduler.eolInterval",         604800); // 1 week
pref("services.sync.scheduler.idleInterval",         3600);  // 1 hour
pref("services.sync.scheduler.activeInterval",       600);   // 10 minutes
pref("services.sync.scheduler.immediateInterval",    90);    // 1.5 minutes
pref("services.sync.scheduler.idleTime",             300);   // 5 minutes

pref("services.sync.scheduler.fxa.singleDeviceInterval",     3600); // 1 hour
pref("services.sync.scheduler.sync11.singleDeviceInterval", 86400); // 1 day

pref("services.sync.errorhandler.networkFailureReportTimeout", 1209600); // 2 weeks

// A "master" pref for Sync being enabled. Will be set to false if the sync
// customization UI finds all our builtin engines disabled (and addons are
// free to force this to true if they have their own engine)
pref("services.sync.enabled", true);
// Our engines.
pref("services.sync.engine.addons", false);
pref("services.sync.engine.bookmarks", true);
pref("services.sync.engine.history", true);
pref("services.sync.engine.passwords", true);
pref("services.sync.engine.prefs", true);
pref("services.sync.engine.tabs", true);
pref("services.sync.engine.tabs.filteredUrls", "^(about:.*|chrome://weave/.*|wyciwyg:.*|file:.*|blob:.*)$");

pref("services.sync.jpake.serverURL", "https://keyserver.palemoon.org/");
pref("services.sync.jpake.pollInterval", 1000);
pref("services.sync.jpake.firstMsgMaxTries", 300); // 5 minutes
pref("services.sync.jpake.lastMsgMaxTries", 300);  // 5 minutes
pref("services.sync.jpake.maxTries", 10);

// Allow add-ons to be synced from non-trusted sources.
pref("services.sync.addons.ignoreRepositoryChecking", true);

// If true, add-on sync ignores changes to the user-enabled flag. This
// allows people to have the same set of add-ons installed across all
// profiles while maintaining different enabled states.
pref("services.sync.addons.ignoreUserEnabledChanges", false);

// Comma-delimited list of hostnames to trust for add-on install.
pref("services.sync.addons.trustedSourceHostnames", "addons.palemoon.org,addons.mozilla.org,addons.bittoco.pw");

pref("services.sync.log.appender.console", "Warn");
pref("services.sync.log.appender.dump", "Error");
pref("services.sync.log.appender.file.level", "Trace");
pref("services.sync.log.appender.file.logOnError", true);
pref("services.sync.log.appender.file.logOnSuccess", false);
pref("services.sync.log.appender.file.maxErrorAge", 864000); // 10 days
pref("services.sync.log.rootLogger", "Debug");
pref("services.sync.log.logger.addonutils", "Debug");
pref("services.sync.log.logger.declined", "Debug");
pref("services.sync.log.logger.service.main", "Debug");
pref("services.sync.log.logger.status", "Debug");
pref("services.sync.log.logger.authenticator", "Debug");
pref("services.sync.log.logger.network.resources", "Debug");
pref("services.sync.log.logger.service.jpakeclient", "Debug");
pref("services.sync.log.logger.engine.bookmarks", "Debug");
pref("services.sync.log.logger.engine.clients", "Debug");
pref("services.sync.log.logger.engine.forms", "Debug");
pref("services.sync.log.logger.engine.history", "Debug");
pref("services.sync.log.logger.engine.passwords", "Debug");
pref("services.sync.log.logger.engine.prefs", "Debug");
pref("services.sync.log.logger.engine.tabs", "Debug");
pref("services.sync.log.logger.engine.addons", "Debug");
pref("services.sync.log.logger.engine.apps", "Debug");
pref("services.sync.log.logger.identity", "Debug");
pref("services.sync.log.logger.userapi", "Debug");
pref("services.sync.log.cryptoDebug", false);

pref("services.sync.tokenServerURI", "https://token.services.mozilla.com/1.0/sync/1.5");

pref("services.sync.fxa.termsURL", "https://accounts.firefox.com/legal/terms");
pref("services.sync.fxa.privacyURL", "https://accounts.firefox.com/legal/privacy");
