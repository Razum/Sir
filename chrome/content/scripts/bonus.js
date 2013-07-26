if (!SIR) {
    var SIR = {};
}

SIR.bonus = {

    init: function () {
        this.BuildPxtoEmList();
        this.BuildCrossBrowserColorList();
        this.BuildCrossBrowserFontList();
        this.buildKeyCodes();

        var self = this;
        document.getElementById("tp_hack").addEventListener("click", self.bonusCopyToClipboard, false);


    },

    BuildPxtoEmList: function () {
        var self = this,
            theList = document.getElementById('pxtoemListRows'),
            docFrag = document.createDocumentFragment();

        var units = [
            {px: "6px", em: "0.375em", per: "37.5%", pt: "5pt"},
            {px: "7px", em: "0.438em", per: "43.8%", pt: "5pt"},
            {px: "8px", em: "0.5em", per: "50%", pt: "6pt"},
            {px: "9px", em: "0.563em", per: "56.3%", pt: "7pt"},
            {px: "10px", em: "0.625em", per: "62.5%", pt: "8pt"},
            {px: "11px", em: "0.688em", per: "68.8%", pt: "8pt"},
            {px: "12px", em: "0.75em", per: "75%", pt: "9pt"},
            {px: "13px", em: "0.813em", per: "81.3%", pt: "10pt"},
            {px: "14px", em: "0.875em", per: "87.5%", pt: "11pt"},
            {px: "15px", em: "0.938em", per: "93.8%", pt: "11pt"},
            {px: "16px", em: "1em", per: "100%", pt: "12pt"},
            {px: "17px", em: "1.063em", per: "106.3%", pt: "13pt"},
            {px: "18px", em: "1.125em", per: "112.5%", pt: "14pt"},
            {px: "19px", em: "1.188em", per: "118.8%", pt: "14pt"},
            {px: "20px", em: "1.25em", per: "125%", pt: "15pt"},
            {px: "21px", em: "1.313em", per: "131.3%", pt: "16pt"},
            {px: "22px", em: "1.375em", per: "137.5%", pt: "17pt"},
            {px: "23px", em: "1.438em", per: "143.8%", pt: "17pt"},
            {px: "24px", em: "1.5em", per: "150%", pt: "18pt"}
        ];


        for (var i = 0, len = units.length; i < len; i += 1) {
            var row = document.createElement('row'), cell = document.createElement('label'), unit = units[i];
            cell.setAttribute('value', unit.px);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.setAttribute('value', unit.em);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.setAttribute('value', unit.per);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.setAttribute('value', unit.pt);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);


            docFrag.appendChild(row);
        }
        theList.appendChild(docFrag);

        theList.addEventListener("click", self.bonusCopyToClipboard, false);

    },


    BuildCrossBrowserColorList: function () {
        var self = this;
        var theList = document.getElementById('crossColorListRows'),
            docFrag = document.createDocumentFragment();

        var colors = [
            {name: "AliceBlue", rgb: "rgb(240, 248, 255)", hex: "#F0F8FF"},
            {name: "AntiqueWhite", rgb: "rgb(250, 235, 215)", hex: "#FAEBD7"},
            {name: "Aqua", rgb: "rgb(0, 255, 255)", hex: "#00FFFF"},
            {name: "Aquamarine", rgb: "rgb(127, 255, 212)", hex: "#7FFFD4"},
            {name: "Azure", rgb: "rgb(240, 255, 255)", hex: "#F0FFFF"},
            {name: "Beige", rgb: "rgb(245, 245, 220)", hex: "#F5F5DC"},
            {name: "Bisque", rgb: "rgb(255, 228, 196)", hex: "#FFE4C4"},
            {name: "Black", rgb: "rgb(0, 0, 0)", hex: "#000000"},
            {name: "BlanchedAlmond", rgb: "rgb(255, 235, 205)", hex: "#FFEBCD"},
            {name: "Blue", rgb: "rgb(0, 0, 255)", hex: "#0000FF"},
            {name: "BlueViolet", rgb: "rgb(138, 43, 226)", hex: "#8A2BE2"},
            {name: "Brown", rgb: "rgb(165, 42, 42)", hex: "#A52A2A"},
            {name: "BurlyWood", rgb: "rgb(222, 184, 135)", hex: "#DEB887"},
            {name: "CadetBlue", rgb: "rgb(95, 158, 160)", hex: "#5F9EA0"},
            {name: "Chartreuse", rgb: "rgb(127, 255, 0)", hex: "#7FFF00"},
            {name: "Chocolate", rgb: "rgb(210, 105, 30)", hex: "#D2691E"},
            {name: "Coral", rgb: "rgb(255, 127, 80)", hex: "#FF7F50"},
            {name: "CornflowerBlue", rgb: "rgb(100, 149, 237)", hex: "#6495ED"},
            {name: "Cornsilk", rgb: "rgb(255, 248, 220)", hex: "#FFF8DC"},
            {name: "Crimson", rgb: "rgb(220, 20, 60)", hex: "#DC143C"},
            {name: "Cyan", rgb: "rgb(0, 255, 255)", hex: "#00FFFF"},
            {name: "DarkBlue", rgb: "rgb(0, 0, 139)", hex: "#00008B"},
            {name: "DarkCyan", rgb: "rgb(0, 139, 139)", hex: "#008B8B"},
            {name: "DarkGoldenrod", rgb: "rgb(184, 134, 11)", hex: "#B8860B"},
            {name: "DarkGray", rgb: "rgb(169, 169, 169)", hex: "#A9A9A9"},
            {name: "DarkGreen", rgb: "rgb(0, 100, 0)", hex: "#006400"},
            {name: "DarkKhaki", rgb: "rgb(189, 183, 107)", hex: "#BDB76B"},
            {name: "DarkMagenta", rgb: "rgb(139, 0, 139)", hex: "#8B008B"},
            {name: "DarkOliveGreen", rgb: "rgb(85, 107, 47)", hex: "#556B2F"},
            {name: "DarkOrange", rgb: "rgb(255, 140, 0)", hex: "#FF8C00"},
            {name: "DarkOrchid", rgb: "rgb(153, 50, 204)", hex: "#9932CC"},
            {name: "DarkRed", rgb: "rgb(139, 0, 0)", hex: "#8B0000"},
            {name: "DarkSalmon", rgb: "rgb(233, 150, 122)", hex: "#E9967A"},
            {name: "DarkSeaGreen", rgb: "rgb(143, 188, 143)", hex: "#8FBC8F"},
            {name: "DarkSlateBlue", rgb: "rgb(72, 61, 139)", hex: "#483D8B"},
            {name: "DarkSlateGray", rgb: "rgb(47, 79, 79)", hex: "#2F4F4F"},
            {name: "DarkTurquoise", rgb: "rgb(0, 206, 209)", hex: "#00CED1"},
            {name: "DarkViolet", rgb: "rgb(148, 0, 211)", hex: "#9400D3"},
            {name: "DeepPink", rgb: "rgb(255, 20, 147)", hex: "#FF1493"},
            {name: "DeepSkyBlue", rgb: "rgb(0, 191, 255)", hex: "#00BFFF"},
            {name: "DimGray", rgb: "rgb(105, 105, 105)", hex: "#696969"},
            {name: "DodgerBlue", rgb: "rgb(30, 144, 255)", hex: "#1E90FF"},
            {name: "FireBrick", rgb: "rgb(178, 34, 34)", hex: "#B22222"},
            {name: "FloralWhite", rgb: "rgb(255, 250, 240)", hex: "#FFFAF0"},
            {name: "ForestGreen", rgb: "rgb(34, 139, 34)", hex: "#228B22"},
            {name: "Fuchsia", rgb: "rgb(255, 0, 255)", hex: "#FF00FF"},
            {name: "Gainsboro", rgb: "rgb(220, 220, 220)", hex: "#DCDCDC"},
            {name: "GhostWhite", rgb: "rgb(248, 248, 255)", hex: "#F8F8FF"},
            {name: "Gold", rgb: "rgb(255, 215, 0)", hex: "#FFD700"},
            {name: "Goldenrod", rgb: "rgb(218, 165, 32)", hex: "#DAA520"},
            {name: "Gray", rgb: "rgb(128, 128, 128)", hex: "#808080"},
            {name: "Green", rgb: "rgb(0, 128, 0)", hex: "#008000"},
            {name: "GreenYellow", rgb: "rgb(173, 255, 47)", hex: "#ADFF2F"},
            {name: "Honeydew", rgb: "rgb(240, 255, 240)", hex: "#F0FFF0"},
            {name: "HotPink", rgb: "rgb(255, 105, 180)", hex: "#FF69B4"},
            {name: "IndianRed", rgb: "rgb(205, 92, 92)", hex: "#CD5C5C"},
            {name: "Indigo", rgb: "rgb(75, 0, 130)", hex: "#4B0082"},
            {name: "Ivory", rgb: "rgb(255, 255, 240)", hex: "#FFFFF0"},
            {name: "Khaki", rgb: "rgb(240, 230, 140)", hex: "#F0E68C"},
            {name: "Lavender", rgb: "rgb(230, 230, 250)", hex: "#E6E6FA"},
            {name: "LavenderBlush", rgb: "rgb(255, 240, 245)", hex: "#FFF0F5"},
            {name: "LawnGreen", rgb: "rgb(124, 252, 0)", hex: "#7CFC00"},
            {name: "LemonChiffon", rgb: "rgb(255, 250, 205)", hex: "#FFFACD"},
            {name: "LightBlue", rgb: "rgb(173, 216, 230)", hex: "#ADD8E6"},
            {name: "LightCoral", rgb: "rgb(240, 128, 128)", hex: "#F08080"},
            {name: "LightCyan", rgb: "rgb(224, 255, 255)", hex: "#E0FFFF"},
            {name: "LightGoldenrodYellow", rgb: "rgb(250, 250, 210)", hex: "#FAFAD2"},
            {name: "LightGreen", rgb: "rgb(144, 238, 144)", hex: "#90EE90"},
            {name: "LightGrey", rgb: "rgb(211, 211, 211)", hex: "#D3D3D3"},
            {name: "LightPink", rgb: "rgb(255, 182, 193)", hex: "#FFB6C1"},
            {name: "LightSalmon", rgb: "rgb(255, 160, 122)", hex: "#FFA07A"},
            {name: "LightSeaGreen", rgb: "rgb(32, 178, 170)", hex: "#20B2AA"},
            {name: "LightSkyBlue", rgb: "rgb(135, 206, 250)", hex: "#87CEFA"},
            {name: "LightSlateGray", rgb: "rgb(119, 136, 153)", hex: "#778899"},
            {name: "LightSteelBlue", rgb: "rgb(176, 196, 222)", hex: "#B0C4DE"},
            {name: "LightYellow", rgb: "rgb(255, 255, 224)", hex: "#FFFFE0"},
            {name: "Lime", rgb: "rgb(0, 255, 0)", hex: "#00FF00"},
            {name: "LimeGreen", rgb: "rgb(50, 205, 50)", hex: "#32CD32"},
            {name: "Linen", rgb: "rgb(250, 240, 230)", hex: "#FAF0E6"},
            {name: "Magenta", rgb: "rgb(255, 0, 255)", hex: "#FF00FF"},
            {name: "Maroon", rgb: "rgb(128, 0, 0)", hex: "#800000"},
            {name: "MediumAquamarine", rgb: "rgb(102, 205, 170)", hex: "#66CDAA"},
            {name: "MediumBlue", rgb: "rgb(0, 0, 205)", hex: "#0000CD"},
            {name: "MediumOrchid", rgb: "rgb(186, 85, 211)", hex: "#BA55D3"},
            {name: "MediumPurple", rgb: "rgb(147, 112, 219)", hex: "#9370DB"},
            {name: "MediumSeaGreen", rgb: "rgb(60, 179, 113)", hex: "#3CB371"},
            {name: "MediumSlateBlue", rgb: "rgb(123, 104, 238)", hex: "#7B68EE"},
            {name: "MediumSpringGreen", rgb: "rgb(0, 250, 154)", hex: "#00FA9A"},
            {name: "MediumTurquoise", rgb: "rgb(72, 209, 204)", hex: "#48D1CC"},
            {name: "MediumVioletRed", rgb: "rgb(199, 21, 133)", hex: "#C71585"},
            {name: "MidnightBlue", rgb: "rgb(25, 25, 112)", hex: "#191970"},
            {name: "MintCream", rgb: "rgb(245, 255, 250)", hex: "#F5FFFA"},
            {name: "MistyRose", rgb: "rgb(255, 228, 225)", hex: "#FFE4E1"},
            {name: "Moccasin", rgb: "rgb(255, 228, 181)", hex: "#FFE4B5"},
            {name: "NavajoWhite", rgb: "rgb(255, 222, 173)", hex: "#FFDEAD"},
            {name: "Navy", rgb: "rgb(0, 0, 128)", hex: "#000080"},
            {name: "OldLace", rgb: "rgb(253, 245, 230)", hex: "#FDF5E6"},
            {name: "Olive", rgb: "rgb(128, 128, 0)", hex: "#808000"},
            {name: "OliveDrab", rgb: "rgb(107, 142, 35)", hex: "#6B8E23"},
            {name: "Orange", rgb: "rgb(255, 165, 0)", hex: "#FFA500"},
            {name: "OrangeRed", rgb: "rgb(255, 69, 0)", hex: "#FF4500"},
            {name: "Orchid", rgb: "rgb(218, 112, 214)", hex: "#DA70D6"},
            {name: "PaleGoldenrod", rgb: "rgb(238, 232, 170)", hex: "#EEE8AA"},
            {name: "PaleGreen", rgb: "rgb(152, 251, 152)", hex: "#98FB98"},
            {name: "PaleTurquoise", rgb: "rgb(175, 238, 238)", hex: "#AFEEEE"},
            {name: "PaleVioletRed", rgb: "rgb(219, 112, 147)", hex: "#DB7093"},
            {name: "PapayaWhip", rgb: "rgb(255, 239, 213)", hex: "#FFEFD5"},
            {name: "PeachPuff", rgb: "rgb(255, 218, 185)", hex: "#FFDAB9"},
            {name: "Peru", rgb: "rgb(205, 133, 63)", hex: "#CD853F"},
            {name: "Pink", rgb: "rgb(255, 192, 203)", hex: "#FFC0CB"},
            {name: "Plum", rgb: "rgb(221, 160, 221)", hex: "#DDA0DD"},
            {name: "PowderBlue", rgb: "rgb(176, 224, 230)", hex: "#B0E0E6"},
            {name: "Purple", rgb: "rgb(128, 0, 128)", hex: "#800080"},
            {name: "Red", rgb: "rgb(255, 0, 0)", hex: "#FF0000"},
            {name: "RosyBrown", rgb: "rgb(188, 143, 143)", hex: "#BC8F8F"},
            {name: "RoyalBlue", rgb: "rgb(65, 105, 225)", hex: "#4169E1"},
            {name: "SaddleBrown", rgb: "rgb(139, 69, 19)", hex: "#8B4513"},
            {name: "Salmon", rgb: "rgb(250, 128, 114)", hex: "#FA8072"},
            {name: "SandyBrown", rgb: "rgb(244, 164, 96)", hex: "#F4A460"},
            {name: "SeaGreen", rgb: "rgb(46, 139, 87)", hex: "#2E8B57"},
            {name: "Seashell", rgb: "rgb(255, 245, 238)", hex: "#FFF5EE"},
            {name: "Sienna", rgb: "rgb(160, 82, 45)", hex: "#A0522D"},
            {name: "Silver", rgb: "rgb(192, 192, 192)", hex: "#C0C0C0"},
            {name: "SkyBlue", rgb: "rgb(135, 206, 235)", hex: "#87CEEB"},
            {name: "SlateBlue", rgb: "rgb(106, 90, 205)", hex: "#6A5ACD"},
            {name: "SlateGray", rgb: "rgb(112, 128, 144)", hex: "#708090"},
            {name: "Snow", rgb: "rgb(255, 250, 250)", hex: "#FFFAFA"},
            {name: "SpringGreen", rgb: "rgb(0, 255, 127)", hex: "#00FF7F"},
            {name: "SteelBlue", rgb: "rgb(70, 130, 180)", hex: "#4682B4"},
            {name: "Tan", rgb: "rgb(210, 180, 140)", hex: "#D2B48C"},
            {name: "Teal", rgb: "rgb(0, 128, 128)", hex: "#008080"},
            {name: "Thistle", rgb: "rgb(216, 191, 216)", hex: "#D8BFD8"},
            {name: "Tomato", rgb: "rgb(255, 99, 71)", hex: "#FF6347"},
            {name: "Turquoise", rgb: "rgb(64, 224, 208)", hex: "#40E0D0"},
            {name: "Violet", rgb: "rgb(238, 130, 238)", hex: "#EE82EE"},
            {name: "Wheat", rgb: "rgb(245, 222, 179)", hex: "#F5DEB3"},
            {name: "White", rgb: "rgb(255, 255, 255)", hex: "#FFFFFF"},
            {name: "WhiteSmoke", rgb: "rgb(245, 245, 245)", hex: "#F5F5F5"},
            {name: "Yellow", rgb: "rgb(255, 255, 0)", hex: "#FFFF00"},
            {name: "YellowGreen", rgb: "rgb(154, 205, 50)", hex: "#9ACD32"}
        ];
        for (var i = 0, n = colors.length; i < n; i += 1) {
            var row = document.createElement('row'), cell = document.createElement('label'), color = colors[i];
            cell.setAttribute('value', color.name);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.setAttribute('value', color.rgb);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.setAttribute('value', color.hex);
            cell.setAttribute('class', "applyCopy");
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.style.background = color.hex;
            row.appendChild(cell);


            docFrag.appendChild(row);
        }

        theList.appendChild(docFrag);

        theList.addEventListener("click", self.bonusCopyToClipboard, false);

    },

    BuildCrossBrowserFontList: function () {
        var self = this;
        var theList = document.getElementById("crossFontListRows"),
            docFrag = document.createDocumentFragment();

        var fonts = [
            {fontFamily: 'Arial, Helvetica, sans-serif ' },
            {fontFamily: '"Arial Black", Gadget, sans-serif' },
            {fontFamily: '"Comic Sans MS", cursive, sans-serif' },
            {fontFamily: '"Courier New", Courier, monospace' },
            {fontFamily: 'Georgia, serif' },
            {fontFamily: 'Impact, Charcoal, sans-serif' },
            {fontFamily: '"Lucida Console", Monaco, monospace ' },
            {fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' },
            {fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
            {fontFamily: 'Tahoma, Geneva, sans-serif' },
            {fontFamily: '"Times New Roman", Times, serif' },
            {fontFamily: '"Trebuchet MS", Helvetica, sans-serif' },
            {fontFamily: 'Verdana, Geneva, sans-serif' },
            {fontFamily: '"MS Sans Serif", Geneva, sans-serif' },
            {fontFamily: '"MS Serif", "New York", serif ' }
        ];

        var vbox = document.createElement('vbox'),
            labelNormal = document.createElement('label'),
            labelBold = document.createElement('label'),
            labelItalic = document.createElement('label');
        labelNormal.setAttribute("value", "It's just a text!");

        labelBold.setAttribute("value", "It's just a text!");
        labelBold.setAttribute("style", "font-weight:700;");

        labelItalic.setAttribute("value", "It's just a text!");
        labelItalic.setAttribute("style", "font-style: italic;");

        vbox.appendChild(labelNormal);
        vbox.appendChild(labelBold);
        vbox.appendChild(labelItalic);


        for (var i = 0, len = fonts.length; i < len; i += 1) {
            var row = document.createElement('row'),
                label = document.createElement('label'), font = fonts[i];
            label.setAttribute('value', font.fontFamily);
            label.setAttribute('class', "applyCopy");

            var newVbox = vbox.cloneNode(true);

            newVbox.setAttribute('style', "font-family: " + font.fontFamily);

            row.appendChild(label);
            row.appendChild(newVbox);

            docFrag.appendChild(row);
        }
        theList.appendChild(docFrag);
        theList.addEventListener("click", self.bonusCopyToClipboard, false);
    },

    buildKeyCodes: function () {
        var self = this;
        var theList = document.getElementById("keyCodesListRows"),
            docFrag = document.createDocumentFragment();


        var keyCodes = [
            {key: "backspace", ff: 8, chsie: 8, opr: 8},
            {key: "Tab", ff: 9, chsie: 9, opr: 9},
            {key: "Enter", ff: 13, chsie: 13, opr: 13},
            {key: "Shift", ff: 16, chsie: 16, opr: 16},
            {key: "Ctrl", ff: 17, chsie: 17, opr: 17},
            {key: "Alt", ff: 18, chsie: 18, opr: 18},
            {key: "Pause / Break", ff: 19, chsie: 19, opr: 19},
            {key: "Caps Lock", ff: 20, chsie: 20, opr: 20},
            {key: "Esc", ff: 27, chsie: 27, opr: 27},
            {key: "Page Up", ff: 33, chsie: 33, opr: 33},
            {key: "Page Down", ff: 34, chsie: 34, opr: 34},
            {key: "End", ff: 35, chsie: 35, opr: 35},
            {key: "Home", ff: 36, chsie: 36, opr: 36},
            {key: "\u2190", ff: 37, chsie: 37, opr: 37},
            {key: "\u2191", ff: 38, chsie: 38, opr: 38},
            {key: "\u2192", ff: 39, chsie: 39, opr: 39},
            {key: "\u2193", ff: 40, chsie: 40, opr: 40},
            {key: "Insert", ff: 45, chsie: 45, opr: 45},
            {key: "Delete", ff: 46, chsie: 46, opr: 46},
            {key: ")\n0", ff: 48, chsie: 48, opr: 48},
            {key: "!\n1", ff: 49, chsie: 49, opr: 49},
            {key: "@\n2", ff: 50, chsie: 50, opr: 50},
            {key: "#\n3", ff: 51, chsie: 51, opr: 51},
            {key: "$\n4", ff: 52, chsie: 52, opr: 52},
            {key: "%\n5", ff: 53, chsie: 53, opr: 53},
            {key: "^\n6", ff: 54, chsie: 54, opr: 54},
            {key: "&\n7", ff: 55, chsie: 55, opr: 55},
            {key: "*\n8", ff: 56, chsie: 56, opr: 56},
            {key: "(\n9", ff: 57, chsie: 57, opr: 57},
            {key: "a", ff: 65, chsie: 65, opr: 65},
            {key: "b", ff: 66, chsie: 66, opr: 66},
            {key: "c", ff: 67, chsie: 67, opr: 67},
            {key: "d", ff: 68, chsie: 68, opr: 68},
            {key: "e", ff: 69, chsie: 69, opr: 69},
            {key: "f", ff: 70, chsie: 70, opr: 70},
            {key: "g", ff: 71, chsie: 71, opr: 71},
            {key: "h", ff: 72, chsie: 72, opr: 72},
            {key: "i", ff: 73, chsie: 73, opr: 73},
            {key: "j", ff: 74, chsie: 74, opr: 74},
            {key: "k", ff: 75, chsie: 75, opr: 75},
            {key: "l", ff: 76, chsie: 76, opr: 76},
            {key: "m", ff: 77, chsie: 77, opr: 77},
            {key: "n", ff: 78, chsie: 78, opr: 78},
            {key: "o", ff: 79, chsie: 79, opr: 79},
            {key: "p", ff: 80, chsie: 80, opr: 80},
            {key: "q", ff: 81, chsie: 81, opr: 81},
            {key: "r", ff: 82, chsie: 82, opr: 82},
            {key: "s", ff: 83, chsie: 83, opr: 83},
            {key: "t", ff: 84, chsie: 84, opr: 84},
            {key: "u", ff: 85, chsie: 85, opr: 85},
            {key: "v", ff: 86, chsie: 86, opr: 86},
            {key: "w", ff: 87, chsie: 87, opr: 87},
            {key: "x", ff: 88, chsie: 88, opr: 88},
            {key: "y", ff: 89, chsie: 89, opr: 89},
            {key: "z", ff: 90, chsie: 90, opr: 90},
            {key: "Left 'Windows' key", ff: 91, chsie: 91, opr: 91},
            {key: "Right 'Windows' key", ff: 92, chsie: 92, opr: 92},
            {key: "'Context menu' key", ff: 93, chsie: 93, opr: 93},
            {key: "numpad 0\nIns", ff: '96\n45', chsie: '96\n45', opr: '96\n45'},
            {key: "numpad 1\nEnd", ff: '97\n35', chsie: '97\n35', opr: '97\n35'},
            {key: "numpad 2\n\u2193", ff: '98\n40', chsie: '98\n40', opr: '98\n40'},
            {key: "numpad 3\nPgDn", ff: '99\n34', chsie: '99\n34', opr: '99\n34'},
            {key: "numpad 4\n\u2190", ff: '100\n37', chsie: '100\n37', opr: '100\n37'},
            {key: "numpad 5", ff: '101\n12', chsie: '101\n12', opr: '101\n12'},
            {key: "numpad 6\n\u2192", ff: '102\n39', chsie: '102\n39', opr: '102\n39'},
            {key: "numpad 7\nHome", ff: '103\n36', chsie: '103\n36', opr: '103\n36'},
            {key: "numpad 8\n\u2191", ff: '104\n38', chsie: '104\n38', opr: '104\n38'},
            {key: "numpad 9\nPgUp", ff: '105\n33', chsie: '105\n33', opr: '105\n33'},
            {key: "numpad *", ff: 106, chsie: 106, opr: 106},
            {key: "numpad +", ff: 107, chsie: 107, opr: 107},
            {key: "numpad - ", ff: 109, chsie: 109, opr: 109},
            {key: "numpad .\nDel", ff: '110\n46', chsie: '110\n46', opr: '110\n46'},
            {key: "numpad / ", ff: 111, chsie: 111, opr: 111},
            {key: "f1", ff: 112, chsie: 112, opr: 112},
            {key: "f2", ff: 113, chsie: 113, opr: 113},
            {key: "f3", ff: 114, chsie: 114, opr: 114},
            {key: "f4", ff: 115, chsie: 115, opr: 115},
            {key: "f5", ff: 116, chsie: 116, opr: 116},
            {key: "f6", ff: 117, chsie: 117, opr: 117},
            {key: "f7", ff: 118, chsie: 118, opr: 118},
            {key: "f8", ff: 119, chsie: 119, opr: 119},
            {key: "f9", ff: 120, chsie: 120, opr: 120},
            {key: "f10", ff: 121, chsie: 121, opr: 121},
            {key: "f11", ff: 122, chsie: 122, opr: 122},
            {key: "f12", ff: 123, chsie: 123, opr: 123},
            {key: "Num Lock", ff: 144, chsie: 144, opr: 144},
            {key: "Scroll Lock", ff: 145, chsie: 145, opr: 145},
            {key: ":\n;", ff: 59, chsie: 186, opr: 59},
            {key: "+\n=", ff: 61, chsie: 187, opr: 61},
            {key: ",\n<", ff: 188, chsie: 188, opr: 188},
            {key: "-\n_", ff: 173, chsie: 189, opr: 189},
            {key: ".\n>", ff: 190, chsie: 190, opr: 190},
            {key: "?\n/", ff: 191, chsie: 191, opr: 191},
            {key: "~\n`", ff: 192, chsie: 192, opr: 192},
            {key: "{\n[", ff: 219, chsie: 219, opr: 219},
            {key: "|\n\\", ff: 220, chsie: 220, opr: 220},
            {key: "}\n]", ff: 221, chsie: 221, opr: 221},
            {key: "\"\n'", ff: 222, chsie: 222, opr: 222}
        ];


        for (var i = 0, n = keyCodes.length; i < n; i += 1) {
            var row = document.createElement('row'), cell = document.createElement('label'), keycode = keyCodes[i];
            cell.textContent = keycode.key;
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.textContent = keycode.ff;
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.textContent = keycode.chsie;
            row.appendChild(cell);

            cell = document.createElement('label');
            cell.textContent = keycode.opr;
            row.appendChild(cell);

            docFrag.appendChild(row);
        }
        theList.appendChild(docFrag);
    },

    bonusCopyToClipboard: function (event) {

        if (event.button !== 2) {
            return false;
        }

        var trg = event.target;

        if (trg.className.indexOf("applyCopy") !== -1 && trg.getAttribute("value")) {

            var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
            gClipboardHelper.copyString(trg.getAttribute("value"));
        } else if (trg.className === "applyCopy" && trg.textContent) {
            var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
            gClipboardHelper.copyString(trg.textContent);
        }


    }

}