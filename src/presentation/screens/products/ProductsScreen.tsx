import { Text, View } from "react-native"
import { type NavigationProp, useNavigation } from "@react-navigation/native";

import { globalStyles } from '../../theme/theme';
import { FlatList } from "react-native-gesture-handler";
import { PrimaryButton } from "../../components";
import { type RootStackParams } from "../../routes/StackNavigator";

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' }
]

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>
      
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
            label={item.name}
          />
        )} 
      />

      <Text>Settings</Text>
      <PrimaryButton
        label={'Settings'}
        onPress={() => navigation.navigate('Settings')} />


    </View>
  )
}
