import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';

import {books} from '../database/Books';

import { FontAwesome } from '@expo/vector-icons';

const numColumns = 3
const WIDTH = Dimensions.get('window').width

export default class Books extends Component {

  constructor() {
    super()
    this.state = {
      oldBooks: [],
      newBooks: [],
    };
  }

  componentDidMount() {
    let filteroldBooks = books.filter(book => book.book_type == "old")
    let filternewBooks = books.filter(book => book.book_type == "new")
    this.setState({oldBooks: filteroldBooks, newBooks: filternewBooks})
  }

  // formatData = (books, numColumns) => {
  //   const totalRows = Math.floor(books.length / numColumns)
  //   let totalLastRow = books.length - (totalRows * numColumns)

  //   while (totalLastRow !== 0 && totalLastRow !== numColumns) {
  //     books.push({book_name: 'blank', empty: true})
  //     totalLastRow++
  //   }
  //   return books
  // }

    render() {
      let {mainContainer, oldBooksContainer, newBooksContainer, itemStyle, itemText, itemInvisible} = styles
      return(
        <View style={mainContainer}>
          <View style={{ backgroundColor: '#0a090d' }}>
            <Text style={{ color: '#906031', fontSize: 20, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center' }}>OLD TESTAMENT</Text>
          </View>
          <View style={oldBooksContainer}>
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
                    <TouchableOpacity style={itemStyle}>
                      <Text style={itemText}>{item.book_name}</Text>
                    </TouchableOpacity>
                );
              }}
            />
          </View>
          {/* N E W  T E S T A M E N T S */}
          <View style={{ backgroundColor: '#0a090d' }}>
            <Text style={{ color: '#906031', fontSize: 20, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center' }}>NEW TESTAMENT</Text>
          </View>
          <View style={newBooksContainer}>
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
                    <TouchableOpacity style={itemStyle}>
                      <Text style={itemText}>{item.book_name}</Text>
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
    flex: 4,
  },
  newBooksContainer: {
    flex: 3,
  },
  itemStyle: {
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 1,
    marginHorizontal: 2,
    // height: WIDTH / numColumns,
    height: 30,
  },
  itemText: {
    color: '#000',
    textAlign: 'center',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
})