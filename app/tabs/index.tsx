import LoginScreen from '@/components/login';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useAuth } from '@/hooks/useUserRole';
import { auth } from '@/lib/firebase';
import { THEME } from '@/lib/theme';
import { Link, Stack } from 'expo-router';
import { signOut } from 'firebase/auth';
import { ChevronRight, CircleAlert, Clock, FileText, MoonStarIcon, StarIcon, SunIcon, Wallet } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, Pressable, TextInput, View } from 'react-native';

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
      <View className='flex-1 p-3 gap-2'>
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

        <Pressable className='flex flex-row' onPress={handleLogout}>
          <View className='bg-gray-500 p-2'>
            <Text>Log out</Text>
          </View>
        </Pressable>
      </View>
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
