import { Text } from '@/components/ui/text';
import { ChevronRight, CircleAlert, Clock, FileText, Wallet } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Image, ImageBackground, type ImageStyle, Pressable, ScrollView, TextInput, View } from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import { THEME } from '@/lib/theme';
import { useEffect, useState } from 'react';
import { Link, router, Stack } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { useAuth } from '@/hooks/useUserRole';
import { collection, getDocs, query, where } from 'firebase/firestore';
import SkeletonDashboard from './skeletonDashboard';


export default function UserDashboard() {

	const { colorScheme } = useColorScheme();

	const [tickets, setTickets] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

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

	useEffect(() => {
    if (!user?.uid) return;

    const fetchTickets = async () => {
      try {
        const q = query(collection(db, "tickets"), where("userId", "==", user.uid));
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
      {loading && (
        <SkeletonDashboard />
      )}
			{!loading && (
        <ScrollView>

          <View className='flex-1 p-3 gap-2'>

            <Text className='text-lg font-medium text-foreground'>Quick Actions</Text>
            
            <Pressable className='w-full' onPress={()=>navigate('/(tickets)/userView')}>
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

            <Pressable className='w-full' onPress={()=>navigate('/(tickets)/payfines')}>
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

            <Pressable className='w-full' onPress={()=>navigate('/(tickets)/userHistory')}>
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

            <Pressable className='w-full' onPress={()=>navigate('/(policies)/policies')}>
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
            {/* <Pressable onPress={()=>{router.push({
              pathname: '/(tickets)/[id]',
              params: { id: 1 }
            })}}>
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
            </Pressable> */}

          </View>
        </ScrollView>
      )}
		</>
	)
}