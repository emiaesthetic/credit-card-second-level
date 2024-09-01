import {el, setChildren} from 'redom';
import {renderForm} from './form.js';
import {renderCreditCard} from './creditCard.js';
import {debounce} from './utils.js';

export const renderPage = () => {
  const title = el('div', {className: 'payment-title'}, [
    el('h1', 'Payment Information'),
  ]);

  const {
    form,
    nameInput,
    numberInput,
    dateInput,
    cvvInput,
  } = renderForm();

  const {
    creditCard,
    container,
    cardNumber,
    cardName,
    cardNameBack,
    cardDate,
    cardCVV,
  } = renderCreditCard();

  const updateCardDisplay = debounce(() => {
    cardName.textContent = nameInput.value || 'John Doe';
    cardNameBack.textContent = nameInput.value || 'John Doe';
    cardNumber.textContent = numberInput.value || 'xxxx xxxx xxxx xxxx';
    cardDate.textContent = dateInput.value || '08/24';
    cardCVV.textContent = cvvInput.value || '985';
  }, 200);

  nameInput.addEventListener('input', updateCardDisplay);
  numberInput.addEventListener('input', updateCardDisplay);
  dateInput.addEventListener('input', updateCardDisplay);
  cvvInput.addEventListener('input', updateCardDisplay);

  nameInput.addEventListener('focus', () => {
    creditCard.classList.remove('flipped');
  });
  numberInput.addEventListener('focus', () => {
    creditCard.classList.remove('flipped');
  });
  dateInput.addEventListener('focus', () => {
    creditCard.classList.remove('flipped');
  });
  cvvInput.addEventListener('focus', () => {
    creditCard.classList.add('flipped');
  });

  cvvInput.addEventListener('blur', () => {
    creditCard.classList.remove('flipped');
  });

  setChildren(document.body, [title, container, form]);
};
