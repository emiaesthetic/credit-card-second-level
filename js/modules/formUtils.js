import {el, svg} from 'redom';
import Inputmask from 'inputmask';
import JustValidate from 'just-validate';

export const createField = ({
  name,
  id,
  text,
  maxLength,
  type = 'text',
  pattern = '[0-9]*',
  inputmode = 'numeric',
} = {}) => {
  const attributes = {name, id, type, pattern, inputmode};
  if (maxLength !== undefined) attributes.maxLength = maxLength;

  const label = el('label', {for: id}, text);
  const input = el('input', attributes);
  const container = el('div.field-container', [label, input]);

  return {
    container,
    input,
  };
};

export const createSVGIcon = () => svg('svg', {
  'class': 'ccicon',
  'id': 'ccicon',
  'width': 750,
  'height': 471,
  'viewBox': '0 0 750 471',
  'version': '1.1',
  'xmlns': 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
});

export const applyInputMasks = ({numberInput, dateInput, cvvInput}) => {
  new Inputmask('9999 9999 9999 9999', {'placeholder': 'x'}).mask(numberInput);
  new Inputmask('99/99', {'placeholder': '__/__'}).mask(dateInput);
  new Inputmask('999', {'placeholder': '___'}).mask(cvvInput);
};

const validateDate = (value) => {
  const [month, year] = value.split('/').map(Number);

  if (month < 1 || month > 12 || year < 0) {
    return false;
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;

  return (
    year > currentYear ||
    (month >= currentMonth && year === currentYear)
  );
};

export const validateForm = (form) => {
  const validator = new JustValidate(form);

  validator
      .addField(form.name, [
        {
          rule: 'required',
          errorMessage: 'Name is required',
        },
        {
          rule: 'customRegexp',
          value: /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/,
          errorMessage: 'Please enter a valid name',
        },
      ])
      .addField(form.number, [
        {
          rule: 'required',
          errorMessage: 'Card number is required',
        },
        {
          rule: 'customRegexp',
          value: /^(\d{4} ){3}\d{4}$/,
          errorMessage: 'Please enter a valid 16-digit card number',
        },
      ])
      .addField(form.date, [
        {
          rule: 'required',
          errorMessage: 'Expiration is required',
        },
        {
          rule: 'customRegexp',
          value: /^\d{2}\/\d{2}$/,
          errorMessage: 'Enter correct date',
        },
        {
          rule: 'custom',
          validator: (value) => validateDate(value),
          errorMessage: 'Enter correct date',
        },
      ])
      .addField(form.cvv, [
        {
          rule: 'required',
          errorMessage: 'Security code is required',
        },
        {
          rule: 'customRegexp',
          value: /^\d{3}$/,
          errorMessage: 'Enter correct CVV',
        },
        {
          rule: 'custom',
          validator: (value) => !(value === '000'),
          errorMessage: 'Enter correct CVV',
        },
      ]);

  Object.values(validator.fields).map(field => {
    field.elem.addEventListener('blur', () => {
      validator.revalidateField(field.elem);
    });
  });
};
