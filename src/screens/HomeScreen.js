import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
  const { name } = route.params || {};
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
      setRecipes(data.recipes || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch recipes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: item.image || 'https://via.placeholder.com/150' }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, {name}!</Text>
      <Button title="Refresh" onPress={fetchRecipes} />
      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  greeting: { fontSize: 18, marginBottom: 16 },
  card: { marginBottom: 16, padding: 16, borderWidth: 1, borderRadius: 8 },
  image: { height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: 'bold' },
  loader: { marginTop: 20 },
});

export default HomeScreen;
