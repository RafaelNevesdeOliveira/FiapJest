import { incrementAndMultiply } from '../src/utils/incrementarMultiplicador';

describe('incrementAndMultiply', () => {
  
  it('deve incrementar o valor e multiplicar por 2', () => {
    expect(incrementAndMultiply(0)).toBe(2);
    expect(incrementAndMultiply(2)).toBe(4);
    expect(incrementAndMultiply(500000)).toBe(1000000);
  });

  it('deve retornar no máximo 1.000.000', () => {
    expect(incrementAndMultiply(500001)).toBe(1000000);
    expect(incrementAndMultiply(1000000)).toBe(1000000);
  });
  
  it('deve retornar 2 para o valor inicial 0', () => {
    expect(incrementAndMultiply(0)).toBe(2);
  });
});
