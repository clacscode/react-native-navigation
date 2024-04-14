import { Pressable, Text, View, useWindowDimensions } from "react-native"
import { type NavigationProp, useNavigation, DrawerActions } from "@react-navigation/native";
import { HamburgerMenu, PrimaryButton } from "../../components/index";
import { globalStyles } from "../../theme/theme";
import { type RootStackParams } from "../../routes/StackNavigator";
import React, { useEffect } from "react";

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HamburgerMenu />
      )
    })
  }, [])

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label={'Products'}
        onPress={() => navigation.navigate('Products')} />

      <PrimaryButton
        label={'Settings'}
        onPress={() => navigation.navigate('Settings')} />

    </View>
  )
}