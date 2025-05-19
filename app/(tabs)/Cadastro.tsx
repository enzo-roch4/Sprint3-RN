import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [cpf, setCpf] = useState('');

  const handleCadastro = async () => {
    if (!id || !nome || !cpf) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    const data = await AsyncStorage.getItem('usuarios');
    const lista = data ? JSON.parse(data) : [];

    const jaExiste = lista.some((u: any) => u.id === id);
    if (jaExiste) {
      Alert.alert('Este ID já foi cadastrado!');
      return;
    }

    const novoUsuario = { id, nome, cpf };
    const atualizada = [...lista, novoUsuario];

    await AsyncStorage.setItem('usuarios', JSON.stringify(atualizada));
    Alert.alert('Usuário cadastrado com sucesso!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="ID" value={id} onChangeText={setId} />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66ff33' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
