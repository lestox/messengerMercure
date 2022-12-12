import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import Link from './components/Link';

function LoginScreen({ navigation }) {
  const PlaceholderImage = require('./assets/images/logo.png');

  return (
    <View style={ styles.container }>
      <View style={ styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} profileImg="false"/>
      </View>
      <View style={ styles.loginContainer }>
        <View style={ styles.card }>
          <Text style={ styles.title }>Sign In</Text>
          <Text style={ styles.basicText }>Email</Text>
          <TextInput style={ styles.inputField }/>
          <Text style={ styles.basicText }>Password</Text>
          <TextInput style={ styles.inputField }/>
          <Button label="Log In" route="Home"  navigation={ navigation }/>
          <Link label="Create account" route="Register"  navigation={ navigation }/>
          <Link label="Log In via QR code" route="Scan"  navigation={ navigation } />
        </View>
      </View>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  const PlaceholderImage = require('./assets/images/logo.png');

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
          <Link label="Log In " route="Login"  navigation={ navigation }/>
          <Link label="Log In via QR code" route="Scan"  navigation={ navigation } />
        </View>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  const PlaceholderImage = require('./assets/images/profile_image.png');
  const heightNb = 50;

  return (
    <View style={ styles.homeContainer }>
      <TextInput style={ styles.searchField } placeholder="Search" />
      <View style={ styles.conv }>
        <View style={ styles.profileContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} profileImg="true" />
        </View>
        <View style={{ justifyContent: 'center', width: '80%' }}>
          <Text style={{ color: '#1E1E1E', fontSize: 16 }}> Sophie Tournier</Text>
          <Text style={{ color: '#A8ADC4', fontSize: 16 }}> The last message send by the user... </Text>
        </View>
      </View>
      <View style={ styles.conv }>
        <View style={ styles.profileContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} profileImg="true" />
        </View>
        <View style={{ justifyContent: 'center', width: '80%' }}>
          <Text style={{ color: '#1E1E1E', fontSize: 16 }}> Laure Mercot</Text>
          <Text style={{ color: '#A8ADC4', fontSize: 16 }}> The last message send by the user... </Text>
        </View>
      </View>
      <View style={ styles.conv }>
        <View style={ styles.profileContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} profileImg="true" />
        </View>
        <View style={{ justifyContent: 'center', width: '80%' }}>
          <Text style={{ color: '#1E1E1E', fontSize: 16 }}> HETIC #1</Text>
          <Text style={{ color: '#A8ADC4', fontSize: 16 }}> The last message send by the user... </Text>
        </View>
      </View>
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scan Screen</Text>
    </View>
  );
}
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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Chats'}}/>
        <Stack.Screen name="Scan" component={ScanScreen} />
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
    flex: 0.3,
    justifyContent: 'end',
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
  },
  homeContainer: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    flex: 1,
  },
  searchField: {
    height: '10%',
    fontFamily: "Roboto_400Regular",
    width: '90%',
    height: 50,
    color: '#A8ADC4',
    backgroundColor: '#F4F5F7',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    fontSize: 18, 
  },
  conv: {
    width: '90%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  }
});