require('../../core/js/index');

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
