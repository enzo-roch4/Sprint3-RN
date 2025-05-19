import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, Alert, FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UsuariosScreen() {
  const [id, setId] = useState('');
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [usuarioEncontrado, setUsuarioEncontrado] = useState<any>(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [cpfEditado, setCpfEditado] = useState('');
  const [mostrarLista, setMostrarLista] = useState(false);

  useEffect(() => {
    carregarTodosUsuarios();
  }, []);

  const carregarTodosUsuarios = async () => {
    const data = await AsyncStorage.getItem('usuarios');
    const lista = data ? JSON.parse(data) : [];
    setUsuarios(lista);
  };

  const buscarUsuario = async () => {
    const data = await AsyncStorage.getItem('usuarios');
    const lista = data ? JSON.parse(data) : [];

    const usuario = lista.find((u: any) => u.id === id);
    if (usuario) {
      setUsuarioEncontrado(usuario);
      setNomeEditado(usuario.nome);
      setCpfEditado(usuario.cpf);
    } else {
      Alert.alert('Usuário não encontrado');
      setUsuarioEncontrado(null);
    }
  };

  const atualizarUsuario = async () => {
    const data = await AsyncStorage.getItem('usuarios');
    const lista = data ? JSON.parse(data) : [];

    const atualizada = lista.map((u: any) =>
      u.id === id ? { ...u, nome: nomeEditado, cpf: cpfEditado } : u
    );

    await AsyncStorage.setItem('usuarios', JSON.stringify(atualizada));
    Alert.alert('Usuário atualizado com sucesso!');
    setUsuarioEncontrado({ id, nome: nomeEditado, cpf: cpfEditado });
    carregarTodosUsuarios();
  };

  const excluirUsuario = async () => {
    const data = await AsyncStorage.getItem('usuarios');
    const lista = data ? JSON.parse(data) : [];

    const filtrados = lista.filter((u: any) => u.id !== id);
    await AsyncStorage.setItem('usuarios', JSON.stringify(filtrados));
    Alert.alert('Usuário excluído!');
    setUsuarioEncontrado(null);
    setId('');
    carregarTodosUsuarios();
  };

  const alternarLista = () => {
    setMostrarLista((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Usuário</Text>

      <TextInput
        placeholder="Digite o ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
        textAlign="center"
      />

      <View style={styles.button}>
        <Button title="Buscar" onPress={buscarUsuario} />
      </View>

      {usuarioEncontrado && (
        <View style={styles.resultado}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={nomeEditado}
            onChangeText={setNomeEditado}
          />
          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            value={cpfEditado}
            onChangeText={setCpfEditado}
            keyboardType="numeric"
          />

          <View style={styles.actionButtons}>
            <View style={styles.editButton}>
              <Button title="Atualizar" onPress={atualizarUsuario} />
            </View>
            <View style={styles.deleteButton}>
              <Button title="Excluir" onPress={excluirUsuario} color="red" />
            </View>
          </View>
        </View>
      )}

      <View style={styles.button}>
        <Button
          title={mostrarLista ? 'Ocultar usuários' : 'Ver todos os usuários'}
          onPress={alternarLista}
        />
      </View>

      {mostrarLista && (
        <>
          <Text style={styles.title}>Todos os Usuários</Text>
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.userCard}>
                <Text style={styles.userText}>ID: {item.id}</Text>
                <Text style={styles.userText}>Nome: {item.nome}</Text>
                <Text style={styles.userText}>CPF: {item.cpf}</Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 22, marginVertical: 10, color: '#007BFF', textAlign: 'center' },
  input: {
    width: '80%', borderWidth: 1, borderColor: '#ccc',
    padding: 10, marginBottom: 10, borderRadius: 5, backgroundColor: '#f9f9f9',
  },
  button: { width: '80%', marginVertical: 10 },
  resultado: {
    marginTop: 10,
    backgroundColor: '#e6f7ff',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  editButton: { flex: 1, marginRight: 10 },
  deleteButton: { flex: 1, marginLeft: 10 },
  userCard: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  userText: {
    fontSize: 16,
    color: '#333',
  },
});
