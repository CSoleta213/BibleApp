import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

import Mode from "../assets/style";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as SQLite from 'expo-sqlite';
const DB = SQLite.openDatabase('db.db');

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default class Note extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    if (!this.state.notes.length) {
      this.fetchData()
      this.loaddefaultmode()
    }
  }

  async loaddefaultmode() {
    let mode = await AsyncStorage.getItem("mode");
    this.setState({mode})
  }

  componentDidUpdate() {
    let params = this.props.route.params;
    if (params && params['update']) {
      this.fetchData();
    }
  }

  fetchData() {
    DB.transaction(tx => {
      tx.executeSql('SELECT * FROM notes ORDER BY id DESC', [], (tx, { rows }) => {
        rows = rows._array ? rows._array : rows;
        this.setState({notes: rows});
      });
    });
  }

  deleteNote(id) {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel'
      },
      { text: 'OK', onPress: () => {
        DB.transaction(tx => {
          tx.executeSql('delete from notes where id = ?', [id], (tx) => {
            this.fetchData();
          });
        });
      }}
    ],
    { cancelable: false }
    );
  }

  render() {
    let mode = this.state.mode;
     let modeStyle = Mode[mode] ? Mode[mode] : Mode ['lightmode'];
    return(
      <View style={{ flex: 1, top: 35, bottom: 35, backgroundColor: modeStyle.backgroundColor }}>
        {/* H E A D E R */}
        <View style={{
          height: 50,
          width: "100%",
          backgroundColor: "#0a090d",
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
              <MaterialIcons name="arrow-back" size={24} color='#906031' />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={{ color: modeStyle.color, fontSize: 18, fontWeight: 'bold' }}>My Notes</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('AddNote')
              }}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <MaterialIcons name="add" size={24} color='#906031' />
              <Text style={{ color: '#906031', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Add note</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* C O N T E N T */}
        <View style={{ flex: 1, padding: 10, paddingHorizontal: 15 }}>
          <FlatList
            style={{ flex: 1, marginTop: 5 }}
            data={this.state.notes}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={{ backgroundColor: modeStyle.button, marginBottom: 5, padding: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 10, }}>
                  <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row', }}
                    onPress={() => {
                      this.props.navigation.navigate('AddNote', item)
                    }}
                  >
                    <Text style={{ flex: 2, fontWeight: 'bold', color: modeStyle.color }}>{item.title}</Text>
                    <Text style={{ flex: 3, color: modeStyle.color }}>{item.description}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: 40, paddingVertical: 5, borderRadius: 10 }}
                    onPress={() => {
                      this.deleteNote(item.id)
                    }}
                  >
                    <Text style={{ textAlign: 'center' }}><FontAwesome name="trash-o" size={24} color="#C70000" /></Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/* B O T T O M  N A V */}
        <View style={styles.container}>
        
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Note')
            }
          >
            <FontAwesome name='pencil' size={24} color='#FFFFFF' />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Books')
            }
            style={styles.bottomNavCircle}
          >
            <FontAwesome5 name='book-open' size={18} color='#906031' />
            <Text style={{ color: '#906031', letterSpacing: 2 }}>READ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Settings')
            }
          >
            <MaterialIcons name='settings' size={24} color='#906031' />
          </TouchableOpacity>

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
