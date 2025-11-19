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
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAppRefresh } from '@/hooks/refreshcontext';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const { user } = useAuth();

  const { setIsRefreshing, isRefreshing ,refreshFlag ,triggerRefresh } = useAppRefresh();
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const fetchUnreadNotifications = async (userId: string) => {
    try {
      const q = query(
        collection(db, "notification"),
        where("userId", "==", userId),
        where("status", "==", "Unread")
      );

      const snapshot = await getDocs(q);

      // Count the number of unread notifications
      setUnreadCount(snapshot.size);
    } catch (error) {
      console.error("Error fetching unread notifications:", error);
    }
  };

  useEffect(() => {
    if (!user?.uid) return;

    fetchUnreadNotifications(user.uid);
  }, [user?.uid, refreshFlag]);

  const markAllNotificationsRead = async (userId: string) => {
    try {
      const q = query(
        collection(db, "notification"),
        where("userId", "==", userId),
        where("status", "==", "Unread")
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) return;

      const batch = writeBatch(db);

      querySnapshot.forEach(docSnap => {
        const docRef = doc(db, "notification", docSnap.id);
        batch.update(docRef, { status: "Read" });
      });

      await batch.commit();
      setUnreadCount(0);
      console.log("All notifications marked as read!");
    } catch (error) {
      console.error("Error updating notifications:", error);
    }
  };

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
          name="notifications"
          options={{
            title: 'Notifications',
            header: () => (
              <View className="flex flex-row pt-8 p-3 items-center gap-2 bg-ytheme">
                <Text className="font-medium text-xl text-foreground">Notifications</Text>
              </View>
            ),
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color }) => <Bell color={color} className="size-6" />,
            tabBarBadge: unreadCount === 0 ? undefined : unreadCount
          }}
          listeners={{
            tabPress: e => {
              markAllNotificationsRead(user.uid); // replace with your current user's id
            },
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
