import {el, svg} from 'redom';

export const renderCreditCard = ({
  number = 'xxxx xxxx xxxx xxxx',
  name = 'John Doe',
  date = '08/24',
  cvv = '985',
} = {}) => {
  const cardNumber = svg('text', {
    class: 'st2 st3 st4',
    id: 'svgnumber',
    transform: 'matrix(1 0 0 1 60.106 295.0121)',
  }, number);

  const cardName = svg('text', {
    class: 'st2 st5 st6',
    id: 'svgname',
    transform: 'matrix(1 0 0 1 54.1064 428.1723)',
  }, name);

  const cardNameBack = svg('text', {
    class: 'st12 st13',
    id: 'svgnameback',
    transform: 'matrix(1 0 0 1 59.5073 228.6099)',
  }, name);

  const cardDate = svg('text', {
    class: 'st2 st5 st9',
    id: 'svgexpire',
    transform: 'matrix(1 0 0 1 574.4219 433.8095)',
  }, date);

  const cardCVV = svg('text', {
    class: 'st6 st7',
    id: 'svgsecurity',
    transform: 'matrix(1 0 0 1 621.999 227.2734)',
  }, cvv);

  const frontCard = svg('svg', {
    'id': 'cardfront',
    'viewBox': '0 0 750 471',
    'x': '0px',
    'y': '0px',
    'style': 'enable-background:new 0 0 750 471;',
    'version': '1.1',
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'xml:space': 'preserve',
  }, [
    svg('g', {id: 'Front'}, [
      svg('g', {id: 'CardBackground'}, [
        svg('g', {id: 'Page-1_1_'}, [
          svg('g', {id: 'amex_1_'}, [
            svg('path', {
              class: 'lightcolor grey',
              id: 'Rectangle-1_1_',
              d: `M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,
                  40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z`,
            }),
          ]),
        ]),
        svg('path', {
          class: 'darkcolor greydark',
          d: `M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,
              17.9,40,40,40h670C732.1,471,750,453.1,750,431z`,
        }),
      ]),
      cardNumber,
      svg('text', {
        class: 'st7 st5 st8',
        transform: 'matrix(1 0 0 1 65.1054 241.5)',
      }, 'card number'),
      cardName,
      svg('text', {
        class: 'st7 st5 st8',
        transform: 'matrix(1 0 0 1 54.1074 389.8793)',
      }, 'cardholder name'),
      svg('text', {
        class: 'st7 st5 st8',
        transform: 'matrix(1 0 0 1 479.7754 388.8793)',
      }, 'expiration'),
      svg('g', [
        cardDate,
        svg('text', {
          class: 'st2 st10 st11',
          transform: 'matrix(1 0 0 1 479.3848 417.0097)',
        }, 'VALID'),
        svg('text', {
          class: 'st2 st10 st11',
          transform: 'matrix(1 0 0 1 479.3848 435.6762)',
        }, 'THRU'),
        svg('polygon', {
          class: 'st2',
          points: '554.5,421 540.4,414.2 540.4,427.9',
        }),
      ]),
      svg('g', {id: 'cchip'}, [
        svg('g', [
          svg('path', {
            class: 'st2',
            d: `M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,
                8.3-18.5,18.5-18.5h85.3c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,
                135.3,178.3,143.6,168.1,143.6z`,
          }),
        ]),
        svg('g', [
          svg('g'), [svg('rect', {
            class: 'st12',
            width: 1.5,
            height: 60,
            x: 82,
            y: 70,
          })],
          svg('g', [svg('rect', {
            class: 'st12',
            width: 1.5,
            height: 60,
            x: 167.4,
            y: 70,
          })]),
          svg('g', [svg('path', {
            d: `M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,
                4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3c0-10.2,8.3-18.5,18.5-18.5s18.5,
                8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,
                12.3C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,
                0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,
                0.5c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,
                16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5c3.1-3.2,
                4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z`,
          })]),
          svg('g', [svg('rect', {
            class: 'st12',
            width: 25.8,
            height: 1.5,
            x: 82.8,
            y: 82.1,
          })]),
          svg('g', [svg('rect', {
            class: 'st12',
            width: 26.1,
            height: 1.5,
            x: 82.8,
            y: 117.9,
          })]),
          svg('g', [svg('rect', {
            class: 'st12',
            width: 25.8,
            height: 1.5,
            x: 142.4,
            y: 82.1,
          })]),
          svg('g', [svg('rect', {
            class: 'st12',
            width: 26.2,
            height: 1.5,
            x: 142,
            y: 117.9,
          })]),
        ]),
      ]),
    ]),
    svg('g', {id: 'Back'}),
  ]);

  const backCard = svg('svg', {
    'id': 'cardback',
    'viewBox': '0 0 750 471',
    'x': '0px',
    'y': '0px',
    'style': 'enable-background:new 0 0 750 471;',
    'version': '1.1',
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'xml:space': 'preserve',
  }, [
    svg('g', {id: 'Front'}, [
      svg('line', {class: 'st0', x1: 35.3, y1: 10.4, x2: 36.7, y2: 11}),
    ]),
    svg('g', {id: 'Back'}, [
      svg('g', {id: 'Page-1_2_'}, [
        svg('g', {id: 'amex_2_'}, [
          svg('path', {
            class: 'darkcolor greydark',
            id: 'Rectangle-1_2_',
            d: `M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,
                40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z`,
          }),
        ]),
      ]),
      svg('rect', {class: 'st2', width: 750, height: 78, y: 61.6}),
      svg('g', [
        svg('path', {
          class: 'st3',
          d: `M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,
              6-6h652.1c3.3,0,6,2.7,6,6v52.5C707.1,246.4,704.4,249.1,701.1,
              249.1z`,
        }),
        svg('rect', {
          class: 'st4',
          width: 664.1,
          height: 10.5,
          x: 42.9,
          y: 198.6,
        }),
        svg('rect', {
          class: 'st4',
          width: 664.1,
          height: 10.5,
          x: 42.9,
          y: 224.5,
        }),
        svg('path', {
          class: 'st5',
          d: `M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,
              6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z`,
        }),
      ]),
      cardCVV,
      svg('g', {class: 'st8'}, [
        svg('text', {
          class: 'st9 st6 st10',
          transform: 'matrix(1 0 0 1 518.083 280.0879)',
        }, 'security code'),
      ]),
      svg('rect', {
        class: 'st11',
        width: 375.5,
        height: 13.5,
        x: 58.1,
        y: 378.6,
      }),
      svg('rect', {
        class: 'st11',
        width: 421.7,
        height: 13.5,
        x: 58.1,
        y: 405.6,
      }),
      cardNameBack,
    ]),
  ]);

  const front = el('div.front', [
    el('div', {class: 'ccsingle', id: 'ccsingle'}),
    frontCard,
  ]);
  const back = el('div.back', [backCard]);
  const creditCard = el('div.creditcard', [front, back]);
  const container = el('div.container', [creditCard]);

  creditCard.addEventListener('click', () => {
    creditCard.classList.toggle('flipped');
  });

  return {
    creditCard,
    container,
    cardNumber,
    cardName,
    cardNameBack,
    cardDate,
    cardCVV,
  };
};
