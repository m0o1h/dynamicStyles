import React from 'react';
import { View, Text } from 'react-native';
import Inputs from './screens/inputs';
import { Styles } from './screens/Styles';


export default function App() {
  return (
    <View style={Styles.container} >
      <View style={Styles.header} >
        <Text style={Styles.headerText} >About Your Pregnancy</Text>
      </View>
      <Inputs />
    </View>
  );
}
