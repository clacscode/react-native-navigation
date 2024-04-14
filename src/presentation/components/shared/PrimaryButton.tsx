import { Pressable, Text } from "react-native";
import { globalColors, globalStyles } from "../../theme/theme";

interface Props {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => ({
        ...globalStyles.primaryButton,
        // opacity: (pressed) ? 0.8 : 1,
        backgroundColor: (pressed) ? globalColors.tertiary : globalColors.primary
      })}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}