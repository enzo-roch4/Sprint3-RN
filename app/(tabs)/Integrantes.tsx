import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function IntegrantesScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Integrantes</Text>
      <Text>Enzo Franco Rocha RM: 553643</Text>
      <Text>João Pedro Pereira RM: 553698</Text>
      <Text>Hebert Santos de Sousa RM: 553227</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66ff33' },
  title: { fontSize: 24, marginBottom: 20, color: '#333' },
});
