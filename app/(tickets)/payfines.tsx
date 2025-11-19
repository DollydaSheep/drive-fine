import { THEME } from "@/lib/theme";
import { Stack } from "expo-router";
import { ActivityIndicator, Alert, Linking, Modal, Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';
import { useEffect, useState } from "react";
import { Check } from "lucide-react-native";
import { useAuth } from "@/hooks/useUserRole";
import { addDoc, collection, doc, onSnapshot, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "moti/skeleton";
import DateMonths from "@/lib/months";
import Skeletonbox from "@/components/skeleton/skeletonbox";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function PayFinesScreen(){

	const [checkedTickets, setCheckedTickets] = useState<Set<string>>(new Set());
	const [checkedList, setCheckedList] = useState<any[]>([])
	const [totalAmount, setTotalAmount] = useState(0);

	const { user } = useAuth();

	const [tickets, setTickets] = useState<any[]>();
	const [loading, setLoading] = useState(true);
	
	const [confirmPayment, setConfirmPayment] = useState(false);

	useEffect(() => {
		const list = tickets?.filter(t => checkedTickets.has(t.id)) || [];
		setCheckedList(list);
	}, [checkedTickets, tickets]);

	useEffect(() => {
		if (!user?.uid) return;

		setLoading(true);

		const q = query(
			collection(db, "tickets"),
			where("userId","==", user.uid),
			where("status", "==", "Pending")
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

	const toggleCheck = (ticket: any) => {
		setCheckedTickets(prev => {
			const updated = new Set(prev);

			if (updated.has(ticket.id)) {
				updated.delete(ticket.id);   // Uncheck
			} else {
				updated.add(ticket.id);      // Check
			}

			// After updating check state, compute total fine
			let total = 0;
			tickets?.forEach(t => {
				if (updated.has(t.id)) {
					total += t.fineAmount;
				}
			});

			setTotalAmount(total);
			return updated;
		});
	};

	const markCheckedTicketsAsPaid = async (checkedList: any[]) => {
		try {
			const batch = writeBatch(db);

			checkedList.forEach(ticket => {
				const ticketRef = doc(db, "tickets", ticket.id);
				batch.update(ticketRef, {
					status: "Paid",
					datePaid: new Date(),
				});
				
			})
			await batch.commit();

			

			console.log("All selected tickets marked as Paid!");
		} catch (error) {
			console.error("Error updating tickets:", error);
		}
	};

	

	useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      const { url } = event;
      console.log(url)
			const saved = await AsyncStorage.getItem('checkedList');
      if (url.includes("payfines?status=success")) {
				if (saved) await markCheckedTicketsAsPaid(JSON.parse(saved));
        Alert.alert("✅ Payment Successful", "Thank you for your payment!");
      } else if (url.includes("status=failed")) {
        Alert.alert("❌ Payment Failed", "Please try again.");
      }
    };

    const subscription = Linking.addEventListener("url", handleDeepLink);
    return () => subscription.remove();
  }, []);

	const startCheckout = async () => {
		setLoading(true);
    const response = await fetch("https://puisne-krish-uncommiseratively.ngrok-free.dev/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount, description: "DriveFine Fine Payment", checkedList: checkedList })
    });
    const data = await response.json();
    const checkoutUrl = data.data.attributes.checkout_url;
    Linking.openURL(checkoutUrl);
		await AsyncStorage.setItem('checkedList', JSON.stringify(checkedList));
		setLoading(false);
		setConfirmPayment(false);
  };

	return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Pay Fines"
        }}
      />
			<View className="flex-1 p-4 gap-2">

				{loading && (
					<Skeletonbox height={60} />
				)}
				{!loading && tickets?.length !== 0 && tickets?.map((ticket, index) => {
					const isChecked = checkedTickets.has(ticket.id);
					return(
						<Pressable key={index} onPress={()=> toggleCheck(ticket)}>
							<View className="flex flex-row items-start gap-4 py-3 px-4 rounded-lg border border-ytheme">
								<View className={`mt-2 rounded-sm border border-foreground ${isChecked ? 'bg-ytheme border-ytheme' : 'p-2'}`}>
									{isChecked && (
										<Check 
											size={16}
											color={THEME.light.background}
										/>
									)}
								</View>
								<View>
									<Text className='text-foreground font-medium'>{ticket?.violation}</Text>
									<Text className='font-light text-sm text-foreground'>{`${DateMonths[ticket?.dateIssued.toDate().getMonth()]}-${ticket?.dateIssued.toDate().getDate()}-${ticket?.dateIssued.toDate().getFullYear()}`}</Text>
									<Text className='text-lg font-semibold text-foreground'>{`₱${ticket?.fineAmount}.00`}</Text>
								</View>
							</View>
						</Pressable>
					)
				})}
				

			</View>

			<View className="p-4">
				<View className="flex w-full p-4 bg-background rounded-lg border border-ytheme" style={{marginBottom: 35}}>
					<View className="flex flex-row justify-between">
						<Text className="font-light text-foreground">Subtotal</Text>
						<Text className="text-lg font-medium">P{totalAmount}.00</Text>
					</View>
					<Pressable onPress={()=>setConfirmPayment(true)} disabled={totalAmount === 0 ? true : false}>
						<View className={`py-3 px-4 rounded-lg ${totalAmount !== 0 ? "bg-ytheme" : "bg-foreground/10"} flex flex-row justify-center`}>
							<Text className="text-background font-medium">Proceed to Payment</Text>
						</View>
					</Pressable>
					<Modal
						animationType="fade"
						transparent={true}
						visible={confirmPayment}
					>
						<View className="flex-1 justify-center items-center bg-foreground/20 p-4">
							{loading && (
								<>
									<Text>Redirecting to PayMongo...</Text>
									<ActivityIndicator size={50} />
								</>
							)}
							{!loading && (
								<View className="p-4 rounded-lg bg-background border border-ytheme">
									<Text className="text-lg">Confirm Payment</Text>
									<View className="my-2 p-2 bg-foreground/5 rounded-lg">
									{checkedList?.map((t, index) => (
										<View key={t.id} className="flex flex-row justify-between my-1">
											<Text className="text-sm">{index + 1}. {t.violation}</Text>
											<Text className="text-sm font-semibold">₱{t.fineAmount}.00</Text>
										</View>
									))}
									</View>
									<View className="flex flex-row justify-between mb-1">
										<Text className="text-sm">Total Amount</Text>
										<Text className="text-sm font-semibold">₱{totalAmount}.00</Text>
									</View>
									<Text className="text-sm font-light">Are you sure you want to continue?</Text>
									<View className="flex flex-row justify-evenly my-4">
										<Pressable onPress={()=>setConfirmPayment(false)} className="px-6 py-1 bg-foreground/20 rounded-lg">
											<Text className="text-background">Cancel</Text>
										</Pressable>
										<Pressable className="px-6 py-1 bg-ytheme rounded-lg">
											<Text onPress={startCheckout} className="text-background">Proceed</Text>
										</Pressable>
									</View>
								</View>
							)}
						</View>
					</Modal>
				</View>
			</View>
			
		</>
	)
}