if (!SIR) {
        var SIR = {};
}

if (!SIR.Preferences) {
    SIR.Preferences = {};
}

SIR.Preferences.settings = Components.classes["@mozilla.org/preferences-service;1"]
                    .getService(Components.interfaces.nsIPrefService).getBranch("extensions.sir.");

SIR.Preferences.onLoad = function(){
    Components.utils.import("resource://sir/prefs.jsm", SIR);
    document.getElementById("sir-piePath").value = SIR.sirPrefs.get("generators.piePath");
};


SIR.Preferences.onOK = function(){   
   SIR.sirPrefs.set("generators.piePath", document.getElementById("sir-piePath").value);
          
    
    
};




window.addEventListener("load", SIR.Preferences.onLoad, false);
