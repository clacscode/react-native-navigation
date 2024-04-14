import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';
import { TopTapsNavigator } from './TopTapsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components';

const Tab = createBottomTabNavigator();

export const BottomTapsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}>

      <Tab.Screen name="Tab1" options={{ title: 'Home', tabBarIcon: ({ color }) => (<IonIcon name='home-outline' color={color} />) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: 'About', tabBarIcon: ({ color }) => (<IonIcon name='at-outline' color={color} />) }} component={TopTapsNavigator} />
      <Tab.Screen name="Tab3" options={{ title: 'Settings', tabBarIcon: ({ color }) => (<IonIcon name='settings-outline' color={color} />) }} component={StackNavigator} />
    </Tab.Navigator>
  );
}