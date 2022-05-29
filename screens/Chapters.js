import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';

import Mode from "../assets/style";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons';

import {chapters} from '../database/Chapters';
import {books} from '../database/Books';
import { verses } from "../database/Tagab";

const numColumns = 5
const WIDTH = Dimensions.get('window').width

export default class Chapter extends Component {

constructor(props) {
    super(props)
    this.state = {
      verses: [],
      chapters:[],
      book_name: 'Genesis',
      chapter: '1',
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
    if(this.props.route.params.book_name) {
      let filterChapter = chapters.filter(chapter => chapter.book_name == this.props.route.params.book_name)
      // let filterVerses = filterBook.map(book => book.verse)
      this.setState({chapters: filterChapter})
    }
  }

  formatData = (chapters, numColumns) => {
    const totalRows = Math.floor(chapters.length / numColumns)
    let totalLastRow = chapters.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      chapters.push({book_name: 'blank', empty: true})
      totalLastRow++
    }
    return chapters
  }

  render() {
    
    let mode = this.state.mode;
     let modeStyle = Mode[mode] ? Mode[mode] : Mode ['lightmode'];

      let chapters = this.state.chapters
    return(
      <View style={{ flex: 1, top: 35, bottom: 35, backgroundColor: modeStyle.backgroundColor }}>
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
                this.props.navigation.navigate('Books')
              }}
            >
              <MaterialIcons name='arrow-back' size={24} color='#906031' />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6, alignContent: 'center' }}>
            <TouchableOpacity
              style={{ alignSelf: 'flex-start' }}
              onPress={() => this.props.navigation.navigate('Books')}
            >
              <Text style={{ color: modeStyle.color, fontSize: 18, fontWeight: 'bold' }}>Select a Chapter</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={() => {
                alert ('Select a Bible version!');   
              }}
            >
              <Text style={{ color: modeStyle.header, fontSize: 18, fontWeight: 'bold' }}>ADB</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 15 }}>
          <FlatList
            style={{ flex: 1, marginTop: 5, }}
            // data={this.state.verses}
            data={this.formatData(chapters, numColumns)}
            keyExtractor={(item) => item.chapter + item.book_name}
            numColumns={numColumns}
            renderItem={({ item, chapter }) => {
              if (item.empty === true) {
                return <View style={[styles.itemStyle, styles.itemInvisible]}/>
              }
              return (
                <TouchableOpacity style={[styles.itemStyle, {backgroundColor: modeStyle.button}]}
                  onPress={() => this.props.navigation.navigate('Read', {book_name: item.book_name, chapter: item.chapter})}
                >
                  <Text style={[styles.itemText, {color: modeStyle.color}]}>
                    {item.chapter}
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
  headerNavContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#0a090d",
    flexDirection: "row",
    alignItems: "center",
  },
})