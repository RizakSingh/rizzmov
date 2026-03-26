import { Tabs } from 'expo-router'
import { View, Animated, Image } from 'react-native'
import { useRef, useEffect } from 'react'
import { icons } from '@/constants/icons'

function TabIcon({ focused, icon }: { focused: boolean; icon: any }) {
  const scale = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.15 : 1,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start()
  }, [focused,scale])

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 32,
        borderRadius: 12,
        backgroundColor: focused ? '#1a56db' : 'transparent',
        borderWidth: focused ? 1 : 0,
        borderColor: focused ? '#60a5fa' : 'transparent',
        shadowColor: focused ? '#1a56db' : 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: focused ? 1 : 0,
        shadowRadius: focused ? 10 : 0,
        elevation: focused ? 10 : 0,
      }}>
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            tintColor: focused ? '#ffffff' : '#8d99ad',
          }}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  )
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 30,
      marginHorizontal: 20,
          backgroundColor: '#08091a',
          borderRadius: 30,
          borderWidth: 0.5,
          borderColor: '#2952a3',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          shadowColor: '#1a56db',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.5,
          shadowRadius: 24,
          elevation: 24,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  )
}