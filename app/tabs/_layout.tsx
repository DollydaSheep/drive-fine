import '@/global.css';

import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { House } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/hooks/useUserRole';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
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
       <Tabs screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground
       }}>
        <Tabs.Screen 
          name='index'
          options={{
            title: "DriveFine",
            headerTransparent: false,
            headerStyle: {backgroundColor: colorScheme === 'dark' ? THEME.dark.background : THEME.light.background},
            tabBarLabel: "Home",
            tabBarIcon: ({color}) => (
              <House 
                className='size-6'
                color={color}
              />
            )
          }}
        />
       </Tabs>
      <PortalHost />
    </ThemeProvider>
  );
}
