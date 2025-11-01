import { THEME } from '@/lib/theme'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Text } from '@/components/ui/text';
import { Pressable, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useAuth } from '@/hooks/useUserRole';
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';


export default function IssueTicketScreen(){

	const { user } = useAuth();

	const [name, setName] = useState('');
	const [plate, setPlate] = useState('');
	const [violation, setViolation] = useState('');
	const [fine, setFine] = useState('');

	const handleIssueTicket = async () => {
    if (!name || !plate || !violation || !fine) {
      alert("Please fill out all fields.");
      return;
    }

		const usersRef = collection(db, "Users");
    const q = query(usersRef, where("plateNo", "==", plate));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert("No user found with this plate number.");
      return;
    }

    const userDoc = querySnapshot.docs[0];
    const ownerData = userDoc.data();
    const ownerId = userDoc.id; // this is the userId

    try {
      await addDoc(collection(db, "tickets"), {
        name,
        plateNo: plate,
        violation,
        fineAmount: parseFloat(fine),
        status: "Pending",
				userId: ownerId, // default status
        enforcerId: user?.uid, // enforcer issuing ticket
        dateIssued: serverTimestamp(), // store Firestore timestamp
      });

      alert("Ticket issued successfully!");
      setName("");
      setPlate("");
      setViolation("");
      setFine("");

    } catch (error) {
      console.error("Error issuing ticket:", error);
      alert("Failed to issue ticket.");
    }
  }

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Issue Ticket"
        }}
      />
			<View className='p-4'>
				<View className='bg-background border border-ytheme p-4 rounded-xl gap-3' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>

					<View>
						<Text className='font-extralight text-xs mb-1'>Name of Violator</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='e.g. Justin Nabunturan'
							value={name}
							onChangeText={setName}
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Plate No.</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='123 LBC'
							value={plate}
							onChangeText={setPlate}
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Violation</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='Illegal Parking'
							value={violation}
							onChangeText={setViolation}
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Fine Amount</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='2000.00'
							value={fine}
							onChangeText={setFine}
						/>
					</View>

					<Pressable onPress={handleIssueTicket}>
						<View className='flex flex-row justify-center p-3 bg-ytheme rounded-xl'>
							<Text className='text-background font-semibold'>Issue Ticket</Text>
						</View>
					</Pressable>
				
				</View>
			</View>
		</>
	)
}