import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao OdontoApp!</Text>
      <Text style={styles.subtitle}>Seu assistente odontológico móvel.</Text>

      <View style={styles.content}>
        <Text style={styles.info}>
          Use as abas no rodapé para navegar entre as principais funcionalidades do aplicativo:
        </Text>
        <Text style={styles.list}>• Login e Cadastro</Text>
        <Text style={styles.list}>• Consulta de integrantes</Text>
        <Text style={styles.list}>• Upload de imagem para análise</Text>
      </View>

      <Text style={styles.footer}>Desenvolvido por alunos FIAP • Sprint 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFFFA',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#333',
  },
  content: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#444',
  },
  list: {
    fontSize: 16,
    textAlign: 'center',
    color: '#222',
  },
  footer: {
    fontSize: 12,
    color: '#888',
    position: 'absolute',
    bottom: 20,
  },
});