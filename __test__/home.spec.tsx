import React from 'react';
import { render } from '@testing-library/react-native';
import {Home} from '../src/Home';

describe('Home Component', () => {
  it('deve renderizar corretamente a tabela de cores', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Tabela de Cores')).toBeTruthy();
    expect(getByText('Vermelho')).toBeTruthy();
    expect(getByText('#FF0000')).toBeTruthy();
    expect(getByText('Verde')).toBeTruthy();
    expect(getByText('#00FF00')).toBeTruthy();
    expect(getByText('Azul')).toBeTruthy();
    expect(getByText('#0000FF')).toBeTruthy();
  });
});
