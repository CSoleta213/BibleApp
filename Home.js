import React, { Component } from 'react';
import {View, Text, FlatList, Image, TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { recipes } from './data';
import { verses } from './database/Tagab';
import { getCategoryName } from './mockapi';

const{ width, height } = Dimensions.get('window');

import { MaterialIcons } from '@expo/vector-icons';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderGenesis = ({ item }) => {
    return(
      <TouchableHighlight style={styles.card}>
        <View style={{ flexDirection: 'row', padding: 10, marginBottom: 5, backgroundColor: '#f8f9fa' }}>
          {/* <Image source={{uri: item.photo_url}} style={styles.photo}/> */}
          <Text style={{ paddingVertical: 5, color: 'red' }}>{item.verse}</Text>
          <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>{item.text}</Text>
          {/* <Text style={styles.categoryName}>{getCategoryName(item.book_name)}</Text> */}
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
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
            data={genesis}
            renderItem={this.renderGenesis}
            keyExtractor={item => item.book + item.chapter + item.verse}
          />
        </View>
      </View>
    )
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
//   container: {
//     width,
//     padding:'3%',
//     flex: 1
//   },
//   card: {
//     width: '45%',
//     margin: '2.5%',
//     height: height/3,
//     borderRadius: 15,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     elevation: 12,
//     backgroundColor: '#FFF',
//     marginBottom: '5%'
//   },
//   photo: {
//     width: '100%',
//     height: '60%',
//     borderRadius: 15,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//   },
//   title: {
//     color: '#000',
//     fontSize: 20,
//     paddingTop: 10,
//     textAlign: 'center',
//     height: 60,
//   },
//   categoryName: {
//     fontSize: 15,
//     paddingTop: 10,
//     textAlign: 'center',
//   }
});
