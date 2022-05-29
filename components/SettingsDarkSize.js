import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import Constants from 'expo-constants';
import Mode from "../assets/style";

import AsyncStorage from '@react-native-async-storage/async-storage';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
     mode: 'lightmode',
    }
  }

  async componentDidMount() {
    this.loaddefaultmode()
  }

  async loaddefaultmode() {
    let mode = await AsyncStorage.getItem("mode");
    this.setState({mode, })
  }

  render() {

     let mode = this.state.mode;
     let modeStyle = Mode[mode] ? Mode[mode] : Mode ['lightmode'];

    return(
     <View style={{backgroundColor: modeStyle.backgroundColor, flex: 1, alignItems: 'center'}}>

        <Text style={{textAlign: 'center', marginTop: 80 , color: modeStyle.color}}>
         
         Change this font size
        </Text>
        <Text style={{textAlign: 'center' , color: modeStyle.color , fontSize: this.state.fontSize }}>A</Text>

        <View style={{marginHorizontal: 50,}}>
          <Button
            title="+"
             onPress={async () => {
              if (this.state.fontSize < 40) {
                this.setState({fontSize: this.state.fontSize + 2})
              }
            }}
          />
        </View>

        <View style={{marginHorizontal: 50 , }}>
          <Button
            title="-"
            onPress={() => {
              if (this.state.fontSize > 14) {
                this.setState({fontSize: this.state.fontSize - 2})
              }
            }}
          />
        </View>
        <Text style={{paddingTop: 50, color: modeStyle.color }}>
          Toggle darkmode
        </Text>

        <View style={{marginTop: 20}}>
              <Button 
          title="Set Mode to Dark"
          onPress={async () => {
            await AsyncStorage.setItem("mode",'darkmode');
            this.setState({mode:'darkmode'});
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
            <Button 
          title="Set Mode to Light"
          onPress={async () => {
            await AsyncStorage.setItem("mode", 'lightmode');
            this.setState({mode:'lightmode'});
            }}
          />
        </View>   
        {/* <View style={{marginTop: 10}}>
          <Button 
          title="Set Mode to Noon"
          onPress={async () => {
            await AsyncStorage.setItem("mode", 'moodMRN');
            this.setState({mode:'moodMRN'});
            }}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Button 
          title="Set Mode to Dawn"
          onPress={async () => {
            await AsyncStorage.setItem("mode", 'moodNN');
            this.setState({mode:'moodNN'});
            }}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Button 
          title="Set Mode to Dawn"
          onPress={async () => {
            await AsyncStorage.setItem("mode", 'moodSS');
            this.setState({mode:'moodSS'});
            }}
          />
        </View>

        <View style={{marginTop: 10}}>
          <Button 
          title="Set Mode to Dawn"
          onPress={async () => {
            await AsyncStorage.setItem("mode", 'moodNHT');
            this.setState({mode:'moodNHT'});
            }}
          />
        </View> */}
      </View>
    );
  }
}
export default Settings;