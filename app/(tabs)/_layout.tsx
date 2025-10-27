import '@/global.css';
import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Bell, CircleAlert, Clock, FileText, House, Settings, User } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useAuth } from '@/hooks/useUserRole';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import HeaderComponent from '@/components/header';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const { user } = useAuth();

  if(user === null){
    return(
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        <Stack>
          <Stack.Screen 
            name='index'
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor:
            colorScheme === 'dark'
              ? THEME.dark.foreground
              : THEME.light.foreground,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'DriveFine',
            header: () => <HeaderComponent />,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <House color={color} className="size-6" />,
          }}
        />

        <Tabs.Screen
          name="tickets"
          options={{
            title: 'Notifications',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">Notifications</Text>
              </View>
            ),
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color }) => <Bell color={color} className="size-6" />,
            tabBarBadge: 3
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">Settings</Text>
              </View>
            ),
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => <Settings color={color} className="size-6" />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">Profile</Text>
              </View>
            ),
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <User color={color} className="size-6" />,
          }}
        />
        <Tabs.Screen 
          name='tickets/tickets'
          options={{
            href: null
          }}
        />
        <Tabs.Screen 
          name='tickets/[id]'
          options={{
            href: null
          }}
        />
      </Tabs>
      <PortalHost />
    </ThemeProvider>
  );
}
