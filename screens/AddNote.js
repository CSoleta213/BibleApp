import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Mode from "../assets/style";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialIcons } from '@expo/vector-icons'; 

import * as SQLite from 'expo-sqlite';
const DB = SQLite.openDatabase('db.db');

export default class AddNote extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: null,
        title: '',
        description: '',
        content: '',
      }
    }
  
    componentDidMount() {
      let params = this.props.route.params;
      if (params && this.state.id != params.id) {
        this.setUpdatingData(params);
      }
      this.loaddefaultmode()
    }

    async loaddefaultmode() {
      let mode = await AsyncStorage.getItem("mode");
      this.setState({mode})
    }
  
    setUpdatingData(params) {
      this.setState({
        id: params.id,
        title: params.title,
        description: params.description,
        content: params.content
      })
    }
  
    save() {
      if (!this.state.title || !this.state.description || !this.state.content) {
        alert("Title, description, and content are required!");
      } else {
        DB.transaction(
          tx => {
            if (this.state.id) {
              tx.executeSql('UPDATE notes SET title = ?, description = ?, content = ? WHERE id = ?', [this.state.title, this.state.description, this.state.content, this.state.id]);
            } else {
              tx.executeSql('INSERT INTO notes (title, description, content) VALUES (?, ?, ?)', [this.state.title, this.state.description, this.state.content]);
            }
          }, null, () => {
            this.props.navigation.navigate('Note', {update: true});
          }
        );
      }
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
            backgroundColor: modeStyle.header,
            flexDirection: "row",
            alignItems: "center",

          }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ alignSelf: 'center'}}
                onPress={() => {
                  this.props.navigation.goBack()
                }}
              >
                <MaterialIcons name="arrow-back" size={24} color='#906031' />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6 }}>
              <Text style={{ color: modeStyle.color, fontSize: 18, fontWeight: 'bold' }}>{this.state.title}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  this.save()
                }}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Text style={{ color: '#906031', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, margin: 20, paddingBottom: 40 }}>
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderStyle: 'dashed',
                borderRadius: 10,
                marginBottom: 10,
                paddingHorizontal: 8,
                paddingVertical: 6,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                color: modeStyle.color,
                borderColor: modeStyle.color,
              }}
              onChangeText={text => this.setState({title: text})}
              value={this.state.title}
              placeholder='Title'
            />
            <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderStyle: 'dashed',
                borderRadius: 10,
                marginBottom: 10,
                paddingHorizontal: 8,
                paddingVertical: 6,
                textAlign: 'center',
                fontWeight: 'bold',
                color: modeStyle.color,
                borderColor: modeStyle.color,
              }}
              onChangeText={text => this.setState({description: text})}
              value={this.state.description}
              placeholder='Description'
            />
            <TextInput
              multiline
              style={{
                flex: 1,
                borderWidth: 1,
                borderStyle: 'dashed',
                borderRadius: 10,
                marginBottom: 10,
                paddingHorizontal: 8,
                paddingVertical: 6,
                textAlignVertical: 'top',
                color: modeStyle.color,
                borderColor: modeStyle.color,
              }}
              onChangeText={text => this.setState({content: text})}
              value={this.state.content}
              placeholder='Your notes...'
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
  