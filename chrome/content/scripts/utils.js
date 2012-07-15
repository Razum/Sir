if (!SIR) {
        var SIR = {};
}
SIR.utils = {
        getMousePos: function(canvas, evt) {
                // get canvas position
                var obj = canvas;
                var top = 0;
                var left = 0;
                //while (obj.tagName != 'PANEL') {
                top += obj.offsetTop;
                left += obj.offsetLeft;
                obj = obj.offsetParent;
                //}
                // return relative mouse position
                var mouseX = evt.clientX - left + window.pageXOffset;
                var mouseY = evt.clientY - top + window.pageYOffset;
                return {
                        x: mouseX,
                        y: mouseY
                };
        },
        drawColorSquare: function(canvas, color, imageObj) {
                var colorSquareSize = 100;
                var padding = 10;
                var context = canvas.getContext("2d");
                context.beginPath();
                context.fillStyle = color;
                var squareX = (canvas.width - colorSquareSize + imageObj.width) / 3;
                var squareY = (canvas.height - colorSquareSize) / 2;
                context.fillRect(squareX, squareY, colorSquareSize, colorSquareSize);
                context.strokeRect(squareX, squareY, colorSquareSize, colorSquareSize);
        },
        init: function(imageObj, elem, txt) {
                var padding = 10;
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                var mouseDown = false;
                var inp = elem;
                var txtColor = txt;
                context.strokeStyle = "#444";
                context.lineWidth = 2;
                canvas.onmousedown = function(evt) {
                        mouseDown = true;
                        getColor(evt);
                }, canvas.addEventListener("mouseup", function() {
                        mouseDown = false;
                }, false);
                canvas.addEventListener("mousemove", function(evt) {
                        var mousePos = SIR.utils.getMousePos(canvas, evt);
                        var color = undefined;
                        if (mouseDown && mousePos !== null && mousePos.x > padding && mousePos.x < padding + imageObj.width && mousePos.y > padding && mousePos.y < padding + imageObj.height) {
/*
             * color picker image is 256x256 and is offset by 10px
             * from top and bottom
             */
                                var imageData = context.getImageData(padding, padding, imageObj.width, imageObj.width);
                                var data = imageData.data;
                                var x = mousePos.x - padding;
                                var y = mousePos.y - padding;
                                var red = data[((imageObj.width * y) + x) * 4];
                                var green = data[((imageObj.width * y) + x) * 4 + 1];
                                var blue = data[((imageObj.width * y) + x) * 4 + 2];
                                color = "rgb(" + red + "," + green + "," + blue + ")";
                        }
                        if (color) {
                                SIR.utils.drawColorSquare(canvas, color, imageObj);
                        }
                        if (mouseDown) {
                                getColor(evt);
                        }
                }, false);

                function getColor(evt) {
                        var mousePos = SIR.utils.getMousePos(canvas, evt);
                        var color = undefined;
                        if (mouseDown && mousePos !== null && mousePos.x > padding && mousePos.x < padding + imageObj.width && mousePos.y > padding && mousePos.y < padding + imageObj.height) {
/*
             * color picker image is 256x256 and is offset by 10px
             * from top and bottom
             */
                                var imageData = context.getImageData(padding, padding, imageObj.width, imageObj.width);
                                var data = imageData.data;
                                var x = mousePos.x - padding;
                                var y = mousePos.y - padding;
                                var red = data[((imageObj.width * y) + x) * 4];
                                var green = data[((imageObj.width * y) + x) * 4 + 1];
                                var blue = data[((imageObj.width * y) + x) * 4 + 2];
                                color = "rgb(" + red + "," + green + "," + blue + ")";
                        }
                        if (inp) {
                                inp.color = "#" + SIR.utils.toHEX(red) + SIR.utils.toHEX(green) + SIR.utils.toHEX(blue);
                        }
                        if (txtColor) {
                                txtColor.value = "#" + SIR.utils.toHEX(red) + SIR.utils.toHEX(green) + SIR.utils.toHEX(blue);
                                var txtevt = document.createEvent("HTMLEvents");
                                txtevt.initEvent("change", true, false);
                                txtColor.dispatchEvent(txtevt);
                        }
                        if (color) {
                                SIR.utils.drawColorSquare(canvas, color, imageObj);
                        }
                }
                context.drawImage(imageObj, padding, padding);
                SIR.utils.drawColorSquare(canvas, "white", imageObj);
        },
        panelLoad: function(elem, txt) {
                var imageObj = new Image();
                imageObj.onload = function() {
                        SIR.utils.init(this, elem, txt);
                };
                imageObj.src = "chrome://sir/skin/images/canvas.png";
        },
        toHEX: function(val) {
                val = val.toString(16);
                if (val.length === 1) {
                        val = '0' + val;
                }
                return val.toUpperCase();
        },
        toRGB: function(hex) {
                var color = (hex.charAt(0) == "#") ? hex.substring(1) : hex;
                return {
                        "red": parseInt(color.substring(0, 2), 16),
                        "green": parseInt(color.substring(2, 4), 16),
                        "blue": parseInt(color.substring(4, 6), 16)
                }
        },
        strip_tags: function(input, allowed) {
                // Strips HTML and PHP tags from a string  
                // 
                // version: 1109.2015
                // discuss at: http://phpjs.org/functions/strip_tags    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   improved by: Luke Godfrey
                // +      input by: Pul
                // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   bugfixed by: Onno Marsman    // +      input by: Alex
                // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +      input by: Marc Palau
                // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +      input by: Brett Zamir (http://brett-zamir.me)    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   bugfixed by: Eric Nagel
                // +      input by: Bobby Drake
                // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                // +   bugfixed by: Tomasz Wesolowski    // +      input by: Evertjan Garretsen
                // +    revised by: Rafal Kukawski (http://blog.kukawski.pl/)
                // *     example 1: strip_tags('<p>Kevin</p> <b>van</b> <i>Zonneveld</i>', '<i><b>');
                // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
                // *     example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');    // *     returns 2: '<p>Kevin van Zonneveld</p>'
                // *     example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
                // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
                // *     example 4: strip_tags('1 < 5 5 > 1');
                // *     returns 4: '1 < 5 5 > 1'    // *     example 5: strip_tags('1 <br/> 1');
                // *     returns 5: '1  1'
                // *     example 6: strip_tags('1 <br/> 1', '<br>');
                // *     returns 6: '1  1'
                // *     example 7: strip_tags('1 <br/> 1', '<br><br/>');    // *     returns 7: '1 <br/> 1'
                allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
                var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
                return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
                        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
                });
        },
        
        copyToClipboard: function(str){
            var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
            gClipboardHelper.copyString(str);
            
        }
};