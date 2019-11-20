import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 class profile extends React.Component{
  static navigationOptions = {
    header: null
  }
    render(){
      return(
        <View>
          <Text>profile</Text>
        </View>
      )
    }
  }
  export default profile;
  