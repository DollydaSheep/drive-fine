import '@/global.css';
import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useAuth } from '@/hooks/useUserRole';
import { Text } from '@/components/ui/text';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const { user } = useAuth();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>        {/* tabs layout */}
        
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
