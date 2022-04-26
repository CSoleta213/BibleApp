import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default class Books extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        bible: [],
      };
    }
  
    fetchData() {
      DB.transaction(tx => {
        tx.executeSql('SELECT * FROM bible', [], (tx, { rows }) => {
          rows = rows._array ? rows._array : rows;
          this.setState({bible: rows});
        });
      });
    }
  
    render() {
      return(
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', top: 35, bottom: 35 }}>
  
          <FlatList
            style={{ flex: 1, marginTop: 10 }}
            data={this.state.bible}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity 
                      style={{ paddingHorizontal: 10, paddingVertical: 7, width: '33%', textAlign: 'center' }}
                      onPress={() => this.props.navigation.goBack()}
                    >
                      <Text style={{ textAlign: 'center' }}>{item.book}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
  
  
          {/* <View style={{ flex: 7, alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <View style={{ backgroundColor: '#00008B' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center' }}>OLD TESTAMENT</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity 
                  style={{ paddingHorizontal: 10, paddingVertical: 7, width: '33%', textAlign: 'center' }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Text style={{ textAlign: 'center' }}>Genesis</Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#00008B', top: 30 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', paddingVertical: 10, textAlign: 'center' }}>NEW TESTAMENT</Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', top: 30 }}>
                <TouchableOpacity 
                  style={{ paddingHorizontal: 10, paddingVertical: 7, width: '33%', textAlign: 'center' }}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Text style={{ textAlign: 'center' }}>Mateo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{  }}
            >
              <FontAwesome name="close" size={24} color="black" />
            </TouchableOpacity>
          </View> */}
        </View>
      );
    }
  }