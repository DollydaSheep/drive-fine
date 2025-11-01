import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { View, Pressable } from "react-native";
import { Text } from '@/components/ui/text';
import { useColorScheme } from "nativewind";
import { useAuth } from "@/hooks/useUserRole";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ChevronRight } from "lucide-react-native";


export default function UserTicketHistory(){

	const { colorScheme } = useColorScheme();

	const { user } = useAuth();

	const [tickets, setTickets] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!user?.uid) return;

		const fetchTickets = async () => {
			try {
				const q = query(collection(db, "tickets"), where("userId", "==", user.uid), where("status", "==", "Paid") );
				const querySnapshot = await getDocs(q);
				const userTickets = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));
				setTickets(userTickets);
				console.log(userTickets)
			} catch (error) {
				console.error("Error fetching tickets:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchTickets();
	}, [user]);

	return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "History"
        }}
      />

			<View className="flex-1 p-4 gap-2">

				{loading ? (
					<Text className='text-foreground'>Loading tickets...</Text>
				) : tickets.length === 0 ? (
					<Text className='text-foreground'>No tickets found.</Text>
				) : (
					tickets.map((ticket) => (
						<Pressable key={ticket.id} onPress={()=>{router.push({
							pathname: '/(tickets)/[id]',
							params: { id: ticket.id}
						})}}>
							<View className='py-3 px-4 rounded-lg border border-ytheme'>
								<View className='flex flex-row justify-between items-center'>
									<Text className='text-foreground font-medium'>{ticket.violation}</Text>
									<Text className='text-xs font-medium text-foreground/50 bg-green-500/20 px-3 py-1 rounded-full'>Paid</Text>
								</View>
								<Text className='font-light text-sm text-foreground'>{ticket.dateIssued.toDate().toISOString().split("T")[0]}</Text>
								<View className='flex flex-row justify-between items-center mt-2'>
									<Text className="text-sm font-light text-foreground/80">Amount Paid</Text>
									<Text className='text-lg font-semibold text-foreground'>₱{ticket.fineAmount}.00</Text>
								</View>
							</View>
						</Pressable>
					))
				)}


			</View>
		</>
	)
}