import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, navigation, route }) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => navigation.navigate(route)}>
        <Text style={styles.buttonLabel}> { label }</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5F8BFF',
    borderRadius: 10,
    width: '40%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
  },
});