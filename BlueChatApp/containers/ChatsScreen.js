import { StyleSheet, View, Text, TextInput } from 'react-native';

import ImageViewer from '../components/ImageViewer';

export default function ChatsScreen() {
    const PlaceholderImage = require('../assets/images/profile_image.png');

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

const styles = StyleSheet.create({
    imageContainer: {
      flex: 0.3,
      width: 152,
      height: 176,
      marginTop: 100,    
    },
    homeContainer: {
      backgroundColor: '#FFF',
      alignItems: 'center',
      flex: 1,
    },
    searchField: {
      height: '10%',
      width: '90%',
      height: 50,
      color: '#A8ADC4',
      backgroundColor: '#F4F5F7',
      borderRadius: 20,
      paddingLeft: 20,
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