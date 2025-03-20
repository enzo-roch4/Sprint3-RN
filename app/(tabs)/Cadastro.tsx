import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="ID" value={id} onChangeText={setId} />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      <Button title="Cadastrar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66ff33' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: { width: '80%', height: 40, borderWidth: 1, borderRadius: 8, paddingLeft: 10, marginBottom: 10, backgroundColor: '#fff' },
});
