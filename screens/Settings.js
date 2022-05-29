import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import SettingsDarkSize from '../components/SettingsDarkSize';

export default class Settings extends Component {
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
              <MaterialIcons name="arrow-back" size={24} color='#906031' />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6, alignContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text></Text>
          </View>
        </View>
        {/* C O N T E N T */}
        <View style={{ flex: 1}}>
          <SettingsDarkSize />
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
            <MaterialIcons name='settings' size={24} color='#FFFFFF' />
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
