import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TListData } from '../../utils/fakeData';

const ListItem = (item: TListData, handleOnItemPress: (id: number) => void) => (
  <TouchableOpacity 
    style={styles.itemWrapper} 
    key={item.id} 
    onPress={() => handleOnItemPress(item.id)}
  >
    <Image style={styles.image} source={{ uri: item.image }} />
    <Text style={styles.itemTitle}>{item.title}</Text>
  </TouchableOpacity>
);

export default ListItem;

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  image: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 10
  },
  itemTitle: {
    fontSize: 20,
    marginLeft: 24,
    color: 'lightgray'
  },
});
