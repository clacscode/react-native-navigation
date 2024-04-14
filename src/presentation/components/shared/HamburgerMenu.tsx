import { useEffect } from "react";
import { Pressable } from "react-native"
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { IonIcon } from "./IonIcon";
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{
            marginLeft: 5
          }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" size={30} color={globalColors.primary} />

        </Pressable>
      )
    })
  }, []);

  return (<></>);

}