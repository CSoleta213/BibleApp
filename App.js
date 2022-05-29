import 'react-native-gesture-handler';

import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getStorage, setStorage } from './helper/storage';

import Home from './screens/Home';
import Note from './screens/Note';
import AddNote from './screens/AddNote';
import Books from './screens/Books';
import Chapter from './screens/Chapters';
import Read from './screens/Read';
import Settings from './screens/Settings';

import * as SQLite from 'expo-sqlite';
const DB = SQLite.openDatabase('db.db');

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.dbInit();

    this.state = {
      notes: [],
    };
  }

  async dbInit() {
    var didInit = await getStorage('didInit');

    if (!didInit) {
      DB.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, content TEXT);');
        tx.executeSql(
          'INSERT INTO notes (title, description, content) VALUES ("Default Title", "Default Description", "Default Content);'
        );
      });

      await setStorage('didInit', 'true');
    }
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Note' component={Note} />
          <Stack.Screen name='AddNote' component={AddNote} />
          <Stack.Screen name='Books' component={Books} />
          <Stack.Screen name='Chapter' component={Chapter} />
          <Stack.Screen name='Read' component={Read} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}