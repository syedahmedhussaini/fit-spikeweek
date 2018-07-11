require('../../core/js/index');
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


var myEfficientFn = debounce(function() {
	console.log('This should happen sporadically.')
}, 250);


$(function(){
  var containerOn = "active";
  var containerOff = "inactive";

  $(".floating-label input").bind("checkval",function(){
    var label = $(this).prev("label");
    var container = $(this).parent(".floating-label")

    // CLEAN THIS UP. SHOULD DEBOUNCE OR THROTTLE THIS.

    if(this.value !== ""){
      console.log('Value is not empty');
      label.removeClass('text-red').addClass('text-60')
      container.addClass(containerOn).removeClass(containerOff);

    } else {

      console.log('value is empty');
      container.removeClass(containerOn).addClass(containerOff);

    }
  }).focusout(function(){
    $(this).trigger("checkval");

  }).on("focus",function(){
    $(this).parent(".floating-label").addClass(containerOn).removeClass(containerOff);
    console.log('focussed');

  });
});
