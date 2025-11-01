import { Text } from '@/components/ui/text';
import { auth, db } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Image, ImageBackground, type ImageStyle, Pressable, ScrollView, TextInput, View } from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import { ChevronRight, CircleAlert, Clock, FilePlus2, FileText, User, Wallet } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { THEME } from '@/lib/theme';
import { useAuth } from '@/hooks/useUserRole';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { router } from 'expo-router';

export default function EnforcerDashboard(){

	const { colorScheme } = useColorScheme();

	const { user } = useAuth();

	const [tickets, setTickets] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!user?.uid) return;

		const fetchTickets = async () => {
			try {
				const q = query(collection(db, "tickets"), where("enforcerId", "==", user.uid));
				const querySnapshot = await getDocs(q);
				const userTickets = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));
				setTickets(userTickets);
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
			<ScrollView>

				<View className='flex-1 p-3 gap-2'>
					<Text className='text-lg font-medium text-foreground'>Quick Actions</Text>
						
					<Pressable className='w-full' onPress={()=>navigate('/(tabs)/profile')}>
						<View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
							<View className='flex flex-row items-center gap-2'>
								<User 
									size={40}
									color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
								/>
								<Text className='font-medium text-lg'>Profile</Text>
							</View>
							<ChevronRight 
								size={20}
								color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							/>
						</View>
					</Pressable>

					<Pressable className='w-full' onPress={()=>navigate('/(tickets)/view')}>
						<View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
							<View className='flex flex-row items-center gap-2'>
								<FileText 
									size={40}
									color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
								/>
								<Text className='font-medium text-lg'>View Tickets</Text>
							</View>
							<ChevronRight 
								size={20}
								color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							/>
						</View>
					</Pressable>

					<Pressable className='w-full' onPress={()=>navigate('/(tickets)/issue')}>
						<View className='flex flex-row items-center justify-between p-3 bg-ytheme rounded-lg' style={{boxShadow: "0px 2px 5px rgba(0,0,0,0.15)"}}>
							<View className='flex flex-row items-center gap-2'>
								<FilePlus2 
									size={40}
									color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
								/>
								<Text className='font-medium text-lg'>Issue a Ticket</Text>
							</View>
							<ChevronRight 
								size={20}
								color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							/>
						</View>
					</Pressable>

					<Pressable className='w-full' onPress={()=>navigate('/(tabs)/about')}>
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
										<Text className={`text-xs font-medium text-foreground/50 px-3 py-1 rounded-full 
											${ticket.status === 'Pending' ? 'bg-ytheme/50' : 
											ticket.status === 'Paid' ? 'bg-green-500/20' : 
											''}  `}>
												{ticket.status}
											</Text>
									</View>
									<Text className='font-light text-sm text-foreground'>{ticket.dateIssued.toDate().toISOString().split("T")[0]}</Text>
									<View className='flex flex-row justify-between mt-2'>
										<Text className='text-lg font-semibold text-foreground'>₱{ticket.fineAmount}.00</Text>
										<ChevronRight 
											size={20}
											color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
										/>
									</View>
								</View>
							</Pressable>
						))
					)}

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

				</View>

			</ScrollView>
		</>
	)
}