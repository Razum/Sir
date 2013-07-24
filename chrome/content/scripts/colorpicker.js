if (!SIR) {
        var SIR = {};
}


/* An abstract Colour implementation. Concrete Colour implementations should use
 * an instance of this function as their prototype, and implement the getRGB and
 * getHSL functions. getRGB should return an object representing the RGB
 * components of this Colour, with the red, green, and blue components in the
 * range [0,255] and the alpha component in the range [0,100]. getHSL should
 * return an object representing the HSL components of this Colour, with the hue
 * component in the range [0,360), the saturation and lightness components in
 * the range [0,100], and the alpha component in the range [0,1].
 */
SIR.Colour = function(){

  /* Returns an object representing the RGBA components of this Colour. The red,
   * green, and blue components are converted to integers in the range [0,255].
   * The alpha is a value in the range [0,1].
   */
  this.getIntegerRGB = function(){

    // get the RGB components of this colour
    var rgb = this.getRGB();

    // return the integer components
    return {
      'r' : Math.round(rgb.r),
      'g' : Math.round(rgb.g),
      'b' : Math.round(rgb.b),
      'a' : rgb.a
    };

  };

  /* Returns an object representing the RGBA components of this Colour. The red,
   * green, and blue components are converted to numbers in the range [0,100].
   * The alpha is a value in the range [0,1].
   */
  this.getPercentageRGB = function(){

    // get the RGB components of this colour
    var rgb = this.getRGB();

    // return the percentage components
    return {
      'r' : 100 * rgb.r / 255,
      'g' : 100 * rgb.g / 255,
      'b' : 100 * rgb.b / 255,
      'a' : rgb.a
    };

  };

  /* Returns a string representing this Colour as a CSS hexadecimal RGB colour
   * value - that is, a string of the form #RRGGBB where each of RR, GG, and BB
   * are two-digit hexadecimal numbers.
   */
  this.getCSSHexadecimalRGB = function(){

    // get the integer RGB components
    var rgb = this.getIntegerRGB();

    // determine the hexadecimal equivalents
    var r16 = rgb.r.toString(16);
    var g16 = rgb.g.toString(16);
    var b16 = rgb.b.toString(16);

    // return the CSS RGB colour value
    return '#'
        + (r16.length == 2 ? r16 : '0' + r16)
        + (g16.length == 2 ? g16 : '0' + g16)
        + (b16.length == 2 ? b16 : '0' + b16);

  };

  /* Returns a string representing this Colour as a CSS integer RGB colour
   * value - that is, a string of the form rgb(r,g,b) where each of r, g, and b
   * are integers in the range [0,255].
   */
  this.getCSSIntegerRGB = function(){

    // get the integer RGB components
    var rgb = this.getIntegerRGB();

    // return the CSS RGB colour value
    return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';

  };

  /* Returns a string representing this Colour as a CSS integer RGBA colour
   * value - that is, a string of the form rgba(r,g,b,a) where each of r, g, and
   * b are integers in the range [0,255] and a is in the range [0,1].
   */
  this.getCSSIntegerRGBA = function(){

    // get the integer RGB components
    var rgb = this.getIntegerRGB();

    // return the CSS integer RGBA colour value
    return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')';

  };

  /* Returns a string representing this Colour as a CSS percentage RGB colour
   * value - that is, a string of the form rgb(r%,g%,b%) where each of r, g, and
   * b are in the range [0,100].
   */
  this.getCSSPercentageRGB = function(){

    // get the percentage RGB components
    var rgb = this.getPercentageRGB();

    // return the CSS RGB colour value
    return 'rgb(' + rgb.r + '%,' + rgb.g + '%,' + rgb.b + '%)';

  };

  /* Returns a string representing this Colour as a CSS percentage RGBA colour
   * value - that is, a string of the form rgba(r%,g%,b%,a) where each of r, g,
   * and b are in the range [0,100] and a is in the range [0,1].
   */
  this.getCSSPercentageRGBA = function(){

    // get the percentage RGB components
    var rgb = this.getPercentageRGB();

    // return the CSS percentage RGBA colour value
    return 'rgb(' + rgb.r + '%,' + rgb.g + '%,' + rgb.b + '%,' + rgb.a + ')';

  };

  /* Returns a string representing this Colour as a CSS HSL colour value - that
   * is, a string of the form hsl(h,s%,l%) where h is in the range [0,360) and
   * s and l are in the range [0,100].
   */
  this.getCSSHSL = function(){

    // get the HSL components
    var hsl = this.getHSL();

    // return the CSS HSL colour value
    return 'hsl(' + Math.round(hsl.h) + ', ' + Math.round(hsl.s) + '%, ' + Math.round(hsl.l) + '%)';

  };

  /* Returns a string representing this Colour as a CSS HSLA colour value - that
   * is, a string of the form hsla(h,s%,l%,a) where h is in the range [0,360),
   * s and l are in the range [0,100], and a is in the range [0,1].
   */
  this.getCSSHSLA = function(){

    // get the HSL components
    var hsl = this.getHSL();

    // return the CSS HSL colour value
    return 'hsl(' + hsl.h + ',' + hsl.s + '%,' + hsl.l + '%,' + hsl.a + ')';

  };

  /* Sets the colour of the specified node to this Colour. This function sets
   * the CSS 'color' property for the node. The parameter is:
   *
   * node - the node whose colour should be set
   */
  this.setNodeColour = function(node){

    // set the colour of the node
    node.style.color = this.getCSSHexadecimalRGB();

  };

  /* Sets the background colour of the specified node to this Colour. This
   * function sets the CSS 'background-color' property for the node. The
   * parameter is:
   *
   * node - the node whose background colour should be set
   */
  this.setNodeBackgroundColour = function(node){

    // set the background colour of the node
    node.style.backgroundColor = this.getCSSHexadecimalRGB();

  };

}






















/* Creates a colour specified in the RGB colour space, with an optional alpha
 * component. The parameters are:
 *
 * r - the red component, clipped to the range [0,255]
 * g - the green component, clipped to the range [0,255]
 * b - the blue component, clipped to the range [0,255]
 * a - the alpha component, clipped to the range [0,1] - this parameter is
 *     optional and defaults to 1
 */

SIR.RGBColour = function(r, g, b, a){

  // store the alpha component after clipping it if necessary
  var alpha = (a === undefined ? 1 : Math.max(0, Math.min(1, a)));

  // store the RGB components after clipping them if necessary
  var rgb =
      {
        'r' : Math.max(0, Math.min(255, r)),
        'g' : Math.max(0, Math.min(255, g)),
        'b' : Math.max(0, Math.min(255, b))
      };

  // initialise the HSV and HSL components to null
  var hsv = null;
  var hsl = null;

  /* Returns the HSV or HSL hue component of this RGBColour. The hue is in the
   * range [0,360). The parameters are:
   *
   * maximum - the maximum of the RGB component values
   * range   - the range of the RGB component values
   */
  function getHue(maximum, range){

    // check whether the range is zero
    if (range == 0){

      // set the hue to zero (any hue is acceptable as the colour is grey)
      var hue = 0;

    }else{

      // determine which of the components has the highest value and set the hue
      switch (maximum){

        // red has the highest value
        case rgb.r:
          var hue = (rgb.g - rgb.b) / range * 60;
          if (hue < 0) hue += 360;
          break;

        // green has the highest value
        case rgb.g:
          var hue = (rgb.b - rgb.r) / range * 60 + 120;
          break;

        // blue has the highest value
        case rgb.b:
          var hue = (rgb.r - rgb.g) / range * 60 + 240;
          break;

      }

    }

    // return the hue
    return hue;

  }

  /* Calculates and stores the HSV components of this RGBColour so that they can
   * be returned be the getHSV function.
   */
  function calculateHSV(){

    // get the maximum and range of the RGB component values
    var maximum = Math.max(rgb.r, rgb.g, rgb.b);
    var range   = maximum - Math.min(rgb.r, rgb.g, rgb.b);

    // store the HSV components
    hsv =
        {
          'h' : getHue(maximum, range),
          's' : (maximum == 0 ? 0 : 100 * range / maximum),
          'v' : maximum / 2.55
        };

  }

  /* Calculates and stores the HSL components of this RGBColour so that they can
   * be returned be the getHSL function.
   */
  function calculateHSL(){

    // get the maximum and range of the RGB component values
    var maximum = Math.max(rgb.r, rgb.g, rgb.b);
    var range   = maximum - Math.min(rgb.r, rgb.g, rgb.b);

    // determine the lightness in the range [0,1]
    var l = maximum / 255 - range / 510;

    // store the HSL components
    hsl =
        {
          'h' : getHue(maximum, range),
          's' : (range == 0 ? 0 : range / 2.55 / (l < 0.5 ? l * 2 : 2 - l * 2)),
          'l' : 100 * l
        };

  }

  /* Returns the RGB and alpha components of this RGBColour as an object with r,
   * g, b, and a properties. r, g, and b are in the range [0,255] and a is in
   * the range [0,1].
   */
  this.getRGB = function(){

    // return the RGB components
    return {
      'r' : rgb.r,
      'g' : rgb.g,
      'b' : rgb.b,
      'a' : alpha
    };

  };

  /* Returns the HSV and alpha components of this RGBColour as an object with h,
   * s, v, and a properties. h is in the range [0,360), s and v are in the range
   * [0,100], and a is in the range [0,1].
   */
  this.getHSV = function(){

    // calculate the HSV components if necessary
    if (hsv == null) calculateHSV();

    // return the HSV components
    return {
      'h' : hsv.h,
      's' : hsv.s,
      'v' : hsv.v,
      'a' : alpha
    };

  };

  /* Returns the HSL and alpha components of this RGBColour as an object with h,
   * s, l, and a properties. h is in the range [0,360), s and l are in the range
   * [0,100], and a is in the range [0,1].
   */
  this.getHSL = function(){

    // calculate the HSV components if necessary
    if (hsl == null) calculateHSL();

    // return the HSL components
    return {
      'h' : hsl.h,
      's' : hsl.s,
      'l' : hsl.l,
      'a' : alpha
    };

  };

}


SIR.RGBColour.prototype = new SIR.Colour();











/* Creates a colour specified in the HSV colour space, with an optional alpha
 * component. The parameters are:
 *
 * h - the hue component, wrapped to the range [0,360)
 * s - the saturation component, clipped to the range [0,100]
 * v - the value component, clipped to the range [0,100]
 * a - the alpha component, clipped to the range [0,1] - this parameter is
 *     optional and defaults to 1
 */

SIR.HSVColour = function(h, s, v, a){

  // store the alpha component after clipping it if necessary
  var alpha = (a === undefined ? 1 : Math.max(0, Math.min(1, a)));

  // store the HSV components after clipping or wrapping them if necessary
  var hsv =
      {
        'h' : (h % 360 + 360) % 360,
        's' : Math.max(0, Math.min(100, s)),
        'v' : Math.max(0, Math.min(100, v))
      };

  // initialise the RGB and HSL components to null
  var rgb = null;
  var hsl = null;

  /* Calculates and stores the RGB components of this HSVColour so that they can
   * be returned be the getRGB function.
   */
  function calculateRGB(){

    // check whether the saturation is zero
    if (hsv.s == 0){

      // set the colour to the appropriate shade of grey
      var r = hsv.v;
      var g = hsv.v;
      var b = hsv.v;

    }else{

      // set some temporary values
      var f  = hsv.h / 60 - Math.floor(hsv.h / 60);
      var p  = hsv.v * (1 - hsv.s / 100);
      var q  = hsv.v * (1 - hsv.s / 100 * f);
      var t  = hsv.v * (1 - hsv.s / 100 * (1 - f));

      // set the RGB colour components to their temporary values
      switch (Math.floor(hsv.h / 60)){
        case 0: var r = hsv.v; var g = t; var b = p; break;
        case 1: var r = q; var g = hsv.v; var b = p; break;
        case 2: var r = p; var g = hsv.v; var b = t; break;
        case 3: var r = p; var g = q; var b = hsv.v; break;
        case 4: var r = t; var g = p; var b = hsv.v; break;
        case 5: var r = hsv.v; var g = p; var b = q; break;
      }

    }

    // store the RGB components
    rgb =
        {
          'r' : r * 2.55,
          'g' : g * 2.55,
          'b' : b * 2.55
        };

  }

  /* Calculates and stores the HSL components of this HSVColour so that they can
   * be returned be the getHSL function.
   */
  function calculateHSL(){

    // determine the lightness in the range [0,100]
    var l = (2 - hsv.s / 100) * hsv.v / 2;

    // store the HSL components
    hsl =
        {
          'h' : hsv.h,
          's' : hsv.s * hsv.v / (l < 50 ? l * 2 : 200 - l * 2),
          'l' : l
        };

    // correct a division-by-zero error
    if (isNaN(hsl.s)) hsl.s = 0;

  }

  /* Returns the RGB and alpha components of this HSVColour as an object with r,
   * g, b, and a properties. r, g, and b are in the range [0,255] and a is in
   * the range [0,1].
   */
  this.getRGB = function(){

    // calculate the RGB components if necessary
    if (rgb == null) calculateRGB();

    // return the RGB components
    return {
      'r' : rgb.r,
      'g' : rgb.g,
      'b' : rgb.b,
      'a' : alpha
    };

  };

  /* Returns the HSV and alpha components of this HSVColour as an object with h,
   * s, v, and a properties. h is in the range [0,360), s and v are in the range
   * [0,100], and a is in the range [0,1].
   */
  this.getHSV = function(){

    // return the HSV components
    return {
      'h' : hsv.h,
      's' : hsv.s,
      'v' : hsv.v,
      'a' : alpha
    };

  };

  /* Returns the HSL and alpha components of this HSVColour as an object with h,
   * s, l, and a properties. h is in the range [0,360), s and l are in the range
   * [0,100], and a is in the range [0,1].
   */
  this.getHSL = function(){

    // calculate the HSL components if necessary
    if (hsl == null) calculateHSL();

    // return the HSL components
    return {
      'h' : hsl.h,
      's' : hsl.s,
      'l' : hsl.l,
      'a' : alpha
    };

  };

}
SIR.HSVColour.prototype = new SIR.Colour();















/* Creates a colour specified in the HSL colour space, with an optional alpha
 * component. The parameters are:
 *
 * h - the hue component, wrapped to the range [0,360)
 * s - the saturation component, clipped to the range [0,100]
 * l - the lightness component, clipped to the range [0,100]
 * a - the alpha component, clipped to the range [0,1] - this parameter is
 *     optional and defaults to 1
 */

SIR.HSLColour = function(h, s, l, a){

  // store the alpha component after clipping it if necessary
  var alpha = (a === undefined ? 1 : Math.max(0, Math.min(1, a)));

  // store the HSL components after clipping or wrapping them if necessary
  var hsl =
      {
        'h' : (h % 360 + 360) % 360,
        's' : Math.max(0, Math.min(100, s)),
        'l' : Math.max(0, Math.min(100, l))
      };

  // initialise the RGB and HSV components to null
  var rgb = null;
  var hsv = null;

  /* Calculates and stores the RGB components of this HSLColour so that they can
   * be returned be the getRGB function.
   */
  function calculateRGB(){

    // check whether the saturation is zero
    if (hsl.s == 0){

      // store the RGB components representing the appropriate shade of grey
      rgb =
          {
            'r' : hsl.l * 2.55,
            'g' : hsl.l * 2.55,
            'b' : hsl.l * 2.55
          };

    }else{

      // set some temporary values
      var p = hsl.l < 50
            ? hsl.l * (1 + hsl.s / 100)
            : hsl.l + hsl.s - hsl.l * hsl.s / 100;
      var q = 2 * hsl.l - p;

      // initialise the RGB components
      rgb =
          {
            'r' : (h + 120) / 60 % 6,
            'g' : h / 60,
            'b' : (h + 240) / 60 % 6
          };

      // loop over the RGB components
      for (var key in rgb){

        // ensure that the property is not inherited from the root object
        if (rgb.hasOwnProperty(key)){

          // set the component to its value in the range [0,100]
          if (rgb[key] < 1){
            rgb[key] = q + (p - q) * rgb[key];
          }else if (rgb[key] < 3){
            rgb[key] = p;
          }else if (rgb[key] < 4){
            rgb[key] = q + (p - q) * (4 - rgb[key]);
          }else{
            rgb[key] = q;
          }

          // set the component to its value in the range [0,255]
          rgb[key] *= 2.55;

        }

      }

    }

  }

  /* Calculates and stores the HSV components of this HSLColour so that they can
   * be returned be the getHSL function.
   */
  function calculateHSV(){

    // set a temporary value
    var t = hsl.s * (hsl.l < 50 ? hsl.l : 100 - hsl.l) / 100;

    // store the HSV components
    hsv =
        {
          'h' : hsl.h,
          's' : 200 * t / (hsl.l + t),
          'v' : t + hsl.l
        };

    // correct a division-by-zero error
    if (isNaN(hsv.s)) hsv.s = 0;

  }

  /* Returns the RGB and alpha components of this HSLColour as an object with r,
   * g, b, and a properties. r, g, and b are in the range [0,255] and a is in
   * the range [0,1].
   */
  this.getRGB = function(){

    // calculate the RGB components if necessary
    if (rgb == null) calculateRGB();

    // return the RGB components
    return {
      'r' : rgb.r,
      'g' : rgb.g,
      'b' : rgb.b,
      'a' : alpha
    };

  };

  /* Returns the HSV and alpha components of this HSLColour as an object with h,
   * s, v, and a properties. h is in the range [0,360), s and v are in the range
   * [0,100], and a is in the range [0,1].
   */
  this.getHSV = function(){

    // calculate the HSV components if necessary
    if (hsv == null) calculateHSV();

    // return the HSV components
    return {
      'h' : hsv.h,
      's' : hsv.s,
      'v' : hsv.v,
      'a' : alpha
    };

  };

  /* Returns the HSL and alpha components of this HSLColour as an object with h,
   * s, l, and a properties. h is in the range [0,360), s and l are in the range
   * [0,100], and a is in the range [0,1].
   */
  this.getHSL = function(){

    // return the HSL components
    return {
      'h' : hsl.h,
      's' : hsl.s,
      'l' : hsl.l,
      'a' : alpha
    };

  };

}
SIR.HSLColour.prototype = new SIR.Colour();










//////////////////////////////////////////////////////////////////////////////////////////////
//********************************************************************************************
//////////////////////////////////////////////////////////////////////////////////////////////




/* Creates a new ColourPicker. A ColourPicker is a widget allowing a user to
 * choose a colour using either a colour square and a hue slider, or by
 * specifying the colour exactly in the RGB, HSV, or HSL colour spaces. The
 * parameters are:
 *
 * node           - the DOM node into which to insert the ColourPicker - the
 *                  ColourPicker is appended to this node as a child
 * imageDirectory - the path to the images used by the ColourPicker - this may
 *                  be an absolute path or a path relative to the page, and
 *                  should be the empty string if the images reside in the same
 *                  directory as the page itself
 * defaultColour  - a Colour object representing the default colour to display -
 *                  this paramater is optional and defaults to black
 */
SIR.ColourPicker = function(node, imageDirectory, defaultColour){

  // the current colour
  var colour = (defaultColour ? defaultColour : new SIR.RGBColour(0, 0, 0));

  // a list of the component input boxes
  var componentInputBoxes = [];

  // the mouse button status
  var mouseDown = false;

  // the mouse co-ordinates relative to the top left of the screen
  var mouseX = null;
  var mouseY = null;

  // whether the circle (true) or pointers (false) are being dragged
  var draggingCircle = null;

  // the mouse pointer co-ordinates when dragging started
  var dragMouseX = null;
  var dragMouseY = null;

  // the last mouse pointer co-ordinates when dragging
  var dragLastMouseX = null;
  var dragLastMouseY = null;

  // the offsets to use when dragging
  var dragOffsetX = 0;
  var dragOffsetY = 0;

  // the interval used to update when dragging
  var dragInterval = null;

  // the change listeners
  var changeListeners = [];

  // create and style the main colour picker div
  var htmlns = "http://www.w3.org/1999/xhtml";
  
  var colourPicker            = document.createElementNS(htmlns, 'div');
  colourPicker.style.position = 'relative';
  colourPicker.style.width    = '500px';
  colourPicker.style.height   = '256px';

  // create and style the main colour square div
  var colourSquare = document.createElementNS(htmlns, 'div');
  colourPicker.appendChild(colourSquare);
  colourSquare.style.position = 'absolute';
  //colourSquare.style.top      = '0px';
  colourSquare.style.width    = '256px';
  colourSquare.style.height   = '256px';

  // create and style the white fade on the colour square
  var colourSquareWhiteFade = document.createElementNS(htmlns, 'div');
  colourSquare.appendChild(colourSquareWhiteFade);
  if (window.XMLHttpRequest){
    colourSquareWhiteFade.style.background =
        'url("' + imageDirectory + 'white-fade.png") repeat-y top left';
  }else{
    colourSquareWhiteFade.style.width  = '200px';
    colourSquareWhiteFade.style.height = '200px';
  }

  // create and style the black fade on the colour square
  var colourSquareBlackFade = document.createElementNS(htmlns, 'div');
  colourSquareWhiteFade.appendChild(colourSquareBlackFade);
  if (window.XMLHttpRequest){
    colourSquareBlackFade.style.background =
        'url("' + imageDirectory + 'black-fade.png") repeat-x top left';
  }else{
    colourSquareBlackFade.style.width  = '200px';
    colourSquareBlackFade.style.height = '200px';

  }

  // create and style the circle on the colour square
  var circle = document.createElementNS(htmlns, 'div');
  colourSquareBlackFade.appendChild(circle);
  if (window.XMLHttpRequest){
    circle.style.backgroundImage  = 'url("' + imageDirectory + 'circle.png")';
  }else{
    circle.style.backgroundImage  = 'url("' + imageDirectory + 'square.png")';
  }
  circle.style.backgroundRepeat = 'no-repeat';
  circle.style.width            = '256px';
  circle.style.height           = '256px';
  circle.style.cursor           = 'crosshair';

  // create and style the hue bar
  var hueBar = document.createElementNS(htmlns, 'div');
  colourPicker.appendChild(hueBar);
  hueBar.style.background =
      'url("' + imageDirectory + 'hue-bar.png") repeat-x top left';
  hueBar.style.position = 'absolute';
  hueBar.style.left     = '278px';
  hueBar.style.top      = '0px';
  hueBar.style.width    = '16px';
  hueBar.style.height   = '256px';

  // create and style the pointers
  var pointers = document.createElementNS(htmlns, 'div');
  colourPicker.appendChild(pointers);
  pointers.style.backgroundImage  = 'url("' + imageDirectory + 'pointers.png")';
  pointers.style.backgroundRepeat = 'no-repeat';
  pointers.style.position         = 'absolute';
  pointers.style.left             = '266px';
  pointers.style.top              = '-7px';
  pointers.style.width            = '40px';
  pointers.style.height           = '270px';
  pointers.style.cursor           = 'crosshair';

  // create the preview
  var preview = document.createElementNS(htmlns, 'div');
  colourPicker.appendChild(preview);
  preview.style.position = 'absolute';
  preview.style.left     = '307px';
  preview.style.top      = '10px';
  preview.style.width    = '100px';
  preview.style.height   = '100px';

  // create the component input boxes
  createComponentcomponentInputBoxes(
      ['R', 'G', 'B'],
      ['', '', ''],
      314,
      116,
      updateFromRGB);
  createComponentcomponentInputBoxes(
      ['H', 'S', 'V'],
      ['\u00B0', '%', '%'],
      420,
      0,
      updateFromHSV);
  createComponentcomponentInputBoxes(
      ['H', 'S', 'L'],
      ['\u00B0', '%', '%'],
      420,
      116,
      updateFromHSL);

  // create the hexadecimal input box label
  var heximdecimalBoxLabel = document.createElementNS(htmlns, 'div');
  heximdecimalBoxLabel.appendChild(document.createTextNode('Hexadecimal:'));
  colourPicker.appendChild(heximdecimalBoxLabel);
  heximdecimalBoxLabel.style.position   = 'absolute';
  heximdecimalBoxLabel.style.left       = '304px';
  heximdecimalBoxLabel.style.top        = '232px';
  heximdecimalBoxLabel.style.width      = '100px';
  heximdecimalBoxLabel.style.textAlign  = 'center';
  heximdecimalBoxLabel.style.fontSize   = '14px';
  heximdecimalBoxLabel.style.lineHeight = '21px';

  // create the hexdecimal input box
  
  var hexadecimalInputBox = document.createElementNS(htmlns, "input");
  colourPicker.appendChild(hexadecimalInputBox);
  hexadecimalInputBox.style.position   = 'absolute';
  hexadecimalInputBox.style.left       = '420px';
  hexadecimalInputBox.style.top        = '232px';
  hexadecimalInputBox.style.width      = '78px';
  hexadecimalInputBox.style.textAlign  = 'center';
  hexadecimalInputBox.style.fontFamily = 'monospace';

  // listen for a key up event
  if (hexadecimalInputBox.addEventListener){
    hexadecimalInputBox.addEventListener('keyup', updateFromHexadecimal, false);
  }

  // initialise the colour
  updateColour();

  // attach the colour picker to the document
  node.appendChild(colourPicker);

  // listen for a mouse up or mouse down event
  if (window.addEventListener){
    window.addEventListener('mouseup', mouseUpListener, false);
    circle.addEventListener('mousedown', circleStartDrag, false);
    pointers.addEventListener('mousedown', pointersStartDrag, false);
  }

  /* Creates the input boxes for a set of component values. The parameters are:
   *
   * components - the labels for the individual components
   * units      - the units for the individual components
   * left       - the offset of the left of the boxes
   * top        - the offset of the top of the boxes
   * updater    - the function to call when the value in a box has chanegd
   */
  function createComponentcomponentInputBoxes(
      components, units, left, top, updater){

    // determine the colour space name
    var colourSpace = components.join('');

    // initialise the list of input boxes for this colour space
    componentInputBoxes[colourSpace] = [];
var htmlns = "http://www.w3.org/1999/xhtml";
    // create the title
    var title = document.createElementNS(htmlns, 'div');
    title.appendChild(document.createTextNode(colourSpace));
    colourPicker.appendChild(title);
    title.style.position   = 'absolute';
    title.style.left       = left + 'px';
    title.style.top        = top  + 'px';
    title.style.width      = '80px';
    title.style.textAlign  = 'center';
    title.style.fontSize   = '14px';
    title.style.lineHeight = '21px';

    // create the individual component boxes
    for (var i = 0; i < 3; i++){

      // create the component input box label
      var boxLabel = document.createElementNS(htmlns, 'div');
      boxLabel.appendChild(document.createTextNode(components[i] + ':'));
      colourPicker.appendChild(boxLabel);
      boxLabel.style.position   = 'absolute';
      boxLabel.style.left       = left + 'px';
      boxLabel.style.top        = (top + 25 * i  +25) + 'px';
      boxLabel.style.width      = '20px';
      boxLabel.style.fontSize   = '14px';
      boxLabel.style.lineHeight = '21px';

      // create the component input box      
      
      var inputBox = document.createElementNS(htmlns, "input");
      colourPicker.appendChild(inputBox);
      inputBox.style.position  = 'absolute';
      inputBox.style.left      = (left + 20) + 'px';
      inputBox.style.top       = (top + 25 * i  +25) + 'px';
      inputBox.style.width     = '38px';
      inputBox.style.textAlign = 'right';

      // listen for a key up event
      if (inputBox.addEventListener){
        inputBox.addEventListener('keyup', updater, false);
      }

      // add the input box to the list of input boxes
      componentInputBoxes[colourSpace][components[i]] = inputBox;

      // create the component input box unit
      var boxUnit = document.createElementNS(htmlns, 'div');
      boxUnit.appendChild(document.createTextNode(units[i]));
      colourPicker.appendChild(boxUnit);
      boxUnit.style.position   = 'absolute';
      boxUnit.style.left       = (left + 65) + 'px';
      boxUnit.style.top        = (top + 25 * i  +25) + 'px';
      boxUnit.style.width      = '15px';
      boxUnit.style.fontSize   = '14px';
      boxUnit.style.lineHeight = '21px';

    }

  }

  /* Updates the colour displayed in the colour picker, based on the values in
   * the RGB input boxes.
   */
  function updateFromRGB(){

    // set the colour based on the values in the RGB input boxes
    colour = new SIR.RGBColour(
        parseInt('0' + componentInputBoxes.RGB.R.value, 10),
        parseInt('0' + componentInputBoxes.RGB.G.value, 10),
        parseInt('0' + componentInputBoxes.RGB.B.value, 10));

    // update the colour
    updateColour();

  }

  /* Updates the colour displayed in the colour picker, based on the values in
   * the HSV input boxes.
   */
  function updateFromHSV(){

    // set the colour based on the values in the HSV input boxes
    colour = new SIR.HSVColour(
        parseInt('0' + componentInputBoxes.HSV.H.value, 10),
        parseInt('0' + componentInputBoxes.HSV.S.value, 10),
        parseInt('0' + componentInputBoxes.HSV.V.value, 10));

    // update the colour
    updateColour();

  }

  /* Updates the colour displayed in the colour picker, based on the values in
   * the HSL input boxes.
   */
  function updateFromHSL(){

    // set the colour based on the values in the HSV input boxes
    colour = new SIR.HSLColour(
        parseInt('0' + componentInputBoxes.HSL.H.value, 10),
        parseInt('0' + componentInputBoxes.HSL.S.value, 10),
        parseInt('0' + componentInputBoxes.HSL.L.value, 10));

    // update the colour
    updateColour();

  }

  /* Updates the colour displayed in the colour picker, based on the value in
   * the hexadecimal input box.
   */
  function updateFromHexadecimal(){

    // obtain the value for the hexadecimal input box
    var value = hexadecimalInputBox.value;

    // check that the value is in the appropriate format
    if (value.match(/^#[0-9a-f]{6}$/i)){

      // set the colour based on the value in the hexadecimal input box
      colour = new SIR.RGBColour(
          parseInt(value.substring(1,3), 16),
          parseInt(value.substring(3,5), 16),
          parseInt(value.substring(5,7), 16));

      // update the colour
      updateColour();

    }

  }

  /* Updates the colour displayed in the colour picker. This function is called
   * by any function which changes the current colour.
   */
  function updateColour(){

    // update the preview of the colour
    preview.style.background = colour.getCSSIntegerRGB();

    // get the RGB, HSV, and HSL components of the colour
    var rgb = colour.getIntegerRGB();
    var hsv = colour.getHSV();
    var hsl = colour.getHSL();

    // update the colour used for the background of the colour square
    colourSquare.style.backgroundColor =
        (new SIR.HSVColour(hsv.h, 100, 100)).getCSSIntegerRGB();

    // update the position of the circle on the colour square
    circle.style.backgroundPosition =
        Math.round(hsv.s / 100 * 255 - 7)
        + 'px '
        + Math.round((100 - hsv.v) / 100 * 255 - 7)
        + 'px';

    // update the position of the pointers
    pointers.style.backgroundPosition =
        '0px '
        + Math.floor(hsv.h / 360 * 256)
        + 'px';

    // update the values in the input boxes
    componentInputBoxes.RGB.R.value = rgb.r;
    componentInputBoxes.RGB.G.value = rgb.g;
    componentInputBoxes.RGB.B.value = rgb.b;
    componentInputBoxes.HSV.H.value = Math.floor(hsv.h);
    componentInputBoxes.HSV.S.value = Math.round(hsv.s);
    componentInputBoxes.HSV.V.value = Math.round(hsv.v);
    componentInputBoxes.HSL.H.value = Math.floor(hsl.h);
    componentInputBoxes.HSL.S.value = Math.round(hsl.s);
    componentInputBoxes.HSL.L.value = Math.round(hsl.l);
    hexadecimalInputBox.value = colour.getCSSHexadecimalRGB();

    // loop over the change listeners, informaing them of the change
    for (var i = 0; i < changeListeners.length; i++){
      changeListeners[i](colour, this);
    }

  }

  /* A listener for the mouse up event. The parameter is:
   *
   * e - the event - if this parameter  is not defined then the global event
   *     object is used instead
   */
   function mouseUpListener(e){

    // get the event object if it was not supplied to the listener
    if (!e) e = window.event;

    // set the button status to up
    mouseDown = false;

  }

  /* A listener for the mouse move event. The parameter is:
   *
   * e - the event - if this parameter is not defined then the global event
   *     object is used instead
   */
  function mouseMoveListener(e){

    // get the event object if it was not supplied to the listener
    if (!e) e = window.event;

    // set the co-ordinates relative to the top-left of the screen
    mouseX = e.screenX;
    mouseY = e.screenY;

    // prevent the browser from responding to the mouse move event
    if (e.preventDefault){
      e.preventDefault();
    }else{
      e.returnValue = false;
    }

  }

  /* Starts dragging the circle. The parameter is:
   *
   * e - the event - if this parameter is not defined then the global event
   *     object is used instead
   */
  function circleStartDrag(e){

    // set that the circle is being dragged
    draggingCircle = true;

    // start the dragging process
    startDrag(e);

  }

  /* Starts dragging the pointers. The parameter is:
   *
   * e - the event - if this parameter is not defined then the global event
   *     object is used instead
   */
  function pointersStartDrag(e){

    // set that the pointers are being dragged
    draggingCircle = false;

    // start the dragging process
    startDrag(e);

  }

  /* Starts dragging the circle or pointers. The parameter is:
   *
   * e - the event - if this parameter is not defined then the global event
   *     object is used instead
   */
  function startDrag(e){

    // check that dragging is not currently occurring
    if (!dragInterval){

      // set the button status to down
      mouseDown = true;

      // get the event object if it was not supplied to the listener
      if (!e) e = window.event;

      // update the mouse co-ordinates with the event that started the drag
      mouseMoveListener(e);

      // listen for mouse move events
      if (document.documentElement.addEventListener){
        document.documentElement.addEventListener('mousemove', mouseMoveListener, false);
      }

      // store the mouse co-ordinates when dragging started
      dragMouseX = mouseX;
      dragMouseY = mouseY;

      // set the last mouse co-ordinates in order to force an update
      dragLastMouseX = null;
      dragLastMouseY = null;

      // store the offsets to use when dragging
      if (e.offsetX){
        dragOffsetX = e.offsetX;
        dragOffsetY = e.offsetY;
      }else if (e.layerX){
        dragOffsetX = e.layerX;
        dragOffsetY = e.layerY;
      }

      // create the circle drag interval
      dragInterval =
          window.setInterval(updateDrag, 20);

    }

  }

  /* Updates the position of the cicle. If the mouse button has been released
   * then the dragging process is stopped.
   */
  function updateDrag(){

    // get the HSV components of the current colour
    var hsv = colour.getHSV();

    // check whether the circle is being dragged
    if (draggingCircle){

      // set the colour to the colour corresponding to the new circle position
      colour =
          new SIR.HSVColour(
              hsv.h,
              (mouseX - dragMouseX + dragOffsetX) / 2.55,
              100 - (mouseY - dragMouseY + dragOffsetY) / 2.55);

    }else{

      // set the colour to the colour corresponding to the new pointers position
      colour =
          new SIR.HSVColour(
              Math.max(
                  0,
                  Math.min(
                      359,
                      (mouseY - dragMouseY + dragOffsetY - 7) / 255 * 360)),
              hsv.s,
              hsv.v);

    }

    // update the colour if necessary
    if (dragLastMouseX != mouseX || dragLastMouseY != mouseY) updateColour();

    // store the mouse co-ordinates
    dragLastMouseX = mouseX;
    dragLastMouseY = mouseY;

    // check whether the mouse button has been released
    if (!mouseDown){

      // stop listening for the mouse move event
      if (document.documentElement.removeEventListener){
        document.documentElement.removeEventListener('mousemove', mouseMoveListener, false);
      }

      // clear the circle drag interval
      window.clearInterval(dragInterval);
      dragInterval = null;

    }

  }

  /* Returns the current colour in this ColourPicker as a Colour object. This
   * will be an instance of RGBColour, HSVColour, or HSLColour.
   */
  this.getColour = function(){

    // return the colour
    return colour;

  };

  /* Sets the current colour in this ColourPicker. The parameter is:
   *
   * newColour - the new colour, as a Colour object
   */
  this.setColour = function(newColour){

    // set the new colour
    colour = newColour;

    // update the colour
    updateColour();

  };

  /* Adds a new change listener. When the current colour in this ColourPicker
   * changes, the each listener is called. Each listener is passed two
   * parameters - the first is the current colour, and the second is the
   * ColourPicker itself. The parameter is:
   *
   * listener - the listener function to add
   */
  this.addChangeListener = function(listener){

    // remove the listener if it is already added in order to avoid duplicates
    this.removeChangeListener(listener);

    // add the new listener to the list of listeners
    changeListeners.push(listener);

  };

  /* Removes the specified change listener. The parameter is:
   *
   * listener - the listener function to remove
   */
  this.removeChangeListener = function(listener){

    // loop over the listeners, deleting any matching the supplied listener
    for (var i = changeListeners.length - 1; i >= 0; i--){
      if (changeListeners[i] == listener) changeListeners.splice(i, 1);
    }

  };

}
