import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import ImageViewer from '../components/ImageViewer';

export default function ScanScreen() {
  const PlaceholderImage = require('../assets/images/logo.png');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={{ width: 100, height: 100, paddingTop: 25 }}>
        <ImageViewer placeholderImageSource={PlaceholderImage} profileImg="true" />
      </View>
      <Text style={{ color: '#FFF', fontSize: 16, marginTop: 40, textAlign: 'center', paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}> Scanner le QR Code depuis l'application web pour vous connecter directement sur mobile </Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F8BFF',
      alignItems: 'center',
    }
});