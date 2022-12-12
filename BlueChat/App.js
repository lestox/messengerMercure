import { StyleSheet, Text, View, TextInput } from 'react-native';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import Link from './components/Link';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={ styles.loginContainer }>
        <View style={ styles.card }>
          <Text style={ styles.title }>Sign In</Text>
          <Text style={ styles.basicText }>Pseudo</Text>
          <TextInput style={ styles.inputField }/>
          <Text style={ styles.basicText }>Login</Text>
          <TextInput style={ styles.inputField }/>
          <Button label="Log In" />
          <Link label="Create account" />
          <Link label="Log In via QR code" />
        </View>
      </View>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const PlaceholderImage = require('./assets/images/logo.png');
const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
