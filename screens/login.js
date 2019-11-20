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

class Login extends React.Component{
  static navigationOptions = {
    header: null,
  }
  move = () =>{
    this.props.navigation.navigate('profile')
  }


    render(){
      return(
        <View>
          <Text onPress={this.move}>Login</Text>
        </View>
      )
    }
  }
  
export default Login;