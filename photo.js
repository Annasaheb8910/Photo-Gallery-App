import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Photo(props) {
  let url = props.link;
  let photographerName = props.name;

  const styles = StyleSheet.create({
    wrapper: {
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.35,
      shadowRadius: 5,
      elevation: 5,
      borderRadius: 6
    },
    img: {
      height: 120,
      width: 120,
      cursor: 'pointer'
    }
  });

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: url }} style={styles.img} />
      <Text>{photographerName}</Text>
    </View>
  );
}
