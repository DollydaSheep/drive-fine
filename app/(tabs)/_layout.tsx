import '@/global.css';
import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { CircleAlert, Clock, FileText, House } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useAuth } from '@/hooks/useUserRole';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import HeaderComponent from '@/components/header';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const { user } = useAuth();

  if (!user) return null;

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
            title: 'Tickets',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">Tickets</Text>
              </View>
            ),
            tabBarLabel: 'Tickets',
            tabBarIcon: ({ color }) => <FileText color={color} className="size-6" />,
            tabBarBadge: 3
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">History</Text>
              </View>
            ),
            tabBarLabel: 'History',
            tabBarIcon: ({ color }) => <Clock color={color} className="size-6" />,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'About',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">About</Text>
              </View>
            ),
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => <CircleAlert color={color} className="size-6" />,
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
