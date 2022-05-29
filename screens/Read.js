import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import Mode from "../assets/style";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';

import {books} from '../database/Books';
import { verses } from "../database/Tagab";

export default class Read extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verses: [],
      book_name: 'Genesis',
      chapter: '1',
      didUpdate: false
    }
  }

  componentDidMount() {
    this.fetchData()
    this.loaddefaultmode()
  }

  async loaddefaultmode() {
    let mode = await AsyncStorage.getItem("mode");
    this.setState({mode})
  }

  fetchData() {
    if(this.props.route.params.book_name && this.props.route.params.chapter) {
      let filterBook = verses.filter(verse => verse.book_name == this.props.route.params.book_name && verse.chapter == this.props.route.params.chapter)
      // let filterVerses = filterBook.map(book => book.verse)
      this.setState({verses: filterBook})
    }
  }

  // componentDidUpdate() {
  //   let params = this.props.route.params;
  //   if ((JSON.stringify(params) != JSON.stringify(this.state.book)) && !this.state.didUpdate) {
  //     console.log(params);
  //     this.setState({
  //       didUpdate: true,
  //       book: params.book
  //     })
  //   }
  // }

  render() {
    let mode = this.state.mode;
     let modeStyle = Mode[mode] ? Mode[mode] : Mode ['lightmode'];
    const {book_name} = this.props.route.params
    const {chapter} = this.props.route.params
    return(
      <View style={{ flex: 1, top: 35, bottom: 35, backgroundColor: modeStyle.backgroundColor }}>
        {/* H E A D E R */}
        <View style={[
          styles.headerNavContainer,
          {backgroundColor: modeStyle.header,}
        ]}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('Chapter')
              }}
            >
              <MaterialIcons name='arrow-back' size={24} color='#906031' />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6, alignContent: 'center' }}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => this.props.navigation.navigate('Books', {
                book_name: this.state.book_name
              })}
            >
              <Text style={{ color: '#906031', fontSize: 18, fontWeight: 'bold' }}>{book_name} {chapter}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                alert ('Select a Bible version!');   
              }}
            >
              <Text style={{ color: '#0a090d', fontSize: 18, fontWeight: 'bold' }}>ADB</Text>
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
            keyExtractor={(item) => item.book + item.chapter + item.verse}
            renderItem={({ item, book_name }) => {
              return (
                <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: '#f8f9fa' }}>
                  <Text style={{ paddingVertical: 5, color: '#4169E1' }}>{item.verse}</Text>
                  <Text style={{ paddingVertical: 5, paddingHorizontal: 10, }}>{item.text}</Text>
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
  