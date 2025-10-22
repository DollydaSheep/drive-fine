import LoginScreen from '@/components/login';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useAuth } from '@/hooks/useUserRole';
import { auth } from '@/lib/firebase';
import { THEME } from '@/lib/theme';
import { Link, Stack } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import { signOut } from 'firebase/auth';
import { ChevronRight, CircleAlert, Clock, FileText, MoonStarIcon, StarIcon, SunIcon, Wallet } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, ImageBackground, type ImageStyle, Pressable, ScrollView, TextInput, View } from 'react-native';

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: 'React Native Reusables',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();

  const { user } = useAuth();

  const handleLogout = async () => {
    signOut(auth)
      .then(()=>{
        console.log("User Logged Out");
      })
      .catch((err)=>{
        console.error(err.message);
      })
  }

  if(user === null){
    return (
      <>
        <LoginScreen />
      </>
    );
  }

  return (
    <>

      <ScrollView>

        <View className='flex-1 p-3 gap-2'>

          <Text className='text-lg font-medium text-foreground'>Quick Actions</Text>
          
          <Pressable className='w-full' onPress={()=>navigate('/tabs/tickets')}>
            <View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
              <View className='flex flex-row items-center gap-2'>
                <FileText 
                  size={40}
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
                <Text className='font-medium text-lg'>My Tickets</Text>
              </View>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </Pressable>

          <Pressable className='w-full' onPress={()=>navigate('/tabs/tickets')}>
            <View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
              <View className='flex flex-row items-center gap-2'>
                <Wallet 
                  size={40}
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
                <Text className='font-medium text-lg'>Pay Fines</Text>
              </View>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </Pressable>

          <Pressable className='w-full' onPress={()=>navigate('/tabs/history')}>
            <View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
              <View className='flex flex-row items-center gap-2'>
                <Clock 
                  size={40}
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
                <Text className='font-medium text-lg'>History</Text>
              </View>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </Pressable>

          <Pressable className='w-full' onPress={()=>navigate('/tabs/about')}>
            <View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
              <View className='flex flex-row items-center gap-2'>
                <CircleAlert 
                  size={40}
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
                <Text className='font-medium text-lg'>Policies</Text>
              </View>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </Pressable>

          <Text className='text-lg font-medium text-foreground'>Recent Tickets</Text>

          <View className='py-3 px-4 rounded-lg border border-ytheme'>
            <View className='flex flex-row justify-between items-center'>
              <Text className='text-foreground font-medium'>Illegal Parking</Text>
              <Text className='text-xs font-medium text-foreground/50 bg-ytheme/50 px-3 py-1 rounded-full'>Pending</Text>
            </View>
            <Text className='font-light text-sm text-foreground'>2025-10-10</Text>
            <View className='flex flex-row justify-between mt-2'>
              <Text className='text-lg font-semibold text-foreground'>₱2,000.00</Text>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </View>

          <View className='py-3 px-4 rounded-lg border border-ytheme'>
            <View className='flex flex-row justify-between items-center'>
              <Text className='text-foreground font-medium'>No Seatbelt</Text>
              <Text className='text-xs font-medium text-foreground/50 bg-green-500/20 px-3 py-1 rounded-full'>Paid</Text>
            </View>
            <Text className='font-light text-sm text-foreground'>2025-09-15</Text>
            <View className='flex flex-row justify-between mt-2'>
              <Text className='text-lg font-semibold text-foreground'>₱200.00</Text>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </View>

          <Pressable className='flex flex-row' onPress={handleLogout}>
            <View className='bg-gray-500 p-2'>
              <Text>Log out</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
