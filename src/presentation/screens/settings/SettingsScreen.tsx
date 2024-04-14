import { Text, View } from "react-native"
import { PrimaryButton } from "../../components"
import { globalStyles } from "../../theme/theme";
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>

      <PrimaryButton
        label="Regresar"
        onPress={() => { navigator.goBack() }}
        onLongPress={() => { navigator.dispatch(StackActions.popToTop()) }} />
    </View>
  )
}
