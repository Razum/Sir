if (!SIR) {
    var SIR = {};
}

var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
    .getService(Components.interfaces.nsIWindowMediator);
var mw = wm.getMostRecentWindow("navigator:browser");

SIR.templates = {
    txtShadow: function (elm, data, self) {

        var data = data;

        var hor_scale = document.createElement("scale");
        hor_scale.setAttribute("min", data.horLenLimits.minval);
        hor_scale.setAttribute("max", data.horLenLimits.maxval);
        hor_scale.setAttribute("value", data.horLen);
        hor_scale.setAttribute("class", "TShorLen");
        hor_scale.onchange = function(){
            var val = this.value / data.delimeter;
            self.model.set("horLen", val);
            this.nextSibling.value = val;
        }


        var ver_scale = document.createElement("scale");
        ver_scale.setAttribute("min", data.verLenLimits.minval);
        ver_scale.setAttribute("max", data.verLenLimits.maxval);
        ver_scale.setAttribute("value", data.verLen);
        ver_scale.setAttribute("class", "TSverLen");
        ver_scale.onchange = function(){
            var val = this.value / data.delimeter;
            self.model.set("verLen", val);
            this.nextSibling.value = val;
        }



        var blur_scale = document.createElement("scale");
        blur_scale.setAttribute("min", data.blurLimits.minval);
        blur_scale.setAttribute("max", data.blurLimits.maxval);
        blur_scale.setAttribute("value", data.blur);
        blur_scale.setAttribute("class", "TSblurRadius");
        blur_scale.onchange = function(){
            var val = this.value / data.delimeter;
            self.model.set("blur", val);
            this.nextSibling.value = val;
        }



        elm.append(
            $("<label/>", {'class': "propLabels",  value: "Shadow #" + data.number + ":" }),
            $("<toolbarbutton/>", {'image': "chrome://sir/skin/images/adjustment.png", role: "button", popup:"thepanel"+ data.number}),
            $("<colorpicker/>", {"class": "colorButton", type: "button", disabled: "true", color: data.color,
                click: function () {
                    document.getElementById('colorPicker' + data.number).openPopup(this, 'after_start', 0, 0, false);
                }}),
            $("<panel>", {id: "colorPicker" + data.number, style: "width:520; height: 276; padding: 10px; 10px;",
            noautohide: "true", close: "true", titlebar: "normal", label: "&colorpicker.panel.title;"}),

            $("<panel>", {id: "thepanel" + data.number, class: "controlPanel"}).append(
                $("<vbox>", {align: "start"}).append(
                    $("<hbox>", {'class': "controlHBox"}).append(
                        $("<label />", {'class': "panelLabels", value: "Horizontal Length:"}),
                        hor_scale,
                        $("<textbox />", {'class': "TShorLenvalue txtBox", maxlength: "3", value: data.horLen}),
                        $("<label />", {'class': "unitLabel", value: data.units})
                    ),

                    $("<hbox>", {'class': "controlHBox"}).append(
                        $("<label/>", {'class': "panelLabels", value: "Vertical Length:"}),
                        ver_scale,
                        $("<textbox/>", {'class': "TSverLenvalue txtBox", maxlength: "3", value: data.verLen}),
                        $("<label/>", {'class': "unitLabel", value: data.units})
                    ),

                    $("<hbox>", {'class': "controlHBox"}).append(
                        $("<label/>", {'class': "panelLabels", value: "Blur Radius:"}),
                        blur_scale,
                        $("<textbox/>", {'class': "TSblurRadiusvalue txtBox", maxlength: "3", value: data.blur}),
                        $("<label/>", {'class': "unitLabel", value: data.units})
                    )
                )
            )
        );


    }
}