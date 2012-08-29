if (!SIR) {
	var SIR = {};
}


SIR.Item = function(){};
SIR.Item.prototype.init = function(){};
SIR.Item.prototype.onParamsChange = function(){};
SIR.Item.prototype.showCode = function(){};
SIR.Item.prototype.CopyCode = function(){     
    var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].
    getService(Components.interfaces.nsIClipboardHelper);
    gClipboardHelper.copyString(this.txtBox.value);    
    document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copied.png";
    
};

//////////////////
//    RGBA     //
/////////////////
SIR.rgba = new SIR.Item();
	SIR.rgba.init = function() {
	   var self = this;
		this.R = document.getElementById("R");
		this.G = document.getElementById("G");
		this.B = document.getElementById("B");
		this.opacity = document.getElementById("opacity");
		this.rgbaRect = document.getElementById("rgbaBox");
		this.Rlbl = document.getElementById("Rvalue");
		this.Glbl = document.getElementById("Gvalue");
		this.Blbl = document.getElementById("Bvalue");
		this.opacitylbl = document.getElementById("Opacityvalue");
		this.txtBox = document.getElementById("rgbaResult");
		this.R.value = 0;
		this.G.value = 0;
		this.B.value = 0;
		this.opacity.value = 50;
		this.Rlbl.value = this.R.value;
		this.Glbl.value = this.G.value;
		this.Blbl.value = this.B.value;
		this.opacitylbl.value = this.opacity.value / 100;
		this.rgbaRect.style.backgroundColor = "#" + this.R.value + this.G.value + this.B.value;
		this.rgbaRect.style.opacity = this.opacity.value / 100;
		this.showCode(this.R.value, this.G.value, this.B.value, this.opacity.value / 100);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.rgba.onParamsChange = function() {
		this.Rlbl.value = this.R.value;
		this.Glbl.value = this.G.value;
		this.Blbl.value = this.B.value;
		this.opacitylbl.value = this.opacity.value / 100;
		this.rgbaRect.style.backgroundColor = "#" + SIR.utils.toHEX(this.R.value) + SIR.utils.toHEX(this.G.value) + SIR.utils.toHEX(this.B.value);
		this.rgbaRect.style.opacity = this.opacity.value / 100;
		this.showCode(this.R.value, this.G.value, this.B.value, this.opacity.value / 100);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
                
	};
	SIR.rgba.showCode = function(R, G, B, opacity) {
		var forIE = Math.floor(255 * opacity).toString(16) + SIR.utils.toHEX(R) + SIR.utils.toHEX(G) + SIR.utils.toHEX(B);
		var str = "background: rgb(" + R + ", " + G + ", " + B + ");\nbackground: transparent;\nbackground: rgba(" + R + ", " + G + ", " + B + ", " + opacity + ");/* FF3+,Saf3+,Opera 10.10+,Chrome,IE9*/\n";
		str += "filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + forIE + ",endColorstr=#" + forIE + ");/*IE 5.5-7*/\n";
		str += '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#' + forIE + ',endColorstr=#' + forIE + ')";/*IE8*/';
		str += "\nzoom: 1;"
		this.txtBox.value = str;
	};



/////////////////////////
//    Text-shadow     //
///////////////////////

SIR.txtShadow = new SIR.Item();
 
	SIR.txtShadow.init = function() {
		var self = this;
		this.horLen = document.getElementById("TShorLen");
		this.verLen = document.getElementById("TSverLen");
		this.blurRadius = document.getElementById("TSblurRadius");
		this.colorButton = document.getElementById("colorButton");
		this.txtBox = document.getElementById("txtShadowResult");
		this.inscription = document.getElementById("TSinscription");
		this.horLenlbl = document.getElementById("TShorLenvalue");
		this.verLenlbl = document.getElementById("TSverLenvalue");
		this.blurRadiuslbl = document.getElementById("TSblurRadiusvalue");
		this.ColorPicker = new SIR.ColourPicker(document.getElementById('colorPicker'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(109, 107, 107));
		this.ColorPicker.addChangeListener(function() {
			SIR.txtShadow.onParamsChange.call(self);
		});
		this.horLen.value = 3;
		this.verLen.value = 3;
		this.blurRadius.value = 3;
		this.colorButton.color = "#6D6B6B";
		this.horLenlbl.value = this.horLen.value + "px";
		this.verLenlbl.value = this.verLen.value + "px";
		this.blurRadiuslbl.value = this.blurRadius.value + "px";
		this.inscription.style.textShadow = "3px 3px 3px #6D6B6B";
		this.showCode(this.horLen.value, this.verLen.value, this.blurRadius.value, this.colorButton.color);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.txtShadow.onParamsChange = function() {
		this.horLenlbl.value = this.horLen.value + "px";
		this.verLenlbl.value = this.verLen.value + "px";
		this.blurRadiuslbl.value = this.blurRadius.value + "px";
		this.colorButton.color = this.ColorPicker.getColour().getCSSHexadecimalRGB();
		this.inscription.style.textShadow = this.horLen.value + "px " + this.verLen.value + "px " + this.blurRadius.value + "px " + this.colorButton.color;
		this.showCode(this.horLen.value, this.verLen.value, this.blurRadius.value, this.colorButton.color);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	SIR.txtShadow.showCode = function(horLen, verLen, blurRadius, color) {
		var IEdirection = Math.abs(Math.round(Math.atan2(-verLen, horLen) * 180 / Math.PI) - 90) % 360;
		if (IEdirection < 0) {
			IEdirection = 180 + (180 + IEdirection);
		}
		var str = "";
		str += "text-shadow: " + horLen + "px " + verLen + "px " + blurRadius + "px " + color + ";/* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */\n";
		str += '-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=' + blurRadius + ', Direction=' + IEdirection + ', Color=' + color + ')";/*IE 8*/\n';
		str += 'filter: progid:DXImageTransform.Microsoft.Shadow(Strength=' + blurRadius + ', Direction=' + IEdirection + ', Color=' + color + '); /*IE 5.5-7*/'
		this.txtBox.value = str;
	};

/////////////////////////
//    Text-rotation   //
///////////////////////
SIR.txtRotation = new SIR.Item();

	SIR.txtRotation.init = function() {
	   var self = this;
		this.rotDeg = document.getElementById("TRrotDeg");
		this.txtBox = document.getElementById("txtRotationResult");
		this.inscription = document.getElementById("TRinscription");
		this.rotDeglbl = document.getElementById("TRrotDegValue");
		this.rotDeg.value = 0;
		this.rotDeglbl.value = 0 + "\u00B0";
		this.inscription.style.MozTransform = "rotate(0deg)";
		this.showCode(this.rotDeg.value);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.txtRotation.onParamsChange = function() {
		this.rotDeglbl.value = this.rotDeg.value + "\u00B0";
		this.inscription.style.MozTransform = "rotate(" + this.rotDeg.value + "deg)";
		this.showCode(this.rotDeg.value);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	SIR.txtRotation.showCode = function(rotDeg) {
		var IEM11 = Math.cos(rotDeg / 180 * Math.PI).toFixed(6),
			IEM12 = -Math.sin(rotDeg / 180 * Math.PI).toFixed(6),
			IEM21 = Math.sin(rotDeg / 180 * Math.PI).toFixed(6),
			IEM22 = Math.cos(rotDeg / 180 * Math.PI).toFixed(6);
		var str = "";
		str += "transform: rotate(" + rotDeg + "deg);\n";
		str += "-moz-transform: rotate(" + rotDeg + "deg); /*FF3.5+*/\n-o-transform: rotate(" + rotDeg + "deg); /*Opera 10.5*/\n";
		str += "-webkit-transform: rotate(" + rotDeg + "deg); /*Saf3.1+, Chrome*/\n-ms-transform: rotate(" + rotDeg + "deg); /*IE9*/\n";
		str += "filter: progid:DXImageTransform.Microsoft.Matrix(M11=" + IEM11 + ", M12=" + IEM12 + ",M21=" + IEM21 + ", M22=" + IEM22 + ", sizingMethod='auto expand');/*IE6-IE9*/\nzoom: 1;";
		this.txtBox.value = str;
	};

/////////////////////////
//    Transform       //
///////////////////////
SIR.transform = new SIR.Item(); 

	SIR.transform.init = function() {
	   var self = this;
		this.rotDeg = document.getElementById("TrotDeg");
		this.scaleX = document.getElementById("scaleX");
		this.scaleY = document.getElementById("scaleY");
		this.skewX = document.getElementById("skewX");
		this.skewY = document.getElementById("skewY");
		this.TranslateX = document.getElementById("TranslateX");
		this.TranslateY = document.getElementById("TranslateY");
		this.txtBox = document.getElementById("transformResult");
		this.rect = document.getElementById("transformDiv");
		this.rotDeglbl = document.getElementById("rotVal");
		this.scaleXlbl = document.getElementById("scaleXval");
		this.scaleYlbl = document.getElementById("scaleYval");
		this.skewXlbl = document.getElementById("skewXval");
		this.skewYlbl = document.getElementById("skewYval");
		this.TranslateXlbl = document.getElementById("TranslateXval");
		this.TranslateYlbl = document.getElementById("TranslateYval");
		this.rotDeg.value = 0;
		this.scaleX.value = 10;
		this.scaleY.value = 10;
		this.skewX.value = 0;
		this.skewY.value = 0;
		this.TranslateX.value = 0;
		this.TranslateY.value = 0;
		this.rotDeglbl.value = this.rotDeg.value + "\u00B0";
		this.scaleXlbl.value = "\u292b" + this.scaleX.value / 10;
		this.scaleYlbl.value = "\u292b" + this.scaleY.value / 10;
		this.skewXlbl.value = this.skewX.value + "\u00B0";
		this.skewYlbl.value = this.skewY.value + "\u00B0";
		this.TranslateXlbl.value = this.TranslateX.value + "px";
		this.TranslateYlbl.value = this.TranslateY.value + "px";
		this.rect.style.MozTransform = 'rotate(0deg) scale(1, 1) skewX(0deg) skewY(0deg) translate(0, 0)';
		this.showCode(0, 1, 1, 0, 0, 0, 0);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.transform.onParamsChange = function() {
		this.rotDeglbl.value = this.rotDeg.value + "\u00B0";
		this.scaleXlbl.value = "\u292b" + this.scaleX.value / 10;
		this.scaleYlbl.value = "\u292b" + this.scaleY.value / 10;
		this.skewXlbl.value = this.skewX.value + "\u00B0";
		this.skewYlbl.value = this.skewY.value + "\u00B0";
		this.TranslateXlbl.value = this.TranslateX.value + "px";
		this.TranslateYlbl.value = this.TranslateY.value + "px";
		this.rect.style.MozTransform = 'rotate(' + this.rotDeg.value + 'deg) scale(' + this.scaleX.value / 10 + ', ' + this.scaleY.value / 10 + ') skewX(' + this.skewX.value + 'deg) skewY(' + this.skewY.value + 'deg) translate(' + this.TranslateX.value + 'px, ' + this.TranslateY.value + 'px)';
		this.showCode(this.rotDeg.value, this.scaleX.value / 10, this.scaleY.value / 10, this.skewX.value, this.skewY.value, this.TranslateX.value, this.TranslateY.value);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	SIR.transform.showCode = function(rot, scX, scY, skX, skY, trX, trY) {
		var str = "transform: rotate(" + rot + "deg) scale(" + scX + ", " + scY + ") skew(" + skX + "deg, " + skY + "deg) translate(" + trX + "px, " + trY + "px);\n";
		str += "-moz-transform: rotate(" + rot + "deg) scale(" + scX + ", " + scY + ") skewX(" + skX + "deg) skewY(" + skY + "deg) translate(" + trX + "px, " + trY + "px);/* FF3.5+ */\n";
		str += "-webkit-transform: rotate(" + rot + "deg) scale(" + scX + ", " + scY + ") skew(" + skX + "deg, " + skY + "deg) translate(" + trX + "px, " + trY + "px);/*Saf3.1+, Chrome*/\n";
		str += "-o-transform: rotate(" + rot + "deg) scale(" + scX + ", " + scY + ") skew(" + skX + "deg, " + skY + "deg) translate(" + trX + "px, " + trY + "px);/* Opera 10.5 */\n";
		str += "-ms-transform: rotate(" + rot + "deg) scale(" + scX + ", " + scY + ") skew(" + skX + "deg, " + skY + "deg) translate(" + trX + "px, " + trY + "px);/* IE 9 */\n";
		this.txtBox.value = str;
	};

/////////////////////////
//    Box-shadow      //
///////////////////////
SIR.boxShadow = new SIR.Item();
	SIR.boxShadow.init = function() {
		var self = this;
		this.BoxShorLen = document.getElementById("BShorLen");
		this.BoxSverLen = document.getElementById("BSverLen");
		this.BoxSblurRadius = document.getElementById("BSblurRadius");
		this.colorButton = document.getElementById("colorButton");
		this.inset = document.getElementById("insetCheck");
		this.txtBox = document.getElementById("boxShadowResult");
		this.rect = document.getElementById("boxShBox");
		this.horLenlbl = document.getElementById("BShorLenvalue");
		this.verLenlbl = document.getElementById("BSverLenvalue");
		this.blurRadiuslbl = document.getElementById("BSblurRadiusvalue");
		this.ColorPicker = new SIR.ColourPicker(document.getElementById('colorPicker'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(109, 107, 107));
		this.ColorPicker.addChangeListener(function() {
			SIR.boxShadow.onParamsChange.call(self);
		});
		this.BoxShorLen.value = 9;
		this.BoxSverLen.value = 6;
		this.BoxSblurRadius.value = 11;
		this.colorButton.color = "#6D6B6B";
		this.horLenlbl.value = this.BoxShorLen.value + "px";
		this.verLenlbl.value = this.BoxSverLen.value + "px";
		this.blurRadiuslbl.value = this.BoxSblurRadius.value + "px";
		this.rect.style.boxShadow = "9px 6px 11px #6D6B6B";
		this.showCode(this.BoxShorLen.value, this.BoxSverLen.value, this.BoxSblurRadius.value, this.colorButton.color, false);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	},
	SIR.boxShadow.onParamsChange = function() {
		var inset = "";
		this.horLenlbl.value = this.BoxShorLen.value + "px";
		this.verLenlbl.value = this.BoxSverLen.value + "px";
		this.blurRadiuslbl.value = this.BoxSblurRadius.value + "px";
		this.colorButton.color = this.ColorPicker.getColour().getCSSHexadecimalRGB();
		if (this.inset.checked) {
			inset = "inset ";
		}
		this.rect.style.boxShadow = inset + this.BoxShorLen.value + "px " + this.BoxSverLen.value + "px " + this.BoxSblurRadius.value + "px " + this.colorButton.color;
		this.showCode(this.BoxShorLen.value, this.BoxSverLen.value, this.BoxSblurRadius.value, this.colorButton.color, this.inset.checked);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	},
	SIR.boxShadow.showCode = function(horLen, verLen, blurRadius, color, inset) {
		var IEdirection = Math.abs(Math.round(Math.atan2(-verLen, horLen) * 180 / Math.PI) - 90) % 360;
		if (IEdirection < 0) {
			IEdirection = 180 + (180 + IEdirection);
		}
		var ins = "";
		if (inset) {
			ins = "inset "
		}
		var str = ""
		str += "box-shadow: " + ins + horLen + "px " + verLen + "px " + blurRadius + "px " + color + ";\n";
		str += "-moz-box-shadow: " + ins + horLen + "px " + verLen + "px " + blurRadius + "px " + color + ";/*FF 3.5+*/\n-webkit-text-shadow: " + ins + horLen + "px " + verLen + "px " + blurRadius + "px " + color + ";/*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/\n";
		if (!inset) {
			str += '-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=' + blurRadius + ', Direction=' + IEdirection + ', Color=' + color + ')";/*IE 8*/\n';
			str += 'filter: progid:DXImageTransform.Microsoft.Shadow(Strength=' + blurRadius + ', Direction=' + IEdirection + ', Color=' + color + ');/*IE 5.5-7*/';
		}
		this.txtBox.value = str;
	}

/////////////////////////
//    Border-radius   //
///////////////////////
SIR.borderRadius =  new SIR.Item();

	SIR.borderRadius.init = function() {
		var self = this;
		this.brdStl = document.getElementById("border-style-selector");
		this.brdWidth = document.getElementById("borderRadiusWidth");
		this.brdRadTL = document.getElementById("borderRadiusTLeft");
		this.brdRadTR = document.getElementById("borderRadiusTRight");
		this.brdRadBL = document.getElementById("borderRadiusBLeft");
		this.brdRadBR = document.getElementById("borderRadiusBRight");
		this.colorButton = document.getElementById("colorButton");
		this.txtBox = document.getElementById("borderRadiusResult");
		this.rect = document.getElementById("borderRadiusBox");
		this.brdWidthlbl = document.getElementById("borderRadiusWidthVal");
		this.brdRadTLlbl = document.getElementById("borderRadiusTLeftVal");
		this.brdRadTRlbl = document.getElementById("borderRadiusTRightVal");
		this.brdRadBLlbl = document.getElementById("borderRadiusBLeftVal");
		this.brdRadBRlbl = document.getElementById("borderRadiusBRightVal");
		this.ColorPicker = new SIR.ColourPicker(document.getElementById('colorPicker'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(0, 0, 0));
		this.ColorPicker.addChangeListener(function() {
			SIR.borderRadius.onParamsChange.call(self);
		});
		this.brdWidth.value = 2;
		this.brdRadTL.value = 0;
		this.brdRadTR.value = 0;
		this.brdRadBL.value = 0;
		this.brdRadBR.value = 0;
		this.colorButton.color = "#000";
		this.brdWidthlbl.value = this.brdWidth.value + "px";
		this.brdRadTLlbl.value = this.brdRadTL.value + "px";
		this.brdRadTRlbl.value = this.brdRadTR.value + "px";
		this.brdRadBLlbl.value = this.brdRadBL.value + "px";
		this.brdRadBRlbl.value = this.brdRadBR.value + "px";
		this.rect.style.border = "2px solid #000"
		this.rect.style.borderTopLeftRadius = "0px";
		this.rect.style.borderTopRightRadius = "0px";
		this.rect.style.borderBottomLeftRadius = "0px";
		this.rect.style.borderBottomRightRadius = "0px";
		this.showCode(this.brdWidth.value, "solid", this.colorButton.color, this.brdRadTL.value, this.brdRadTR.value, this.brdRadBL.value, this.brdRadBR.value);
	
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
    };
	SIR.borderRadius.onParamsChange = function() {
		this.brdWidthlbl.value = this.brdWidth.value + "px";
		this.brdRadTLlbl.value = this.brdRadTL.value + "px";
		this.brdRadTRlbl.value = this.brdRadTR.value + "px";
		this.brdRadBLlbl.value = this.brdRadBL.value + "px";
		this.brdRadBRlbl.value = this.brdRadBR.value + "px";
		this.colorButton.color = this.ColorPicker.getColour().getCSSHexadecimalRGB();
		this.rect.style.borderWidth = this.brdWidth.value + "px";
		this.rect.style.borderStyle = this.brdStl.value;
		this.rect.style.borderColor = this.colorButton.color;
		this.rect.style.borderTopLeftRadius = this.brdRadTL.value + "px";
		this.rect.style.borderTopRightRadius = this.brdRadTR.value + "px";
		this.rect.style.borderBottomLeftRadius = this.brdRadBL.value + "px";
		this.rect.style.borderBottomRightRadius = this.brdRadBR.value + "px";
		this.showCode(this.brdWidth.value, this.brdStl.value, this.colorButton.color, this.brdRadTL.value, this.brdRadTR.value, this.brdRadBL.value, this.brdRadBR.value);
	
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
    };
	SIR.borderRadius.showCode = function(width, style, color, TL, TR, BL, BR) {
		var str = "border: " + width + "px " + style + " " + color + ";\n";
		if (TL == TR && TR == BL && BL == BR) {
			str += "border-radius: " + TL + "px;\n";
			str += "/*Firefox*/\n";
			str += "-moz-border-radius: " + TL + "px;\n";
			str += "/*Safari, Chrome*/\n";
			str += "-webkit-border-radius: " + TL + "px;\n";
			this.txtBox.value = str;
			return true;
		}
		str += "border-top-left-radius: " + TL + "px;\n";
		str += "border-top-right-radius: " + TR + "px;\n";
		str += "border-bottom-left-radius: " + BL + "px;\n";
		str += "border-bottom-right-radius: " + BR + "px;\n";
		str += "/*Firefox*/\n";
		str += "-moz-border-top-left-radius: " + TL + "px;\n";
		str += "-moz-border-top-right-radius: " + TR + "px;\n";
		str += "-moz-border-bottom-left-radius: " + BL + "px;\n";
		str += "-moz-border-bottom-right-radius: " + BR + "px;\n";
		str += "/*Safari, Chrome*/\n";
		str += "-webkit-border-top-left-radius: " + TL + "px;\n";
		str += "-webkit-border-top-right-radius: " + TR + "px;\n";
		str += "-webkit-border-bottom-left-radius: " + BL + "px;\n";
		str += "-webkit-border-bottom-right-radius: " + BR + "px;\n";
		this.txtBox.value = str;
	};

/////////////////////////
//    Columns         //
///////////////////////
SIR.txtColumn = new SIR.Item()
	SIR.txtColumn.init = function() {
	   var self = this;
		this.colCount = document.getElementById("txtColumnCount");
		this.colGap = document.getElementById("txtColumnGap");
		this.colRule = document.getElementById("column-rule-selector");
		this.txtBox = document.getElementById("txtColumnResult");
		this.desc = document.getElementById("txtColDesc");
		this.desc.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
		this.colCountlbl = document.getElementById("txtColumnCountValue");
		this.colGaplbl = document.getElementById("txtColumnGapValue");
		this.colCount.value = 1;
		this.colGap.value = 0;
		this.colCountlbl.value = this.colCount.value;
		this.colGaplbl.value = this.colGap.value;
		this.desc.style.MozColumnCount = 1;
		this.desc.style.MozColumnGap = "0px";
		this.desc.style.MozColumnRule = "none";
		this.showCode(1, 0, "none");
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.txtColumn.onParamsChange = function() {
		this.colCountlbl.value = this.colCount.value;
		this.colGaplbl.value = this.colGap.value + "px";
		this.desc.style.MozColumnCount = this.colCount.value;
		this.desc.style.MozColumnGap = this.colGap.value + "px";
		this.desc.style.MozColumnRule = this.colRule.value;
		this.showCode(this.colCount.value, this.colGap.value, this.colRule.value);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	SIR.txtColumn.showCode = function(count, gap, rule) {
		var str = "";
		str += "/* Opera 11+*/\n";
		str += "column-count:" + count + ";\ncolumn-gap:" + gap + "px;\ncolumn-rule:" + rule + ";\n";
		str += "/* FF 3.5+*/\n";
		str += "-moz-column-count:" + count + ";\n-moz-column-gap:" + gap + "px;\n-moz-column-rule:" + rule + ";\n";
		str += "/*Saf3, Chrome*/\n";
		str += "-webkit-column-count:" + count + ";\n-webkit-column-gap:" + gap + "px;\n-webkit-column-rule:" + rule + ";";
		this.txtBox.value = str;
	};

/////////////////////////
//    Gradient        //
///////////////////////
SIR.gradient = new SIR.Item();
	SIR.gradient.init = function() {
		var self = this;
		this.dir = document.getElementById("dir");
		this.from = document.getElementById("colorButtonFrom");
		this.to = document.getElementById("colorButtonTo");
		this.rect = document.getElementById("gradientField");
		this.txtBox = document.getElementById("gradientResult");
		this.ColorPickerFrom = new SIR.ColourPicker(document.getElementById('colorPickerFrom'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(19, 1, 254));
		this.ColorPickerTo = new SIR.ColourPicker(document.getElementById('colorPickerTo'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(244, 246, 12));
		this.from.color = "#1301FE";
		this.to.color = "#F4F60C";
		this.rect.style.backgroundImage = '-moz-linear-gradient(top, #1301FE, #F4F60C)';
		this.ColorPickerFrom.addChangeListener(function() {
			SIR.gradient.onParamsChange.call(self);
		});
		this.ColorPickerTo.addChangeListener(function() {
			SIR.gradient.onParamsChange.call(self);
		});
		this.showCode("ltlb", this.from.color, this.to.color);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.gradient.onParamsChange = function() {
		var direction = {
			ltrt: "left, ",
			ltlb: "top, ",
			ltrb: "-45deg, ",
			lbrt: "45deg, "
		}
		this.from.color = this.ColorPickerFrom.getColour().getCSSHexadecimalRGB();
		this.to.color = this.ColorPickerTo.getColour().getCSSHexadecimalRGB();
		this.rect.style.backgroundImage = '-moz-linear-gradient(' + direction[this.dir.value] + this.from.color + ',' + this.to.color + ')';
		this.showCode(this.dir.value, this.from.color, this.to.color);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	SIR.gradient.showCode = function(dir, from, to) {
		var moz = "",
			ie = "",
			web = "";
		switch (dir) {
		case "ltrt":
			moz = "left, ";
			ie = "1";
			web = "left top, right top,"
			break;
		case "ltlb":
			moz = "top, ";
			ie = "0";
			web = "left top, left bottom,"
			break;
		case "ltrb":
			moz = "-45deg, ";
			ie = "1";
			web = "left top, right bottom,"
			break;
		case "lbrt":
			moz = "45deg, ";
			ie = "1";
			web = "left bottom, right top,"
			break;
		}
		var str = "";
		str += "background: " + from + "; /* for non-css3 browsers */\n";
		str += "background: -moz-linear-gradient(" + moz + from + ",  " + to + "); /* for firefox 3.6+ */ \n";
		str += "background: -webkit-gradient(linear, " + web + " from(" + from + "), to(" + to + ")); /* for webkit browsers */\n";
		str += "background: -o-linear-gradient(" + moz + from + "," + to + "); /* Opera 11.10+ */\n";
		str += 'background:-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(StartColorStr=' + from + ', EndColorStr=' + to + ', GradientType=' + ie + ')";\n';
		str += "background: linear-gradient(" + moz + from + "," + to + "); /* W3C */\n";
		str += "filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='" + from + "', endColorstr='" + to + "', GradientType='" + ie + "'); /* for IE */\n";
		this.txtBox.value = str;
	};

/////////////////////////
//    Converter       //
///////////////////////
SIR.converter = {
	init: function() {
		this.rgbhex.init();
		this.emtopx.init();
	},
	rgbhex: {
		RGBisOk: null,
		HEXisOk: null,
		init: function() {
			this.Rin = document.getElementById("convertRin");
			this.Gin = document.getElementById("convertGin");
			this.Bin = document.getElementById("convertBin");
			this.HEXout = document.getElementById("convertHEXout");
			this.rgbError = document.getElementById("rgbError");
			this.rgbButton = document.getElementById("rgbtohexButton");
			this.rgbExmpBox = document.getElementById("rgbExmpBox");
			this.HEXin = document.getElementById("convertHEXin");
			this.Rout = document.getElementById("convertRout");
			this.Gout = document.getElementById("convertGout");
			this.Bout = document.getElementById("convertBout");
			this.hexError = document.getElementById("hexError");
			this.hexButton = document.getElementById("hextorgbButton");
			this.hexExmpBox = document.getElementById("hexExmpBox");
			this.RGBisOk = false;
			this.HEXisOk = false;
		},
		Validation: function(obj, type) {
			var par;
			switch (type) {
			case "rgb":
				par = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(obj.value);
				this.rgbError.setAttribute("hidden", par);
				break;
			case "hex":
				par = /^[0-9A-F]{6}$/i.test(obj.value);
				this.hexError.setAttribute("hidden", par);
				break;
			}
			return par;
		},
		rgbConvert: function() {
			this.RGBisOk = this.Validation(this.Rin, "rgb") && this.Validation(this.Gin, "rgb") && this.Validation(this.Bin, "rgb");
			if (!this.RGBisOk) {
				return false
			}
			var color = "#" + SIR.utils.toHEX(+this.Rin.value) + SIR.utils.toHEX(+this.Gin.value) + SIR.utils.toHEX(+this.Bin.value);
			this.HEXout.value = color;
			this.rgbExmpBox.style.backgroundColor = color;
		},
		hexConvert: function() {
			this.HEXisOk = this.Validation(this.HEXin, "hex");
			if (!this.HEXisOk) {
				return false
			}
			var color = "#" + this.HEXin.value;
			this.hexExmpBox.style.backgroundColor = color;
			var rgb = SIR.utils.toRGB(color);
			this.Rout.value = rgb.red;
			this.Gout.value = rgb.green;
			this.Bout.value = rgb.blue
		}
	},
	emtopx: {
		emtopxIsOk: null,
		init: function() {
			this.basePX = document.getElementById("basePX");
			this.measure = document.getElementById("measure");
			this.result = document.getElementById("emtopxResult");
			this.emtopxVal = document.getElementById("emtopxVal");
			this.emtopxError = document.getElementById("emtopxError");
			this.emtopxButton = document.getElementById("emtopxButton");
			this.emtopxIsOk = false;
		},
		Validation: function(obj, type) {
			var par;
			switch (type) {
			case "em":
				par = /^([0-9]\.[0-9]{1,2}|[1-9][0-9]\.[0-9]|[1-9][0-9]{1,3}|[1-9])$/.test(obj.value);
				this.emtopxError.setAttribute("hidden", par);
				break;
			case "px":
				par = /^([1-9][0-9]{1,3}|[1-9])$/.test(obj.value);
				this.emtopxError.setAttribute("hidden", par);
				break;
			}
			return par;
		},
		emtopxConvert: function() {
			var mes = this.measure.value;
			this.emtopxIsOk = this.Validation(this.basePX, "px") && this.Validation(this.emtopxVal, mes);
			if (!this.emtopxIsOk) {
				return false
			}
			var base = this.basePX.value;
			var val = this.emtopxVal.value;
			switch (mes) {
			case "em":
				this.result.value = (val * base).toFixed() + "px";
				break;
			case "px":
				this.result.value = ((val / base).toFixed(2)).replace(/(\.?0{1,2})$/, "") + "em";
				break;
			}
		}
	}
};
/////////////////////////
//       Cleaner      //
///////////////////////
SIR.Cleaner = {
	init: function() {
		this.delTags = document.getElementById("delTags");
		this.delAttr = document.getElementById("delAttr");
		this.delSpec = document.getElementById("delSpec");
		this.delEmpLines = document.getElementById("delEmptylines");
		this.delExtrSpace = document.getElementById("delExtrSpace");
		this.tagEx = document.getElementById("tagEx");
		this.clButton = document.getElementById("cleanButton");
		this.txtIn = document.getElementById("tagCleanerTxtBox");
		this.onParamsChange();
	},
	onParamsChange: function() {
		document.getElementById("exTagLbl").setAttribute("disabled", !this.delTags.checked);
		if (this.delTags.checked) {
			this.tagEx.removeAttribute("disabled")
		} else {
			this.tagEx.setAttribute("disabled", !this.delTags.checked);
		}
	},
	txtClean: function() {
		var txtCont = this.txtIn.value;
		if (this.delTags.checked) {
			if (this.tagEx.value) {
				var arr = this.tagEx.value.replace(/\s/g, '').split(",");
				var re = /^(\d)|(\W+)/gi;
				var str = "";
				for (var i = 0; i < arr.length; i++) {
					if (!re.test(arr[i])) {
						str += "<" + arr[i] + ">";
					}
				}
				txtCont = SIR.utils.strip_tags(txtCont, str);
			} else {
				txtCont = SIR.utils.strip_tags(txtCont);
			}
		}
		if (this.delAttr.checked) {
			txtCont = txtCont.replace(/<([a-z][a-z0-9]*)(?:[^>]*)?[^>]*?(\/?)>/gi, "<$1$2>");
		}
		if (this.delSpec.checked) {
			txtCont = txtCont.replace(/(&\#\d+;|&[A-Za-z]+;)/g, '');
		}
		if (this.delEmpLines.checked) {
			txtCont = txtCont.replace(/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/g, '');
		}
		if (this.delExtrSpace.checked) {
			txtCont = txtCont.replace(/\s{2,}/g, ' ');
		}
		this.txtIn.value = txtCont;
	}
};
/////////////////////////
//       Outline      //
///////////////////////
SIR.outline = new SIR.Item();
	SIR.outline.init = function() {
		var self = this;
		this.outStyle = document.getElementById("outline-style-selector");
		this.outWidth = document.getElementById("outlineWidth");
		this.outOffset = document.getElementById("outlineOffset");
		this.colorButton = document.getElementById("colorButton");
		this.txtBox = document.getElementById("outlineResult");
		this.rect = document.getElementById("outlineBox");
		this.outWidthlbl = document.getElementById("outlineWidthVal");
		this.outOffsetlbl = document.getElementById("outlineOffsetVal");
		this.ColorPicker = new SIR.ColourPicker(document.getElementById('colorPicker'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(24, 23, 131));
		this.ColorPicker.addChangeListener(function() {
			SIR.outline.onParamsChange.call(self);
		});
		this.outWidth.value = 6;
		this.outOffset.value = 6;
		this.outWidthlbl.value = this.outWidth.value + "px";
		this.outOffsetlbl.value = this.outOffset.value + "px";
		this.colorButton.color = "#181783";
		this.rect.style.outline = "6px solid #181783";
		this.rect.style.outlineOffset = "6px";
		this.showCode(this.outWidth.value, "solid", this.colorButton.color, this.outOffset.value);
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.outline.onParamsChange = function() {
		this.outWidthlbl.value = this.outWidth.value + "px";
		this.outOffsetlbl.value = this.outOffset.value + "px";
		this.colorButton.color = this.ColorPicker.getColour().getCSSHexadecimalRGB();
		this.rect.style.outline = this.outWidth.value + "px " + this.outStyle.value + " " + this.colorButton.color;
		this.rect.style.outlineOffset = this.outOffset.value + "px";
		this.showCode(this.outWidth.value, this.outStyle.value, this.colorButton.color, this.outOffset.value);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	SIR.outline.showCode = function(width, stl, color, offs) {
		str = "";
		str = "outline: " + width + "px " + stl + " " + color + ";\n";
		if (offs != 0) {
			str += "outline-offset: " + offs + "px";
		}
		this.txtBox.value = str;
	};

////////////////////////////////
//       COLOR SELECTOR      //
//////////////////////////////
SIR.colorSelector = {
	init: function() {
		var self = this;
		this.cpTxtRGB = document.getElementById("cpTxtRGB");
		this.cpTxtHSL = document.getElementById("cpTxtHSL");
		this.ColorPicker = new SIR.ColourPicker(document.getElementById('colourPicker'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(0, 0, 0));
		this.cpTxtRGB.value = this.ColorPicker.getColour().getCSSIntegerRGB();
		this.cpTxtHSL.value = this.ColorPicker.getColour().getCSSHSL();
		this.ColorPicker.addChangeListener(function() {
			self.cpTxtRGB.value = self.ColorPicker.getColour().getCSSIntegerRGB();
			self.cpTxtHSL.value = self.ColorPicker.getColour().getCSSHSL();
		});
	}
};
////////////////////////////
//       TRANSITION      //
//////////////////////////
SIR.transition = new SIR.Item();
	SIR.transition.init = function() {
		var self = this;
		this.propSel = document.getElementById("transition-property-selector");
		this.duration = document.getElementById("transitionDuration");
		this.timing = document.getElementById("transition-timing-selector");
		this.txtBox = document.getElementById("transitionResult");
		this.rect = document.getElementById("transitionBox");
		this.durationlbl = document.getElementById("transitionDurationVal");
		this.duration.value = 10;
		this.durationlbl.value = this.duration.value / 10 + "s";
		this.rect.style.MozTransition = "all 1s ease";
		this.showCode("all", 1, "ease");
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.transition.onParamsChange = function() {
		var dur = this.duration.value / 10;
		this.durationlbl.value = dur + "s";
		this.rect.style.MozTransition = this.propSel.value + " " + dur + "s " + this.timing.value;
		this.showCode(this.propSel.value, dur, this.timing.value);
        
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
        
	};
	SIR.transition.showCode = function(prop, dur, timing) {
		var str = "";
		str += "elem {\n";
		str += "\t/****** Use any CSS-rules ******/\n";
		str += "\tborder: 1px solid #E0DEDE;\n\tbackground: #5776bd;\n\tcolor: #f3f128;\n\tpadding: 95px 0 0 75px;\n\n";
		str += "\t-webkit-transition: " + prop + " " + dur + "s " + timing + ";/* Safari 3.2+, Chrome */\n";
		str += "\t-moz-transition: " + prop + " " + dur + "s " + timing + ";/* Firefox 4-15 */\n";
		str += "\t-o-transition: " + prop + " " + dur + "s " + timing + ";/* Opera 10.5-12.00 */\n";
		str += "\ttransition: " + prop + " " + dur + "s " + timing + ";/* Firefox 16+, Opera 12.50+ */\n";
		str += "}\n\n"
		str += "elem:hover {\n";
		str += "\tborder: 40px solid #5776bd;\n\tbackground: #f3f128;\n\tcolor: #5776bd;\n\tpadding: 56px 0 0 36px;\n";
		str += "}\n\n"
		this.txtBox.value = str;
	};

///////////////////////////////
//       TEXT AND FONT      //
/////////////////////////////
SIR.textfont = new SIR.Item();
	SIR.textfont.init = function() {
		var self = this;
		//MAIN SELECTORS
		this.mainSelects = [{
			elem: document.getElementById("textfont-fontFamily"),
			ruleName: "font-family",
			JSruleName: "fontFamily"
		},
		{
			elem: document.getElementById("textfont-textAlign"),
			ruleName: "text-align",
			JSruleName: "textAlign"
		},
		{
			elem: document.getElementById("textfont-fontWeight"),
			ruleName: "font-weight",
			JSruleName: "fontWeight"
		},
		{
			elem: document.getElementById("textfont-textDecor"),
			ruleName: "text-decoration",
			JSruleName: "textDecoration"
		},
		{
			elem: document.getElementById("textfont-textTransform"),
			ruleName: "text-transform",
			JSruleName: "textTransform"
		},
		{
			elem: document.getElementById("textfont-fontStyle"),
			ruleName: "font-style",
			JSruleName: "fontStyle"
		}];
		//EXTRA SELECTS
		this.extraSelects = [{
			elem: document.getElementById("textfont-unicodeBidi"),
			ruleName: "unicode-bidi",
			JSruleName: "unicodeBidi"
		},
		{
			elem: document.getElementById("textfont-Direction"),
			ruleName: "direction",
			JSruleName: "direction"
		},
		{
			elem: document.getElementById("textfont-fontVariant"),
			ruleName: "font-variant",
			JSruleName: "fontVariant"
		},
		{
			elem: document.getElementById("textfont-fontStretch"),
			ruleName: "font-stretch",
			JSruleName: "fontStretch"
		}];
		//SCALES
		this.scales = [{
			elem: document.getElementById("textfont-fontSize"),
			ruleName: "font-size",
			JSruleName: "fontSize",
			lbl: document.getElementById("textfont-fontSizeVal"),
			getVal: function() {
				return this.elem.value + "px";
			}
		},
		{
			elem: document.getElementById("textfont-LineHeight"),
			ruleName: "line-height",
			JSruleName: "lineHeight",
			lbl: document.getElementById("textfont-LineHeightVal"),
			getVal: function() {
				return this.elem.value / 10;
			}
		},
		{
			elem: document.getElementById("textfont-letterSp"),
			ruleName: "letter-spacing",
			JSruleName: "letterSpacing",
			lbl: document.getElementById("textfont-letterSpVal"),
			getVal: function() {
				return this.elem.value + "px";
			}
		},
		{
			elem: document.getElementById("textfont-wordSp"),
			ruleName: "word-spacing",
			JSruleName: "wordSpacing",
			lbl: document.getElementById("textfont-wordSpVal"),
			getVal: function() {
				return this.elem.value + "px";
			}
		}];
		//INSCRIPTION
		this.inscription = document.getElementById("TFinscription");
		//COLORS
		this.colorButton = document.getElementById("colorButton");
		this.backColorButton = document.getElementById("BackColorButton");
		this.colorPickerText = new SIR.ColourPicker(document.getElementById('colorText'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(0, 0, 0));
		this.colorPickerBack = new SIR.ColourPicker(document.getElementById('colorBack'), 'chrome://sir/skin/images/colorpicker/', new SIR.RGBColour(247, 247, 247));
		this.colorPickerText.addChangeListener(function() {
			SIR.textfont.onParamsChange.call(self);
		});
		this.colorPickerBack.addChangeListener(function() {
			SIR.textfont.onParamsChange.call(self);
		});
		//CHECKBOX and group
		this.extraRulesCheckbox = document.getElementById("extraRules");
		this.extraGroup = document.getElementById("extraGroup");
		//RESULT BOX
		this.txtBox = document.getElementById("textfontResult");
		//FIELD
		this.inscriptionBack = document.getElementById("textfontField");
		this.extraRulesCheckbox.addEventListener("command", function() {
			window.opener.SIR.$(self.extraGroup).find("menulist, label").each(function() {
				this.setAttribute("disabled", !self.extraRulesCheckbox.checked);
			});
		}, false);
        
        this.onParamsChange();
        
        document.getElementsByClassName("copyImg")[0].addEventListener("click", function(){self.CopyCode.apply(self, arguments)}, false);
	};
	SIR.textfont.onParamsChange = function() {
	   
       this.inscription.removeAttribute("style");
		this.colorButton.color = this.colorPickerText.getColour().getCSSHexadecimalRGB();
		this.backColorButton.color = this.colorPickerBack.getColour().getCSSHexadecimalRGB();
		this.inscription.style.color = this.colorButton.color;
		this.inscriptionBack.style.background = this.backColorButton.color;
		this.makeStyle(this.scales, this.inscription);
		this.makeStyle(this.mainSelects, this.inscription);
		if (this.extraRulesCheckbox.checked) {
			this.makeStyle(this.extraSelects, this.inscription);
		}
        
        
        this.showCode(this.mainSelects, this.scales, this.extraSelects, this.colorButton.color, this.backColorButton.color);
        document.getElementsByClassName("copyImg")[0].src = "chrome://sir/skin/images/copyToClipboard.png";
	};
	
    SIR.textfont.showCode = function(mainMenu, scales, extraMenu, textColor, backColor) {
	   var str="";
       
       for(var i = 0; i<mainMenu.length; i++){
        str+=mainMenu[i].ruleName + ": " + mainMenu[i].elem.value + ";\n"
       }
       
       for(var j = 0; j<scales.length; j++){
        str+=scales[j].ruleName + ": " + scales[j].getVal() + ";\n"
       }
       
       str+="color: " + textColor + ";\n";
       str+="background: " +  backColor + ";\n";
       
       if (this.extraRulesCheckbox.checked) {
			for(var i = 0; i<extraMenu.length; i++){
                str+=extraMenu[i].ruleName + ": " + extraMenu[i].elem.value + ";\n"
            }
		}
       
       this.txtBox.value = str;
	};
	
    SIR.textfont.makeStyle = function(arrObj, node) {
		var len = arrObj.length;
		for (var i = 0; i < len; i++) {
			if (arrObj[i].lbl && arrObj[i].getVal()) {
				arrObj[i].lbl.value = arrObj[i].getVal();
				node.style[arrObj[i].JSruleName] = arrObj[i].getVal();
			} else {
				node.style[arrObj[i].JSruleName] = arrObj[i].elem.value;
			}
		}
	};
