
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EmDesenvolvimentoScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ainda em desenvolvimento</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, marginBottom: 20, color: '#d9534f' },
});
