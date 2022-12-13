import { StyleSheet, View, Text, TextInput } from 'react-native';

import ImageViewer from '../components/ImageViewer'
import Button from '../components/Button';

export default function RegisterScreen({ navigation }) {
    const PlaceholderImage = require('../assets/images/logo.png');

    return (
        <View style={ styles.container }>
            <View style={ styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} profileImg="false"/>
            </View>
            <View style={ styles.loginContainer }>
                <View style={ styles.card }>
                    <Text style={ styles.title }>Register</Text>
                    <Text style={ styles.basicText }>Email</Text>
                    <TextInput style={ styles.inputField }/>
                    <Text style={ styles.basicText }>Password</Text>
                    <TextInput style={ styles.inputField }/>
                    <Text style={ styles.basicText }>Confirm password</Text>
                    <TextInput style={ styles.inputField }/>
                    <Button label="Register" route="Home"  navigation={ navigation }/>
                    <Button label="Log In " route="Login"  navigation={ navigation }/>
                    <Button label="Log In via QR code" route="Scan"  navigation={ navigation } />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F8BFF',
      alignItems: 'center',
    },
    imageContainer: {
      flex: 0.3,
      width: 152,
      height: 176,
      marginTop: 100,    
    },
    loginContainer: {
      flex: 0.6,
    },
    card: {
      backgroundColor: '#fff',
      width: 320,
      borderRadius: 30,
      paddingTop: 40,
      paddingBottom: 40,
    },
    title: {
      fontSize: 20,
      color: '#595858',
      textAlign: 'center',
      marginBottom: 20,
    },
    basicText: {
      fontSize: 14,
      color: '#595858',
      marginLeft: 50,
    },
    inputField: {
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
    },
  });