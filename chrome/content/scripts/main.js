if (!SIR) {
	var SIR = {};
}
SIR.currentVersion = null;
Components.utils.import("resource://sir/prefs.jsm", SIR);
SIR.sirPrefs.Init();
SIR.load = function() {
	Components.utils.import("resource://sir/prefs.jsm", SIR);
	SIR.sirPrefs.Init();
	SIR.getLibs();
	try {
		Components.utils.import("resource://gre/modules/AddonManager.jsm", SIR);
		SIR.AddonManager.getAddonByID("{0103572f-d20f-4039-9eaa-ded7c4a97124}", function(addon) {
			SIR.currentVersion = addon.version;
			if (!SIR.sirPrefs.get("version")) {
				SIR.sirPrefs.set('version', addon.version);
				SIR.installButton("nav-bar", "sir-toolbarbutton");
				// The "addon-bar" is available since Firefox 4  
				SIR.installButton("addon-bar", "sir-toolbarbutton");
			}
            
            if(!SIR.sirPrefs.get("version") && SIR.sirPrefs.get("version") !== addon.version){
                SIR.sirPrefs.set('version', addon.version);
				SIR.installButton("nav-bar", "sir-toolbarbutton");
				SIR.installButton("addon-bar", "sir-toolbarbutton");
                
            }
		});
	} catch (e) {
		var gExtensionManager = Components.classes["@mozilla.org/extensions/manager;1"].getService(Components.interfaces.nsIExtensionManager);
		SIR.currentVersion = gExtensionManager.getItemForID("{0103572f-d20f-4039-9eaa-ded7c4a97124}").version;
		if (!SIR.sirPrefs.get("version")) {
			SIR.sirPrefs.set('version', addon.version);
			SIR.installButton("nav-bar", "sir-toolbarbutton");
			// The "addon-bar" is available since Firefox 4  
			SIR.installButton("addon-bar", "sir-toolbarbutton");
		}
        
        if(!SIR.sirPrefs.get("version") && SIR.sirPrefs.get("version") !== addon.version){
                SIR.sirPrefs.set('version', addon.version);
				SIR.installButton("nav-bar", "sir-toolbarbutton");
				SIR.installButton("addon-bar", "sir-toolbarbutton");
                
            }
	}
};
SIR.getLibs = function() {
	var jsLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader);
	jsLoader.loadSubScript("chrome://sir/content/libs/jquery.min.js", SIR);
	jQuery.noConflict();
	SIR.$ = jQuery;
};
SIR.installButton = function(toolbarId, id, afterId) {
	if (!document.getElementById(id)) {
		var toolbar = document.getElementById(toolbarId);
		// If no afterId is given, then append the item to the toolbar  
		var before = null;
		if (afterId) {
			let elem = document.getElementById(afterId);
			if (elem && elem.parentNode == toolbar) before = elem.nextElementSibling;
		}
		toolbar.insertItem(id, before);
		toolbar.setAttribute("currentset", toolbar.currentSet);
		document.persist(toolbar.id, "currentset");
		if (toolbarId == "addon-bar") toolbar.collapsed = false;
	}
}
window.addEventListener("load", SIR.load, false);