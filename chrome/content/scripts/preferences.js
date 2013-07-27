if (!SIR) {
    var SIR = {};
}

if (!SIR.Preferences) {
    SIR.Preferences = {};
}

SIR.Preferences.settings = Components.classes["@mozilla.org/preferences-service;1"]
    .getService(Components.interfaces.nsIPrefService).getBranch("extensions.sir.");


SIR.Preferences.onLoad = function () {
    Components.utils.import("resource://sir/prefs.jsm", SIR);


    var panes = ["generators", "units"];

    for (var i = panes.length; i--;) {
        document.getElementById("sir-" + panes[i]).addEventListener("paneload", SIR.Preferences.onPaneLoading, false);
    }
    SIR.Preferences.onPaneLoading();
};


SIR.Preferences.onOK = function () {
    var win = document.documentElement,
        paneId = win.currentPane.id.replace(/^sir\-/, "");
    if (document.getElementById("sir-piePath")) {
        SIR.sirPrefs.set("generators.piePath", document.getElementById("sir-piePath").value);
    }
};


SIR.Preferences.onPaneLoading = function () {

    var win = document.documentElement,
        paneId = win.currentPane.id.replace(/^sir\-/, "");
    if (document.getElementById("sir-piePath")) {
        document.getElementById("sir-piePath").value = SIR.sirPrefs.get("generators.piePath");
    }
};


SIR.Preferences.onReset = function () {
    var win = document.documentElement,
        paneId = win.currentPane.id.replace(/^sir\-/, "");

    var children = SIR.Preferences.settings.getChildList(paneId + ".", {}), max;

    for (var i = 0, max = children.length; i < max; i += 1) {
        try {
            SIR.Preferences.settings.clearUserPref(children[i]);
        } catch (e) {
        }
    }

    window.location.reload();

};


window.addEventListener("load", SIR.Preferences.onLoad, false);