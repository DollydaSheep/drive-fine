import '@/global.css';
import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useAuth } from '@/hooks/useUserRole';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const { user } = useAuth();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />        {/* tabs layout */}
        <Stack.Screen
          name="tickets/tickets/[id]"
          options={{
            headerShown: true,
            title: 'Ticket Details',
            presentation: 'card', // or 'modal'
          }}
        />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
