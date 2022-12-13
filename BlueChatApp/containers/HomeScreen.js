import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ChatsScreen from './ChatsScreen';
import AccountScreen from './AccountScreen';
import ParamsScreen from './ParamsScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator 
        initialRouteName="Chats"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Account') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Params') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              } else if (route.name === 'Chats') {
                iconName = focused
                    ? 'ios-chatbubbles'
                    : 'ios-chatbubbles-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
      >
        <Tab.Screen name="Chats" component={ChatsScreen} options={{ title: 'Chats', tabBarBadge: 3, tabBarBadgeStyle: {backgroundColor: "#5F8BFF"} }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} />
        <Tab.Screen name="Params" component={ParamsScreen} options={{ title: 'Parameters' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}