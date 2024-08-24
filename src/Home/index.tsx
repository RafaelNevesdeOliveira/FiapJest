import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { incrementAndMultiply } from '../utils/incrementarMultiplicador';

export function Home(){
  const [count, setCount] = useState(0);

  const handlePress = () =>{
    setCount(incrementAndMultiply)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tabela de Cores</Text>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.red]}>Vermelho</Text>
        <Text style={styles.cell}>#FF0000</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.green]}>Verde</Text>
        <Text style={styles.cell}>#00FF00</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.blue]}>Azul</Text>
        <Text style={styles.cell}>#0000FF</Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.counterText}>Contador: {count}</Text>
        <Button title="Incrementar e Multiplicar" onPress={handlePress}  />
      </View>
    </View>
  );
}