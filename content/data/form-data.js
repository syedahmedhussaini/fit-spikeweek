'use strict';

const formData = {
  verticals: [
    {
      title: 'Home Improvement',
      label: 'HVAC, solar, windows & doors. pool & spa, roofing, and contracting',
      name: 'homeImprovementCheckbox'
    },
    {
      title: 'Retail',
      label: 'Furniture, appliances, electronics, sports equipment, consumer goods, and automotive parts & repairs',
      name: 'retailCheckbox'
    },
    {
      title: 'Powersports',
      label: 'ATV, scooter, snowmobile, and motorcycle',
      name: 'powersportsCheckbox'
    },
    {
      title: 'Marine, RV & Trailers',
      label: 'Boat, trailer, and RV',
      name: 'marineRVTrailersCheckbox'
    },
    {
      title: 'Auto',
      label: 'Car, truck and SUV',
      name: 'autoCheckbox'
    }
  ],

  formFields: [
    {
      label: 'Business Address',
      type: 'text',
      name: 'businessAddress'
    },

    {
      label: 'Years in Business',
      type: 'number',
      name: 'yearsInBusiness'
    },
  ],

  signUpForm: [
    {
      label: 'Your Position',
      type: 'text',
      name: 'yourPosition'
    },

    {
      label: 'First Name',
      type: 'text',
      name: 'firstName'
    },
    {
      label: 'Last Name',
      type: 'text',
      name: 'lastName'
    },
    {
      label: 'Date of Birth',
      type: 'text',
      name: 'dob'
    },
    {
      label: 'Social Insurance Number',
      type: 'tel',
      name: 'sin'
    },

    {
      label: 'Fake field 1',
      type: 'tel',
      name: 'ff1'
    },

    {
      label: 'Fake field 2',
      type: 'tel',
      name: 'ff2'
    },

    {
      label: 'Insurance Number',
      type: 'tel',
      name: 'sin2'
    },

  
    {
      label: 'Your Role',
      type: 'select',
      name: 'yourRole'
    }

  ],

  passwordValidations: [
    {
      title: 'Min. 8 characters',
      id: 'minLength',
      active: false
    },
    {
      title: 'Upper and lowercase characters',
      id: 'upperLowerCharacters',
      active: false
    },
    {
      title: 'Use numbers and letters',
      id: 'numbersAndLetters',
      active: false
    }
  ]
};

module.exports = formData;
