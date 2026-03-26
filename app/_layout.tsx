import { Stack } from 'expo-router'
import { TamaguiProvider,Theme ,YStack} from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'
import { useColorScheme } from 'react-native'

export default function RootLayout() {
    const scheme = useColorScheme()
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={scheme === 'dark' ? 'dark' : 'light'}>
      <Theme name={scheme === 'dark' ? 'dark' : 'light'}>
       
        <YStack flex={1} backgroundColor="$background">
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="movies/[id]"   options={{ headerShown: false }}/>
          </Stack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}