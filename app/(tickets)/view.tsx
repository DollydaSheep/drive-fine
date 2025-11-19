import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';
import { ArrowUpDown } from "lucide-react-native";
import { useAuth } from "@/hooks/useUserRole";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import DateMonths from "@/lib/months";



export default function ViewTicketsScreen(){

	const { user } = useAuth();

	const [tickets, setTickets] = useState<any[]>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!user?.uid) return;

		setLoading(true);

		const q = query(
			collection(db, "tickets")
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
          title: "View Tickets"
        }}
      />
			<ScrollView className="flex-1 mb-10">
			<View className='h-screen'>
			
				<ScrollView
					horizontal={true}
					className="flex-1"
				>
				<View className='flex-1 bg-background mb-8'>
					<View className="flex flex-row items-center gap-4 p-2 bg-foreground/50">
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Violation</Text>
							
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Last Name</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">First Name</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Date Issued</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Enforcer</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Fine Amount</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center"></Text>
						</View>
					</View>


					{!loading && (
						<>
							{tickets && tickets.map((ticket,index)=>(
								<View key={index} className={`flex flex-row items-center gap-4 p-2 ${index % 2 === 0 ? "bg-foreground/10" : "bg-background border-b border-foreground/10"}`}>
									<View style={{width: 100}}>
										<Text className="text-center">{ticket.violation}</Text>
									</View>
									<View style={{width: 100}}>
										<Text className="text-center">{ticket.userLastName}</Text>
									</View>
									<View style={{width: 100}}>
										<Text className="text-center">{ticket.userFirstName}</Text>
									</View>
									<View style={{width: 100}}>
										<Text className="text-center">{`${DateMonths[ticket.dateIssued.toDate().getMonth()]}-${ticket.dateIssued.toDate().getDate()}-${ticket.dateIssued.toDate().getFullYear()}`}</Text>
									</View>
									<View style={{width: 100}} >
										<Text className="text-center">{`${ticket.enforcerFirstName} ${ticket.enforcerLastName}`}</Text>
									</View>
									<View style={{width: 100}} >
										<Text className="text-center">{`P${ticket.fineAmount}.00`}</Text>
									</View>
									<Pressable onPress={()=>{router.push({
																pathname: '/(tickets)/[id]',
																params: { id: ticket.id}
															})}}>
										<View className="bg-foreground/50 p-2 rounded-lg">
											<Text className="text-background">View Ticket</Text>
										</View>
									</Pressable>
								</View>
							))}
						</>
					)}

				</View>
				</ScrollView>
			</View>
			</ScrollView>
		</>
	)
}