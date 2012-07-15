var EXPORTED_SYMBOLS = ["sirPrefs"];

sirPrefs = {
    opened:false,

    browserPrefs: undefined,
    
    
    get:function(name) {
        var value=null;
        try {
            value = this.prefs.getComplexValue(name,Components.interfaces.nsISupportsString);
        } catch(e) {
        }
        if (value !== null) {
            return value.data;
        } else {
            return null;
        }
    },

    set:function(name,value) {
        if (this.prefs===null) {
            return null;
        }
        var sString = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            sString.data = value;
            this.prefs.setComplexValue(name,Components.interfaces.nsISupportsString,sString);
    },

    setBool:function(name, value) {
        this.prefs.setBoolPref(name,value);
    },

    getBool:function(name) {
        if (this.prefs.getPrefType(name)===this.prefs.PREF_BOOL) {
            return this.prefs.getBoolPref(name);
        } else {
            return -1;
        }
    },

    getInt:function(name) {
        return this.prefs.getIntPref(name);
    },

    setInt:function(name,value) {
        if (this.prefs===null) {
            return null;
        }
        this.prefs.setIntPref(name,value);
    },
    
    getString:function(name) {
        return this.prefs.getComplexValue(name, Components.interfaces.nsIPrefLocalizedString).data;
    },

    Init:function() { 
        if (this.opened) {
            return;
        }
        this.prefs=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.sir.");
        this.prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
        
        this.browser_prefs = prefs=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("");
        this.browser_prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);
        
        this.opened=true;
    }
};