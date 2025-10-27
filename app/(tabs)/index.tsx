import EnforcerDashboard from '@/components/enforcerDashboard';
import LoginScreen from '@/components/login';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import UserDashboard from '@/components/userDashboard';
import { useAuth } from '@/hooks/useUserRole';
import { auth, db } from '@/lib/firebase';
import { THEME } from '@/lib/theme';
import { Link, router, Stack } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import { signOut } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { ChevronRight, CircleAlert, Clock, FileText, MoonStarIcon, StarIcon, SunIcon, Wallet } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { useEffect, useState } from 'react';
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

  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const userDocRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setRole(userData.role || null);
        } else {
          console.warn("User document not found");
        }
      } catch (err) {
        console.error("Error fetching role:", err);
      }

      setLoading(false);
    };

    fetchUserRole();
  }, [user]);

  if(user === null){
    return (
      <>
        <LoginScreen />
      </>
    );
  }

  if(role === 'user')
  return (
    <>
      <UserDashboard />
    </>
  );
  if(role === 'enforcer'){
    return(
      <>
        <EnforcerDashboard />
      </>
    )
  }
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
