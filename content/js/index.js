require('../../core/js/index');


$('.clear-field').on("click",function(){
  console.log('fire');
  var input = $(this).prev('input');
  var container = $(this).parents(".floating-label");
  input.val("");
  input.focus();
  container.removeClass('error');
  container.next('.error-message').addClass('hidden');

});


$(function(){
  $(".input-group input").bind("checkval",function(){
    var clearButton = $(this).next('.clear-field');

    if(this.value !== ""){
      clearButton.removeClass('opacity-0')
    } else {
      clearButton.addClass('opacity-0')
    }
  }).keyup(function(){
    $(this).trigger("checkval");

  }).focusout(function(){
    $(this).next('.clear-field').addClass('opacity-0');

  }).on("focus",function(){
    $(this).trigger("checkval");
    console.log('test');

  });;
});



$(function(){
  var containerTriggered = "activated";
  var containerOn = "active";
  var containerOff = "inactive";

  $(".floating-label input").bind("checkval",function(){
    var label = $(this).prev("label");
    var container = $(this).parents(".floating-label")

    // CLEAN THIS UP. SHOULD DEBOUNCE OR THROTTLE THIS.

    if(this.value !== ""){
      console.log('Value is not empty');
      label.removeClass('text-red').addClass('text-60')
      container.addClass(containerTriggered).removeClass(containerOff);
    } else {

      console.log('value is empty');
      container.removeClass(containerTriggered).addClass(containerOff).removeClass('error');
      container.next('.error-message').addClass('hidden');

    }
  }).focusout(function(){
    $(this).trigger("checkval");
    $(this).parents(".floating-label").removeClass(containerOn)

  }).on("focus",function(){
    $(this).parents(".floating-label").addClass(containerOn).addClass(containerTriggered).removeClass(containerOff);
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
