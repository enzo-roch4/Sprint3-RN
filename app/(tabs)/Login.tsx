
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }: any) {
  const [id, setId] = useState('');
  const [cpf, setCpf] = useState('');

  const handleLogin = async () => {
    const storedId = await AsyncStorage.getItem('userId');
    const storedCpf = await AsyncStorage.getItem('userCpf');

    if (id === storedId && cpf === storedCpf) {
      Alert.alert('Login bem-sucedido!');
      navigation.navigate('index');
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="ID" value={id} onChangeText={setId} />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} secureTextEntry keyboardType="numeric" />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66ff33' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  input: { width: '80%', height: 40, borderWidth: 1, borderRadius: 8, paddingLeft: 10, marginBottom: 10, backgroundColor: '#fff' },
});
