import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { verses } from "../database/Tagab";

export default class Read extends Component {

  constructor() {
    super()
    this.state = {
      verses: [],
    };
  }

  componentDidMount() {
    let filterVerses = verses.filter(verse => verse.book_name == "Genesis" && verse.chapter == 1)
    this.setState({verses: filterVerses})
  }

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
          <FlatList
            style={{ flex: 1, marginBottom: 30 }}
            vetical
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            data={this.state.verses}
            keyExtractor={(item) => item.book_name + item.text}
            renderItem={({ item, book_name }) => {
              return (
                <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: '#f8f9fa' }}>
                  <Text style={{ paddingVertical: 5, color: 'red' }}>{item.verse}</Text>
                  <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>{item.text}</Text>
                </View>
              );
            }}
          />
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
  