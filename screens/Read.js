import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default class Read extends Component {
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
          <ScrollView style={{ marginBottom: 40 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>1</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>Nang pasimula ay nilikha ng Dios ang mga langit at ang lupa.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>2</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At ang lupa ay walang anyo at walang laman; at ang kadiliman ay sumasa ibabaw ng kalaliman; at ang Espiritu ng Dios ay sumasa ibabaw ng tubig.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>3</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At sinabi ng Dios Magkaroon ng liwanag; at nagkaroon ng liwanag.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>4</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At nakita ng Dios ang liwanag na mabuti, at inihiwalay ng Dios ang liwanag sa kadiliman.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>5</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At tinawag ng Dios ang liwanag na Araw, at tinawag niya ang kadiliman na Gabi. At nagkahapon at nagkaumaga ang unang araw.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>6</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At sinabi ng Dios, Magkaroon ng isang kalawakan sa gitna ng tubig, at mahiwalay ang tubig sa kapuwa tubig.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>7</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At ginawa ng Dios ang kalawakan, at inihiwalay ang tubig na nasa ilalim ng kalawakan, sa tubig na nasa itaas ng kalawakan: at nagkagayon.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>8</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At tinawag ng Dios ang kalawakan na Langit. At nagkahapon at nagkaumaga ang ikalawang araw.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>9</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At sinabi ng Dios, Mapisan ang tubig na nasa silong ng langit sa isang dako, at lumitaw ang katuyuan, at nagkagayon.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>10</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At tinawag ng Dios ang katuyuan na Lupa, at ang kapisanan ng tubig ay tinawag niyang mga Dagat: at nakita ng Dios na mabuti.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>11</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At sinabi ng Dios, Sibulan ang lupa ng damo, pananim na nagkakabinhi, at punong kahoy na namumunga ayon sa kaniyang pagkakahoy, na taglay ang kaniyang binhi sa ibabaw ng lupa, at nagkagayon.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>12</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At ang lupa ay sinibulan ng damo, pananim na nagkakabinhi, ayon sa kaniyang pagkapananim, at ng punong kahoy na namumunga, na taglay ang kaniyang binhi, ayon sa kaniyang pagkakahoy, at nakita ng Dios na mabuti.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>13</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At nagkahapon at nagkaumaga ang ikatlong araw.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>14</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At sinabi ng Dios, Magkaroon ng mga tanglaw sa kalawakan ng langit upang maghiwalay ng araw sa gabi; at maging pinakatanda, at pinakabahagi ng panahon, ng mga araw at ng mga taon:</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>15</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At maging pinakatanglaw sa kalawakan ng langit, upang tumanglaw sa ibabaw ng lupa: at nagkagayon.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>16</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At nilikha ng Dios ang dalawang malaking tanglaw; ang malaking tanglaw ay upang magpuno sa araw, at ang maliit na tanglaw ay upang magpuno sa gabi: nilikha rin niya ang mga bituin.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>17</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At mga inilagay ng Dios sa kalawakan ng langit, upang tumanglaw sa ibabaw ng lupa,</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>18</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At upang magpuno sa araw at sa gabi, at upang maghiwalay ng liwanag sa kadiliman: at nakita ng Dios na mabuti.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>19</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At nagkahapon at nagkaumaga ang ikaapat na araw.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ paddingVertical: 5, color: 'red' }}>20</Text>
              <Text style={{ paddingVertical: 5, paddingHorizontal: 10 }}>At sinabi ng Dios, Bukalan ng sagana ang tubig ng mga gumagalaw na kinapal na may buhay, at magsilipad ang mga ibon sa itaas ng lupa sa luwal na kalawakan ng himpapawid.</Text>
            </View>
          </ScrollView>
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
  