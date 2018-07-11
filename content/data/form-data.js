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
