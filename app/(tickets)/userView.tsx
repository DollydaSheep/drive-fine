import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';
import { ChevronRight } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { useAuth } from "@/hooks/useUserRole";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Skeletonbox from "@/components/skeleton/skeletonbox";
import DateMonths from "@/lib/months";


export default function UserViewTickets(){

	const { colorScheme } = useColorScheme();

  const { user } = useAuth();

  const [tickets, setTickets] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;

    setLoading(true);

    const q = query(
      collection(db, "tickets"),
      where("userId","==",user.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log("Tickets snapshot updated");

        const fetchedTickets = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTickets(fetchedTickets);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching tickets:", error);
      }
    );

    return () => unsubscribe();
  }, [user]);

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "My Tickets"
        }}
      />
			<View className="flex-1 p-4 gap-2">

        {loading && (
          <Skeletonbox height={60} />
        )}
        {!loading && tickets?.length !== 0 && tickets?.map((ticket,index)=> (
          <Pressable key={index} onPress={()=>{router.push({
            pathname: '/(tickets)/[id]',
            params: { id: ticket?.id }
          })}}>
            <View className='py-3 px-4 rounded-lg border border-ytheme'>
              <View className='flex flex-row justify-between items-center'>
                <Text className='text-foreground font-medium'>{ticket?.violation}</Text>
              </View>
							<Text className="text-sm">{`${ticket?.enforcerFirstName} ${ticket?.enforcerLastName}`}</Text>
              <Text className='font-light text-sm text-foreground'>{`${DateMonths[ticket?.dateIssued.toDate().getMonth()]}-${ticket?.dateIssued.toDate().getDate()}-${ticket?.dateIssued.toDate().getFullYear()}`}</Text>
              <View className='flex flex-row justify-between mt-2'>
                <Text className='text-lg font-semibold text-foreground'>{`₱${ticket?.fineAmount}.00`}</Text>
                <ChevronRight 
                  size={20}
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
              </View>
            </View>
          </Pressable>
        ))}
				
			</View>
		</>
	)
}