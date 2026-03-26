import { router } from 'expo-router'
import { YStack, Text, Button } from 'tamagui'
import { LinearGradient } from 'expo-linear-gradient'

export default function IndexScreen() {
  return (
    <LinearGradient colors={['#000000', '#050510', '#0a0a2e']} style={{ flex: 1 }}>
      <YStack flex={1} alignItems="center" justifyContent="center" gap="$4" paddingHorizontal="$6">

     

        <Text fontSize="$10" fontWeight="800" color="#e8f0ff" letterSpacing={4}>
          PROPIFY
        </Text>

        <Text fontSize="$2" color="#8ab4f8" letterSpacing={3}>
          PROVE YOUR GRIND EVERY DAY
        </Text>

        {/* Streak card */}
        <YStack
          width="100%"
          alignItems="center"
          padding="$5"
          marginTop="$4"
          borderRadius="$4"
          borderWidth={1}
          borderColor="#1a3a6e"
          backgroundColor="#0a0a2e"
          gap="$2"
        >
          <Text fontSize="$2" color="#8ab4f8" letterSpacing={3}>CURRENT STREAK</Text>
          <Text fontSize="$10" fontWeight="800" color="#e8f0ff">🔥 0</Text>
          <Text fontSize="$3" color="#8ab4f8" letterSpacing={2}>days of proof</Text>
        </YStack>

        {/* Get Started button */}
        <Button
          width="100%"
          height={56}
          borderRadius="$4"
          backgroundColor="#1a56db"
          marginTop="$4"
          pressStyle={{ backgroundColor: '#1e3a8a' }}

        >
          <Text fontWeight="800" letterSpacing={3} color="#ffffff">
            GET STARTED
          </Text>
        </Button>

        {/* Login button */}
        <Button
          width="100%"
          height={56}
          borderRadius="$4"
          backgroundColor="transparent"
          borderWidth={1}
          borderColor="#1a3a6e"
          pressStyle={{ backgroundColor: '#0a0a2e' }}
       
        >
          <Text fontWeight="700" letterSpacing={2} color="#8ab4f8">
            ALREADY A GRINDER? LOGIN
          </Text>
        </Button>

      </YStack>
    </LinearGradient>
  )
}