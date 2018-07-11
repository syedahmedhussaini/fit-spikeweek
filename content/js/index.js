require('../../core/js/index');


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

$('#password').keyup(function(e) {
  checkPasswordValidations(e.target.value).forEach(function(validation) {
    $('#' + validation.id).attr('checked', validation.active);
  });
});

function checkPasswordValidations(value) {
  var validations = [];

  validations.push({
    id: 'minLength',
    active: /[0-9a-zA-Z]{8,}/.test(value)
  });

  validations.push({
    id: 'upperLowerCharacters',
    active: /(?=.*[a-z])(?=.*[A-Z])/.test(value)
  });

  validations.push({
    id: 'numbersAndLetters',
    active: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(value)
  });

  return validations;
}
