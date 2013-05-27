!function ($) {

  "use strict"; // jshint ;_;


 /* Scroller CLASS DEFINITION
  * ====================== */

  var Scroller = function (element, options) {
    this.options = $.extend({}, $.fn.scroller.defaults, options)
    this.windowHeight = $(window).height() - this.options.offset;
    this.animationDisabled = false;
    this.arrowPrev = this.options.arrowsElm.children(".prev");
    this.arrowNext = this.options.arrowsElm.children(".next");

    if ( this._checkViewport() ) {

      // Upravíme DOM
      this._prepareDOM();

      // Posluchače
      var self = this;
      this.arrowPrev.on("click", function(event) {
        console.log(this);
        console.log(self);
      });
     
    }
    
  }

  /**
   *  Porovnání výšky menu s výškou window
   */
  Scroller.prototype._checkViewport = function () {

    var navigationHeight = this.options.navigationElm.height();

    if ( this.windowHeight < navigationHeight ) {
      return true;
    } else {
      return false;
    }
  
  }

  /**
   *  Úpravy CSS a DOMu + zobrazení navigačních šipek
   */
  Scroller.prototype._prepareDOM = function () {

    var maxItems = Math.floor(this.windowHeight/this.options.itemHeight);
    var panelHeight = (maxItems*this.options.itemHeight)+1;

    this.options.visiblePanelElm.css({
      "height": panelHeight,
      "overflow": "hidden"
    });

    this.options.navigationElm.css({
      "position": "relative",
      "top": 0
    });

    this.options.arrowsElm.show();
  
  }

  /**
   *  Obstarává posun
   */
  Scroller.prototype.slide = function () {

    console.log("sliding!!");
  
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.scroller

  $.fn.scroller = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scroller')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scroller', (data = new Scroller(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scroller.Constructor = Scroller

  $.fn.scroller.defaults = {
    offset:           250,
    itemHeight:       41,
    navigationElm:    $("#panel .nav"),
    visiblePanelElm:  $("#visible-panel"),
    arrowsElm:        $("#arrows"), 
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.scroller.noConflict = function () {
    $.fn.scroller = old
    return this
  }

}(window.jQuery);