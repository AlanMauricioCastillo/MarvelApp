import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
  return (
    <View style={styles.container0}>
    <View style={styles.container}>
			<Image
        style={styles.image}
				source={{uri: image}}
			/>
			<Text style={styles.title}>
      {name}
      </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container0: {
    paddingLeft: '12%',
    paddingRight: 5,
  },
  container: {
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 10,
    width: 180,
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: '#F28787',
  },
  image: {
    width: 130,
    height: 230,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});