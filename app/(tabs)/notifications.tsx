import Skeletonbox from "@/components/skeleton/skeletonbox";
import { Text } from "@/components/ui/text";
import { useAppRefresh } from "@/hooks/refreshcontext";
import { useAuth } from "@/hooks/useUserRole";
import { db } from "@/lib/firebase";
import DateMonths from "@/lib/months";
import { THEME } from "@/lib/theme";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Bell, Calendar } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";


export default function TicketsScreen(){
  const { colorScheme } = useColorScheme();

  const { user } = useAuth();

  const { setIsRefreshing, isRefreshing ,refreshFlag ,triggerRefresh } = useAppRefresh();
  const [notifData,setNotifData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!user?.uid) return;

  const fetchUserNotification = async () => {
    try {
      // 1. Query all notifications for this user
      const q = query(
        collection(db, "notification"),
        where("userId", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);

      // 2. Map to array
      const notifArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log(notifArray);

      setNotifData(notifArray);
      setLoading(false)
      setIsRefreshing(false)
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  fetchUserNotification();
}, [user?.uid, refreshFlag]);


  return(
    <>
      {loading && (
        <View className="flex-1 p-4">
          <Skeletonbox height={50} />
        </View>
      )}
      {!loading && (
        <>
        <ScrollView >
          <View className="flex-1 p-4 gap-2">
          {notifData.length === 0 && (
            <View className="flex flex-row items-start p-4 border border-ytheme rounded-lg gap-2">
              <Text>No notifications.</Text>
            </View>
          )}
          {notifData.map((notif:any,index:number)=>(
            <View key={index} className="flex flex-row items-start p-4 border border-ytheme rounded-lg gap-2">
              <View className="p-2 bg-foreground/5 rounded-lg">
                <Bell 
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
              </View>
              <View className="flex">
                <Text className="text-lg font-medium text-orange-400">Issued Ticket</Text>
                <Text className="text-sm font-light">Violation: {notif.violation}</Text>
                <View className="flex flex-row gap-1 items-center">
                  <Calendar 
                    size={16}
                    color={THEME.light.border}
                  />
                  <Text className="text-xs font-light text-foreground/20">{`${DateMonths[notif?.dateIssued.toDate().getMonth()]}-${notif?.dateIssued.toDate().getDate()}-${notif?.dateIssued.toDate().getFullYear()}`}</Text>
                </View>
              </View>
            </View>
          ))}
          </View>
        </ScrollView>
        </>
      )}
    </>
  )
}