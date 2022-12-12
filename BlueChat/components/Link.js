import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Link({ label, navigation, route  }) {
  return (
    <View style={styles.linkContainer}>
      <Pressable style={styles.link} onPress={() => navigation.navigate(route)}>
        <Text style={styles.linkLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  linkLabel: {
    fontSize: 10,
    textDecorationLine: 'underline',
    fontFamily: "Roboto_400Regular",
    color: '#595858',
  },
});