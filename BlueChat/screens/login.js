import { StyleSheet, View, Text, TextInput } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import Link from './components/Link';

export default function Login({ navigation }) {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Sign In</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F8BFF',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 0.4,
      justifyContent: 'end',    
    },
    loginContainer: {
      flex: 0.6,
      marginTop: 50,
    },
    card: {
      backgroundColor: '#fff',
      width: 320,
      height: 350,
      borderRadius: 30,
    },
    title: {
      fontSize: 20,
      color: '#595858',
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 20,
      fontFamily: "Roboto_500Medium",
    },
    basicText: {
      fontSize: 14,
      color: '#595858',
      fontFamily: "Roboto_400Regular",
      marginLeft: 50,
    },
    inputField: {
      fontFamily: "Roboto_400Regular",
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 30,
      marginTop: 15,
      paddingLeft: 5,
      paddingBottom: 5,
      color: '#595858',
      opacity: 0.5,
      borderBottomColor: '#595858',
      borderBottomWidth: 1,
    }
  });