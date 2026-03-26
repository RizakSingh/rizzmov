import { TouchableOpacity ,Image} from "react-native"
import { XStack, Text } from "tamagui"
import { useRouter } from "expo-router"
import { icons } from "@/constants/icons"

interface SearchBarProps {
  placeholder?: string
  onChangeText?: (text: string) => void
  onPress?: () => void
}

export default function SearchBar({ placeholder, onChangeText, onPress }: SearchBarProps) {
  const router = useRouter()

  const handlePress = () => {
    if (onPress) {
      onPress()
    } else {
      router.push("/(tabs)/search")  // ✅ default redirect to search tab
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <XStack
      marginTop="$2"
        backgroundColor="#040422"
        borderRadius="$10"
        borderWidth={1}
        borderColor="#1a3a6e"
        paddingHorizontal="$4"
        paddingVertical="$3"
        alignItems="center"
        gap="$3"
        shadowColor="#1a56db"
        shadowOffset={{ width: 0, height: 4 }}
        shadowOpacity={0.2}
        shadowRadius={10}
      >
        {/* Search icon */}
        <Image
          source={icons.search}
          width={18}
          height={18}
          resizeMode="contain"
          tintColor="#8ab4f8"
        />

        {/* Placeholder text */}
        <Text
          flex={1}
          color="#8ab4f8"
          fontSize="$4"
          opacity={0.7}
        >
          {placeholder || "Search..."}
        </Text>

        {/* Logo on right side */}
       

      </XStack>
    </TouchableOpacity>
  )
}