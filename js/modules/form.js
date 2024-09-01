import {el} from 'redom';
import {displayBrandLogo} from './cardBrandign.js';
import {
  createField,
  createSVGIcon,
  applyInputMasks,
  validateForm,
} from './formUtils.js';

export const renderForm = () => {
  const {container: nameField, input: nameInput} = createField({
    name: 'name',
    id: 'name',
    text: 'Name',
    maxLength: 20,
  });

  const {container: numberField, input: numberInput} = createField({
    name: 'number',
    id: 'cardnumber',
    text: 'Card Number',
  });
  const SVGIcon = createSVGIcon();
  numberField.append(SVGIcon);
  displayBrandLogo(numberInput);

  const {container: dateField, input: dateInput} = createField({
    name: 'date',
    id: 'expirationdate',
    text: 'Expiration (mm/yy)',
  });

  const {container: cvvField, input: cvvInput} = createField({
    name: 'cvv',
    id: 'securitycode',
    text: 'Security Code',
  });

  const form = el('form.form-container', [
    nameField,
    numberField,
    dateField,
    cvvField,
  ]);

  applyInputMasks({numberInput, dateInput, cvvInput});
  validateForm(form);

  return {
    form,
    nameInput,
    numberInput,
    dateInput,
    cvvInput,
  };
};
