import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function EmDesenvolvimentoScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      Alert.alert('Imagem enviada com sucesso!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Imagem</Text>
      <Button title="Selecionar Imagem" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, marginBottom: 20, color: '#007BFF' },
  image: { width: 300, height: 300, marginTop: 20, borderRadius: 10 },
});
