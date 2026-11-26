const {formatPrice, pluralizeItems} = require('../src/formatter');

describe('formatPrice', () => {
  test('форматирует числa с копейками, пограничные и отрицательные', () => {
    expect(formatPrice(1234.5)).toBe('1 234,50 ₽');
    expect(formatPrice(-100000)).toBe('-100 000,00 ₽');
    expect(formatPrice(0)).toBe('0,00 ₽');
  });

  test('бросает ошибку для не-числа', () => {
    expect(() => formatPrice('10')).toThrow('Amount must be a number');
    expect(() => formatPrice(null)).toThrow('Amount must be a number');
    
  });
});

describe('pluralizeItems', () => {
  test('склоняет «товар» правильно', () => {
    expect(pluralizeItems(1)).toBe('1 товар');
    expect(pluralizeItems(21)).toBe('21 товар');
    expect(pluralizeItems(2)).toBe('2 товара');
    expect(pluralizeItems(23)).toBe('23 товара');
    expect(pluralizeItems(5)).toBe('5 товаров');
    expect(pluralizeItems(11)).toBe('11 товаров');
  });
});