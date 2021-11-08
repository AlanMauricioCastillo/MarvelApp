import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CharacterCard({image, name}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}
    onPress={() => navigation.navigate('Detail')}
    >
			<Image 
				style={styles.image}
				source={image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    marginTop: 5,
    borderStyle: 'solid',
    width: '90%',
    dysplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 2,
  },
  red: {
    color: 'red',
  },
  font: {
    color: 'black',
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
});