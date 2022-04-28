import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import tagab from "../database/TAGAB";

export default class Read extends Component {
  render() {
    return(
      <View style={{ flex: 1, top: 35, bottom: 35 }}>
        {/* H E A D E R */}
        <View style={styles.headerNavContainer}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('Home')
              }}
            >
              <MaterialIcons name='arrow-back' size={24} color='#906031' />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6, alignContent: 'center' }}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                this.props.navigation.navigate('Books')   
              }}
            >
              <Text style={{ color: '#906031', fontSize: 18, fontWeight: 'bold' }}>Genesis 1</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                alert ('Select a Bible version!');   
              }}
            >
              <Text style={{ color: '#906031', fontSize: 18, fontWeight: 'bold' }}>ADB</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* C O N T E N T */}
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 15 }}>
          <ScrollView style={{ marginBottom: 40 }}>
            <FlatList
              style={{ flex: 1, marginTop: 10 }}
              data={tagab}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: '#f8f9fa' }}>
                    <Text style={{ paddingVertical: 5, color: 'red' }}>{item.verse}</Text>
                    <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>{item.content}</Text>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#0a090d",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    bottom: 35,
  },
  bottomNavCircle: {
    alignItems: 'center',
    backgroundColor: '#0a090d',
    padding: 15,
    borderRadius: 50,
  },
  headerNavContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#0a090d",
    flexDirection: "row",
    alignItems: "center",
  },
});
  