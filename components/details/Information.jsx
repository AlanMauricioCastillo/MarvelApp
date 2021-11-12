import { data } from 'jquery';
import * as React from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Information({ image, name, description }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{uri: image}}
      />
      <Text style={styles.title}>{name}</Text>
      <ScrollView>
      <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    textAlign: 'center',
    margin: 5,
  },
});