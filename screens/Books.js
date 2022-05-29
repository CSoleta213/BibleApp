import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';

import Mode from "../assets/style";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';

import {books} from '../database/Books';

import { FontAwesome } from '@expo/vector-icons';

const numColumns = 3
const WIDTH = Dimensions.get('window').width

export default class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldBooks: [],
      newBooks: [],
    };
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
    let filterOldBooks = books.filter(book => book.book_type == "old")
    let filterNewBooks = books.filter(book => book.book_type == "new")
    this.setState({oldBooks: filterOldBooks, newBooks: filterNewBooks})
  }

    render() {
      
      let mode = this.state.mode;
     let modeStyle = Mode[mode] ? Mode[mode] : Mode ['lightmode'];

      let {mainContainer, oldBooksContainer, newBooksContainer, itemStyle, itemText, itemInvisible} = styles;
      // let params = this.props.route.params;
      return(
        <View style={{flex: 1, top: 35, backgroundColor: modeStyle.backgroundColor}}>
          {/* H E A D E R */}
        <View style={{
          height: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: modeStyle.header,
        }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: 'center'}}
              onPress={() => {
                this.props.navigation.navigate('Home')
              }}
            >
              <MaterialIcons name='arrow-back' size={24} style={{color: modeStyle.icon}} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6, alignContent: 'center' }}>
              <Text style={{ alignSelf: 'flex-start', color: modeStyle.color, fontSize: 18, fontWeight: 'bold' }}>Select a Book</Text>
          </View>
          <View style={{ flex: 1 }}>
          </View>
        </View>
          {/* <View style={{ backgroundColor: '#0a090d' }}>
            <Text style={{ color: '#906031', fontSize: 20, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center' }}>OLD TESTAMENT</Text>
          </View> */}
          <View style={oldBooksContainer}>
            <View>
              <Text style={{ color: modeStyle.headerTextColor, fontWeight: 'bold', paddingVertical: 5, textAlign: 'center' }}>- - - OLD TESTAMENT BOOKS - - -</Text>
            </View>
            <FlatList
              style={{ flex: 1, marginTop: 5 }}
              // data={this.formatData(books, numColumns)}
              data={this.state.oldBooks}
              keyExtractor={item => item.id}
              numColumns={numColumns}
              renderItem={({item}) => {
                if (item.empty === true) {
                  return <View style={[itemStyle, itemInvisible]}/>
                }
                return (
                  <TouchableOpacity style={{
                    backgroundColor: '#f8f9fa',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    marginVertical: 1,
                    marginHorizontal: 2,
                    // height: WIDTH / numColumns,
                    height: 29,
                    backgroundColor: modeStyle.button,
                  }}
                      onPress={() => this.props.navigation.navigate('Chapter', {book_name: item.book_name})}
                    >
                      <Text style={{
                        color: '#000',
                        textAlign: 'center',
                        color: modeStyle.color,
                      }}>
                        {item.book_name}
                        {/* {params.book_name} */}
                      </Text>
                    </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* N E W  T E S T A M E N T S */}
          <View style={newBooksContainer}>
            <View>
              <Text style={{ color: modeStyle.headerTextColor, fontWeight: 'bold', paddingVertical: 5, textAlign: 'center' }}>- - - NEW TESTAMENT BOOKS - - -</Text>
            </View>
            <FlatList
              style={{ flex: 1, marginTop: 5 }}
              // data={this.formatData(books, numColumns)}
              data={this.state.newBooks}
              keyExtractor={item => item.id}
              numColumns={numColumns}
              renderItem={({item}) => {
                if (item.empty === true) {
                  return <View style={[itemStyle, itemInvisible]}/>
                }
                return (
                    <TouchableOpacity style={{
                      backgroundColor: '#f8f9fa',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      marginVertical: 1,
                      marginHorizontal: 2,
                      // height: WIDTH / numColumns,
                      height: 29,
                      backgroundColor: modeStyle.button,
                    }}
                      onPress={() => this.props.navigation.navigate('Chapter', {
                      book_name: item.book_name
                      })}
                    >
                      <Text style={{
                        color: '#000',
                        textAlign: 'center',
                        color: modeStyle.color,
                      }}>
                        {item.book_name}
                      </Text>
                    </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 35,
  },
  oldBooksContainer: {
    flex: 5,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  newBooksContainer: {
    flex: 3.6,
    paddingTop: 10,
    paddingHorizontal: 25,
    bottom: 35,
  },
  itemStyle: {
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 1,
    marginHorizontal: 2,
    // height: WIDTH / numColumns,
    height: 29,
  },
  itemText: {
    color: '#000',
    textAlign: 'center',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  headerNavContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#0a090d",
    flexDirection: "row",
    alignItems: "center",
  },
})