import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default class Home extends Component {
  render() {
    return(
      <View style={{ flex: 1, top: 35, bottom: 35 }}>
        {/* C O N T E N T */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground source={require('../assets/home-bg-ss.png')} style={{width: '100%', height: '100%'}}></ImageBackground>
        </View>
        {/* B O T T O M  N A V */}
        <View style={styles.container}>
        
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Note')
            }
          >
            <FontAwesome name='pencil' size={24} color='#906031' />
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
