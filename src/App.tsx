import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

import React from 'react';
import { BottomTapsNavigator } from './presentation/routes/BottomTapsNavigator';
import { TopTapsNavigator } from './presentation/routes/TopTapsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTapsNavigator /> */}
      {/* <TopTapsNavigator /> */}
    </NavigationContainer>
  )
}