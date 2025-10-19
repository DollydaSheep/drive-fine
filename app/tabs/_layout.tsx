import '@/global.css';

import { NAV_THEME, THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { CircleAlert, Clock, FileText, House } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/hooks/useUserRole';
import { Text } from '@/components/ui/text';
import { Image, View } from 'react-native';

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
            header: () => (
            <>
              <View className='flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme'>
                <View className='p-2 bg-background dark:bg-foreground rounded-lg'>
                  <Image
                    source={require('@/assets/images/logoP.png')}
                    resizeMethod='resize'
                    style={{
                      width: 25,
                      height: 30
                    }}
                  />
                </View>
                <Text className='font-medium text-xl text-foreground'>DriveFine</Text>
              </View>
            </>),
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

        <Tabs.Screen 
          name='tickets'
          options={{
            title: "DriveFine",
            header: () => (
            <>
              <View className='flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme'>
                <Text className='font-medium text-xl text-foreground'>DriveFine</Text>
              </View>
            </>),
            headerTransparent: false,
            headerStyle: {backgroundColor: colorScheme === 'dark' ? THEME.dark.background : THEME.light.background},
            tabBarLabel: "Tickets",
            tabBarIcon: ({color}) => (
              <FileText 
                className='size-6'
                color={color}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='history'
          options={{
            title: "DriveFine",
            header: () => (
            <>
              <View className='flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme'>
                <Text className='font-medium text-xl text-foreground'>DriveFine</Text>
              </View>
            </>),
            headerTransparent: false,
            headerStyle: {backgroundColor: colorScheme === 'dark' ? THEME.dark.background : THEME.light.background},
            tabBarLabel: "History",
            tabBarIcon: ({color}) => (
              <Clock 
                className='size-6'
                color={color}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='about'
          options={{
            title: "DriveFine",
            header: () => (
            <>
              <View className='flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme'>
                <Text className='font-medium text-xl text-foreground'>DriveFine</Text>
              </View>
            </>),
            headerTransparent: false,
            headerStyle: {backgroundColor: colorScheme === 'dark' ? THEME.dark.background : THEME.light.background},
            tabBarLabel: "About",
            tabBarIcon: ({color}) => (
              <CircleAlert 
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
