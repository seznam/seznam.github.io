$(document).ready(function() {

  // AFFIX - levý panel dokumentace
  var panel = $('#panel');

  panel.affix({
    offset: {
      bottom: 140
    }
  });

  panel.scroller();
/*
  var navigation = $("#panel .nav");
  var navigationHeight = navigation.height();
  var windowHeight = $(window).height() - 250;

  // Pokud se panel nevleze na stránku
  if ( windowHeight < navigationHeight ) {

  	var itemHeight = 41;
	var visiblePanel = $("#visible-panel");
	var maxItems = Math.floor(windowHeight/41);
	var panelHeight = (maxItems*itemHeight)+1;
  	visiblePanel.css({
  		"height": panelHeight,
  		"overflow": "hidden"
  	});

  	navigation.css({
  		"position": "relative",
  		"top": 0
  	});

  	var arrows = $("#arrows");
  	arrows.show();
	
	prevArrow = arrows.children(".prev");
  	nextArrow = arrows.children(".next");
  	var animationDisabled;

  	$(nextArrow).click(function(){
  	
  		if ( nextArrow.hasClass("active") && ! animationDisabled ) {

  			animationDisabled = true;

	  		var scrollItems = 3;
	  		var actualTop = Math.abs(navigation.position().top);

	  		var newTop = Math.abs(actualTop+(itemHeight*scrollItems));

	  		console.log("actualTop: " + actualTop);
	  		console.log("panelHeight:" +  panelHeight);
	  		console.log("newTop: "+ newTop);
	  		console.log("navigationHeight: "+ navigationHeight);

	  		if ( navigationHeight < (newTop + panelHeight) ) {

	  			lastTop = actualTop + (navigationHeight - panelHeight - actualTop);

		  		navigation.animate({
		  			"top": "-" + lastTop + "px"
		  		}, "slow", function() {
		  			animationDisabled = false;
		  		});

	  			nextArrow.removeClass("active");
	  		} else {

		  		navigation.animate({
		  			"top": "-" + newTop + "px"
		  		}, "slow", function() {
		  			animationDisabled = false;
		  		});

		 		var items = navigation.children("li.item");
		  		for ( var i = 0; i < items.length; i++ ) {

			  		var item = $(items[i])
			  		if (item.hasClass("first-visible")) {
			  			var foundedIndex = i;
			  			item.removeClass("first-visible");
			  		}

		  		} 	

		  		for ( var i = 0; i < items.length; i++ ) {
		  			
		  			var item = $(items[i])
		  			if ( i == foundedIndex+scrollItems) {
		  				item.addClass("first-visible");
		  			}
			  	
		  		} 	

		  		prevArrow.addClass("active");
	  		
	  		}

  		}

  	});
 	
  }
*/
});