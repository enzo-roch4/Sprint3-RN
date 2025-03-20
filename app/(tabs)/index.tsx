import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu de Navegação</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
        <Button title="Erro" onPress={() => navigation.navigate('Erro')} />
        <Button title="Integrantes" onPress={() => navigation.navigate('Integrantes')} />
        <Button title="Em Desenvolvimento" onPress={() => navigation.navigate('EmDesenvolvimento')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '##66ff33' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  buttonContainer: { width: '80%', gap: 10 },
});
