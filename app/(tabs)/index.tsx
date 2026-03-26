import { ScrollView ,Image} from "react-native"
import { YStack} from "tamagui"
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import SearchBar from "@/components/SearchBar"
import { useRouter } from "expo-router"
export default function IndexScreen() {
  const router = useRouter()
  return (
    <YStack flex={1} backgroundColor="#050510">

      {/* Background */}
      <Image
        source={images.bg}
        width={undefined}
        height={undefined}
        resizeMode="cover"
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}
      />

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <YStack paddingHorizontal="$4" paddingTop="$12" gap="$5" zIndex={1}>

          {/* Logo */}
          <YStack alignItems="center">
            <Image
              source={icons.logo}
              width={48}
              height={40}
              resizeMode="contain"
            />
          </YStack>

          {/* Search bar */}
          <SearchBar
            placeholder="Search for a movie..."
            onChangeText={() => {}}
             onPress={() => router.push("/(tabs)/search")}
          />

        </YStack>
      </ScrollView>

    </YStack>
  )
}