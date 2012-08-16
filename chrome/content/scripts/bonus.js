if (!SIR) {
        var SIR = {};
}

SIR.bonus = {
    
    init: function(){
        
        this.BuildCrossBrowserColorList();
        
        
    },
    
    BuildCrossBrowserColorList: function(){
        
        var theList = document.getElementById('crossColorList');
        
        var colors = [        
                        {name:"AliceBlue",          rgb:"rgb(240, 248, 255)",   hex:"#F0F8FF"},
                        {name:"AntiqueWhite",       rgb:"rgb(250, 235, 215)",   hex:"#FAEBD7"},
                        {name:"Aqua",               rgb:"rgb(0, 255, 255)",     hex:"#00FFFF"},                        
                        {name:"Aquamarine",         rgb:"rgb(127, 255, 212)",   hex:"#7FFFD4"},
                        {name:"Azure",              rgb:"rgb(240, 255, 255)",   hex:"#F0FFFF"},
                        {name:"Beige",              rgb:"rgb(245, 245, 220)",   hex:"#F5F5DC"},
                        {name:"Bisque",             rgb:"rgb(255, 228, 196)",   hex:"#FFE4C4"},
                        {name:"Black",              rgb:"rgb(0, 0, 0)",         hex:"#000000"},
                        {name:"BlanchedAlmond",     rgb:"rgb(255, 235, 205)",   hex:"#FFEBCD"},
                        {name:"Blue",               rgb:"rgb(0, 0, 255)",       hex:"#0000FF"},
                        {name:"BlueViolet",         rgb:"rgb(138, 43, 226)",    hex:"#8A2BE2"},
                        {name:"Brown",              rgb:"rgb(165, 42, 42)",     hex:"#A52A2A"},
                        {name:"BurlyWood",          rgb:"rgb(222, 184, 135)",   hex:"#DEB887"},
                        {name:"CadetBlue",          rgb:"rgb(95, 158, 160)",    hex:"#5F9EA0"},
                        {name:"Chartreuse",         rgb:"rgb(127, 255, 0)",     hex:"#7FFF00"},
                        {name:"Chocolate",          rgb:"rgb(210, 105, 30)",    hex:"#D2691E"},
                        {name:"Coral",              rgb:"rgb(255, 127, 80)",    hex:"#FF7F50"},
                        {name:"CornflowerBlue",     rgb:"rgb(100, 149, 237)",   hex:"#6495ED"},
                        {name:"Cornsilk",           rgb:"rgb(255, 248, 220)",   hex:"#FFF8DC"},
                        {name:"Crimson",            rgb:"rgb(220, 20, 60)",     hex:"#DC143C"},
                        {name:"Cyan",               rgb:"rgb(0, 255, 255)",     hex:"#00FFFF"},
                        {name:"DarkBlue",           rgb:"rgb(0, 0, 139)",       hex:"#00008B"},
                        {name:"DarkCyan",           rgb:"rgb(0, 139, 139)",     hex:"#008B8B"},
                        {name:"DarkGoldenrod",      rgb:"rgb(184, 134, 11)",    hex:"#B8860B"},                                                                        
                        {name:"DarkGray",           rgb:"rgb(169, 169, 169)",   hex:"#A9A9A9"},
                        {name:"DarkGreen",          rgb:"rgb(0, 100, 0)",       hex:"#006400"},
                        {name:"DarkKhaki",          rgb:"rgb(189, 183, 107)",   hex:"#BDB76B"},
                        {name:"DarkMagenta",        rgb:"rgb(139, 0, 139)",     hex:"#8B008B"},
                        {name:"DarkOliveGreen",     rgb:"rgb(85, 107, 47)",     hex:"#556B2F"},
                        {name:"DarkOrange",         rgb:"rgb(255, 140, 0)",     hex:"#FF8C00"},
                        {name:"DarkOrchid",         rgb:"rgb(153, 50, 204)",    hex:"#9932CC"},
                        {name:"DarkRed",            rgb:"rgb(139, 0, 0)",       hex:"#8B0000"},
                        {name:"DarkSalmon",         rgb:"rgb(233, 150, 122)",   hex:"#E9967A"},
                        {name:"DarkSeaGreen",       rgb:"rgb(143, 188, 143)",   hex:"#8FBC8F"},
                        {name:"DarkSlateBlue",      rgb:"rgb(72, 61, 139)",     hex:"#483D8B"},
                        {name:"DarkSlateGray",      rgb:"rgb(47, 79, 79)",      hex:"#2F4F4F"},
                        {name:"DarkTurquoise",      rgb:"rgb(0, 206, 209)",     hex:"#00CED1"},
                        {name:"DarkViolet",         rgb:"rgb(148, 0, 211)",     hex:"#9400D3"},
                        {name:"DeepPink",           rgb:"rgb(255, 20, 147)",    hex:"#FF1493"},
                        {name:"DeepSkyBlue",        rgb:"rgb(0, 191, 255)",     hex:"#00BFFF"},
                        {name:"DimGray",            rgb:"rgb(105, 105, 105)",   hex:"#696969"},                                                
                        {name:"DodgerBlue",         rgb:"rgb(30, 144, 255)",    hex:"#1E90FF"},
                        {name:"FireBrick",          rgb:"rgb(178, 34, 34)",     hex:"#B22222"},
                        {name:"FloralWhite",        rgb:"rgb(255, 250, 240)",   hex:"#FFFAF0"},
                        {name:"ForestGreen",        rgb:"rgb(34, 139, 34)",     hex:"#228B22"},
                        {name:"Fuchsia",            rgb:"rgb(255, 0, 255)",     hex:"#FF00FF"},
                        {name:"Gainsboro",          rgb:"rgb(220, 220, 220)",   hex:"#DCDCDC"},
                        {name:"GhostWhite",         rgb:"rgb(248, 248, 255)",   hex:"#F8F8FF"},
                        {name:"Gold",               rgb:"rgb(255, 215, 0)",     hex:"#FFD700"},
                        {name:"Goldenrod",          rgb:"rgb(218, 165, 32)",    hex:"#DAA520"},
                        {name:"Gray",               rgb:"rgb(128, 128, 128)",   hex:"#808080"},
                        {name:"Green",              rgb:"rgb(0, 128, 0)",       hex:"#008000"},
                        {name:"GreenYellow",        rgb:"rgb(173, 255, 47)",    hex:"#ADFF2F"},
                        {name:"Honeydew",           rgb:"rgb(240, 255, 240)",   hex:"#F0FFF0"},
                        {name:"HotPink",            rgb:"rgb(255, 105, 180)",   hex:"#FF69B4"},
                        {name:"IndianRed",          rgb:"rgb(205, 92, 92)",     hex:"#CD5C5C"},
                        {name:"Indigo",             rgb:"rgb(75, 0, 130)",      hex:"#4B0082"},
                        {name:"Ivory",              rgb:"rgb(255, 255, 240)",   hex:"#FFFFF0"},
                        {name:"Khaki",              rgb:"rgb(240, 230, 140)",   hex:"#F0E68C"},
                        {name:"Lavender",           rgb:"rgb(230, 230, 250)",   hex:"#E6E6FA"},
                        {name:"LavenderBlush",      rgb:"rgb(255, 240, 245)",   hex:"#FFF0F5"},
                        {name:"LawnGreen",          rgb:"rgb(124, 252, 0)",     hex:"#7CFC00"},
                        {name:"LemonChiffon",       rgb:"rgb(255, 250, 205)",   hex:"#FFFACD"},
                        {name:"LightBlue",          rgb:"rgb(173, 216, 230)",   hex:"#ADD8E6"},
                        {name:"LightCoral",         rgb:"rgb(240, 128, 128)",   hex:"#F08080"},
                        {name:"LightCyan",          rgb:"rgb(224, 255, 255)",   hex:"#E0FFFF"},
                        {name:"LightGoldenrodYellow", rgb:"rgb(250, 250, 210)", hex:"#FAFAD2"},
                        {name:"LightGreen",         rgb:"rgb(144, 238, 144)",   hex:"#90EE90"},
                        {name:"LightGrey",          rgb:"rgb(211, 211, 211)",   hex:"#D3D3D3"},                                                                        
                        {name:"LightPink",          rgb:"rgb(255, 182, 193)",   hex:"#FFB6C1"},
                        {name:"LightSalmon",        rgb:"rgb(255, 160, 122)",   hex:"#FFA07A"},
                        {name:"LightSeaGreen",      rgb:"rgb(32, 178, 170)",    hex:"#20B2AA"},
                        {name:"LightSkyBlue",       rgb:"rgb(135, 206, 250)",   hex:"#87CEFA"},
                        {name:"LightSlateGray",     rgb:"rgb(119, 136, 153)",   hex:"#778899"},
                        {name:"LightSteelBlue",     rgb:"rgb(176, 196, 222)",   hex:"#B0C4DE"},
                        {name:"LightYellow",        rgb:"rgb(255, 255, 224)",   hex:"#FFFFE0"},
                        {name:"Lime",               rgb:"rgb(0, 255, 0)",       hex:"#00FF00"},
                        {name:"LimeGreen",          rgb:"rgb(50, 205, 50)",     hex:"#32CD32"},
                        {name:"Linen",              rgb:"rgb(250, 240, 230)",   hex:"#FAF0E6"},
                        {name:"Magenta",            rgb:"rgb(255, 0, 255)",     hex:"#FF00FF"},
                        {name:"Maroon",             rgb:"rgb(128, 0, 0)",       hex:"#800000"},
                        {name:"MediumAquamarine",   rgb:"rgb(102, 205, 170)",   hex:"#66CDAA"},
                        {name:"MediumBlue",         rgb:"rgb(0, 0, 205)",       hex:"#0000CD"},
                        {name:"MediumOrchid",       rgb:"rgb(186, 85, 211)",    hex:"#BA55D3"},
                        {name:"MediumPurple",       rgb:"rgb(147, 112, 219)",   hex:"#9370DB"},
                        {name:"MediumSeaGreen",     rgb:"rgb(60, 179, 113)",    hex:"#3CB371"},
                        {name:"MediumSlateBlue",    rgb:"rgb(123, 104, 238)",   hex:"#7B68EE"},
                        {name:"MediumSpringGreen",  rgb:"rgb(0, 250, 154)",     hex:"#00FA9A"},
                        {name:"MediumTurquoise",    rgb:"rgb(72, 209, 204)",    hex:"#48D1CC"},
                        {name:"MediumVioletRed",    rgb:"rgb(199, 21, 133)",    hex:"#C71585"},
                        {name:"MidnightBlue",       rgb:"rgb(25, 25, 112)",     hex:"#191970"},
                        {name:"MintCream",          rgb:"rgb(245, 255, 250)",   hex:"#F5FFFA"},
                        {name:"MistyRose",          rgb:"rgb(255, 228, 225)",   hex:"#FFE4E1"},
                        {name:"Moccasin",           rgb:"rgb(255, 228, 181)",   hex:"#FFE4B5"},                                                                        
                        {name:"NavajoWhite",        rgb:"rgb(255, 222, 173)",   hex:"#FFDEAD"},
                        {name:"Navy",               rgb:"rgb(0, 0, 128)",       hex:"#000080"},
                        {name:"OldLace",            rgb:"rgb(253, 245, 230)",   hex:"#FDF5E6"},
                        {name:"Olive",              rgb:"rgb(128, 128, 0)",     hex:"#808000"},
                        {name:"OliveDrab",          rgb:"rgb(107, 142, 35)",    hex:"#6B8E23"},
                        {name:"Orange",             rgb:"rgb(255, 165, 0)",     hex:"#FFA500"},
                        {name:"OrangeRed",          rgb:"rgb(255, 69, 0)",      hex:"#FF4500"},
                        {name:"Orchid",             rgb:"rgb(218, 112, 214)",   hex:"#DA70D6"},
                        {name:"PaleGoldenrod",      rgb:"rgb(238, 232, 170)",   hex:"#EEE8AA"},
                        {name:"PaleGreen",          rgb:"rgb(152, 251, 152)",   hex:"#98FB98"},
                        {name:"PaleTurquoise",      rgb:"rgb(175, 238, 238)",   hex:"#AFEEEE"},
                        {name:"PaleVioletRed",      rgb:"rgb(219, 112, 147)",   hex:"#DB7093"},
                        {name:"PapayaWhip",         rgb:"rgb(255, 239, 213)",   hex:"#FFEFD5"},
                        {name:"PeachPuff",          rgb:"rgb(255, 218, 185)",   hex:"#FFDAB9"},
                        {name:"Peru",               rgb:"rgb(205, 133, 63)",    hex:"#CD853F"},
                        {name:"Pink",               rgb:"rgb(255, 192, 203)",   hex:"#FFC0CB"},                                                                                                
                        {name:"Plum",               rgb:"rgb(221, 160, 221)",   hex:"#DDA0DD"},
                        {name:"PowderBlue",         rgb:"rgb(176, 224, 230)",   hex:"#B0E0E6"},
                        {name:"Purple",             rgb:"rgb(128, 0, 128)",     hex:"#800080"},
                        {name:"Red",                rgb:"rgb(255, 0, 0)",       hex:"#FF0000"},
                        {name:"RosyBrown",          rgb:"rgb(188, 143, 143)",   hex:"#BC8F8F"},
                        {name:"RoyalBlue",          rgb:"rgb(65, 105, 225)",    hex:"#4169E1"},
                        {name:"SaddleBrown",        rgb:"rgb(139, 69, 19)",     hex:"#8B4513"},
                        {name:"Salmon",             rgb:"rgb(250, 128, 114)",   hex:"#FA8072"},
                        {name:"SandyBrown",         rgb:"rgb(244, 164, 96)",    hex:"#F4A460"},
                        {name:"SeaGreen",           rgb:"rgb(46, 139, 87)",     hex:"#2E8B57"},
                        {name:"Seashell",           rgb:"rgb(255, 245, 238)",   hex:"#FFF5EE"},
                        {name:"Sienna",             rgb:"rgb(160, 82, 45)",     hex:"#A0522D"},
                        {name:"Silver",             rgb:"rgb(192, 192, 192)",   hex:"#C0C0C0"},
                        {name:"SkyBlue",            rgb:"rgb(135, 206, 235)",   hex:"#87CEEB"},
                        {name:"SlateBlue",          rgb:"rgb(106, 90, 205)",    hex:"#6A5ACD"},
                        {name:"SlateGray",          rgb:"rgb(112, 128, 144)",   hex:"#708090"},
                        {name:"Snow",               rgb:"rgb(255, 250, 250)",   hex:"#FFFAFA"},
                        {name:"SpringGreen",        rgb:"rgb(0, 255, 127)",     hex:"#00FF7F"},
                        {name:"SteelBlue",          rgb:"rgb(70, 130, 180)",    hex:"#4682B4"},
                        {name:"Tan",                rgb:"rgb(210, 180, 140)",   hex:"#D2B48C"},
                        {name:"Teal",               rgb:"rgb(0, 128, 128)",     hex:"#008080"},
                        {name:"Thistle",            rgb:"rgb(216, 191, 216)",   hex:"#D8BFD8"},
                        {name:"Tomato",             rgb:"rgb(255, 99, 71)",     hex:"#FF6347"},
                        {name:"Turquoise",          rgb:"rgb(64, 224, 208)",    hex:"#40E0D0"},
                        {name:"Violet",             rgb:"rgb(238, 130, 238)",   hex:"#EE82EE"},
                        {name:"Wheat",              rgb:"rgb(245, 222, 179)",   hex:"#F5DEB3"},
                        {name:"White",              rgb:"rgb(255, 255, 255)",   hex:"#FFFFFF"},
                        {name:"WhiteSmoke",         rgb:"rgb(245, 245, 245)",   hex:"#F5F5F5"},
                        {name:"Yellow",             rgb:"rgb(255, 255, 0)",     hex:"#FFFF00"},
                        {name:"YellowGreen",        rgb:"rgb(154, 205, 50)",    hex:"#9ACD32"}                                                                                                                        
        ];
              var n = colors.length;           
        for(var i=0;  i<n; i++){
            var row = document.createElement('listitem');
            var cell = document.createElement('listcell');
            cell.setAttribute('label', colors[i].name);
            row.appendChild(cell);
            
            cell = document.createElement('listcell');
            cell.setAttribute('label',  colors[i].rgb);
            row.appendChild(cell);
            
            cell = document.createElement('listcell');
            cell.setAttribute('label',  colors[i].hex);
            row.appendChild(cell);
            
            cell = document.createElement('listcell');
            cell.style.background = colors[i].hex;
            row.appendChild(cell);
            
            
            theList.appendChild(row);                        
        }
        
        
        
    }
    
}