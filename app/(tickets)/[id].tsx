import { Pressable, StyleSheet, View, Image } from 'react-native'
import { Text } from '@/components/ui/text';
import React, { useEffect, useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { THEME } from '@/lib/theme';
import { collection, query, where, getDocs, getDoc, doc, Timestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { Zap } from 'lucide-react-native';
import { useAuth } from '@/hooks/useUserRole';
import DateMonths from '@/lib/months';



export default function TicketDetails() {

  const { user } = useAuth();

  const { id } = useLocalSearchParams();
  const [ticket, setTicket] = useState<any | null>(null);
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

  useEffect(() => {
    const fetchTicket = async () => {
      if (!id) return;

      const ticketId = Array.isArray(id) ? id[0] : id;

      try {
        const docRef = doc(db, "tickets", ticketId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTicket({ id: docSnap.id, ...docSnap.data() });
          console.log(docSnap.data());
        } else {
          console.warn("No such ticket found!");
        }
      } catch (error) {
        console.error("Error fetching ticket:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading ticket...</Text>
      </View>
    )
  }

  return (
    <>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          headerTitle: () => (
            <>
              <Text className='text-xl font-medium'>Ticket Details</Text>
              <Text className='text-xs font-light'>Ticket ID: {id}</Text>
            </>
          )
        }}
      />
      <View className='p-4'>
        <View className='bg-background border border-ytheme p-4 rounded-xl gap-3' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>
          <View className='flex flex-row justify-between items-center'>
            <Text className='text-foreground text-lg font-semibold'>{ticket?.violation}</Text>
            <Text className={`text-xs font-medium text-foreground/50 px-3 py-1 rounded-full 
              ${ticket?.status === 'Pending' ? 'bg-ytheme/50' : 
              ticket?.status === 'Paid' ? 'bg-green-500/20' : 
              ''}`}>
                {ticket?.status}
              </Text>
          </View>

          <View>
            <Text className='font-extralight text-xs'>Date Issued</Text>
            <Text className='text-foreground'>{`${DateMonths[ticket?.dateIssued.toDate().getMonth()]}-${ticket?.dateIssued.toDate().getDate()}-${ticket?.dateIssued.toDate().getFullYear()}`}</Text>
          </View>

          {role === "user" ? (
            <View>
              <Text className='font-extralight text-xs'>Issued by</Text>
              <Text className='text-foreground'>Enforcer Nabunturan</Text>
            </View>
          ) : (
            <View>
              <Text className='font-extralight text-xs'>Issued to</Text>
              <Text className='text-foreground'>{`${ticket?.userFirstName} ${ticket?.userLastName}`}</Text>
            </View>
          )}

          <View>
            <Text className='font-extralight text-xs'>Plate Number</Text>
            <Text className='text-foreground'>123 LBC</Text>
          </View>

          <View>
            <Text className='font-extralight text-xs'>Fine Amount</Text>
            <Text className='text-foreground font-semibold text-2xl'>₱{ticket?.fineAmount}.00</Text>
          </View>

          {role === 'enforcer' && (
            <View>
              <Text className='font-extralight text-xs'>Photo Evidence</Text>
              <Image source={{ uri: ticket?.photoEvidence}} height={200} className='rounded-lg my-2' />
            </View>
          )}

          {role === 'user' && ticket?.status !== "Paid" && (
            <Pressable onPress={()=>router.push('/payfines')}>
              <View className='flex flex-row justify-center p-3 bg-ytheme rounded-xl'>
                <Text className='text-background font-semibold'>Pay Now</Text>
              </View>
            </Pressable>
          )}
        
        </View>
      </View>
    </>
  )
}

