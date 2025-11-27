import { THEME } from '@/lib/theme'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Text } from '@/components/ui/text';
import { Pressable, TextInput, View, Image, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useAuth } from '@/hooks/useUserRole';
import { addDoc, collection, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Calendar, Camera } from 'lucide-react-native';
import * as ImagePicker from "expo-image-picker";
import { supabase } from "@/lib/supabase";
import * as FileSystem from "expo-file-system/legacy";
import { decode } from 'base64-arraybuffer';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateMonths from '@/lib/months';
import { useColorScheme } from 'nativewind';


export default function IssueTicketScreen(){

	const { colorScheme } = useColorScheme();

	const { user } = useAuth();

	const [openDatePicker, setOpenDatePicker] = useState(false);

	const [confirmModal, setConfirmModal] = useState(false);
	const [loading, setLoading] = useState(false);

	const [name, setName] = useState('');
	const [plate, setPlate] = useState('');
	const [violation, setViolation] = useState('');
	const [fine, setFine] = useState('');
	const [dueDate,setDueDate] = useState<Date | null>(null);
	const [photo, setPhoto] = useState<ImagePicker.ImagePickerAsset>();

	const uploadPhotoEvidenceToSupabase = async (asset: ImagePicker.ImagePickerAsset) => {
		try {

			if (!user) {
				console.error("No user logged in");
				return;
			}

			const base64 = await FileSystem.readAsStringAsync(asset.uri, {encoding: 'base64'});
			const filePath = `photos/${name}-${violation}-${Date.now()}-evidence.jpg`;
			const contentType = asset.mimeType
			
			const binary = Uint8Array.from(
				atob(base64),
				(char) => char.charCodeAt(0)
			);

			// Upload to Supabase
			const { data, error } = await supabase.storage
				.from("photo-evidence")
				.upload(filePath, decode(base64), {
					contentType,
					upsert: true
				});

			if (error) throw error;

			const { data: urlData } = supabase
				.storage
				.from("photo-evidence")
				.getPublicUrl(filePath);

			const imageUrl = urlData?.publicUrl; 

			const cacheBustedUrl = `${imageUrl}?t=${Date.now()}`;

			if (error) throw error;

		} catch (error) {
			console.error("Upload error:", error);
			throw error;
		}
	};

	const handleIssueTicket = async () => {
    if (!name || !plate || !violation || !fine || !dueDate || !photo) {
      alert("Please fill out all fields.");
      return;
    }

		setLoading(true);

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

		const enfRef = collection(db, "Users");
		const enfQ = query(enfRef, where("id", "==", user?.uid));
		const enfQuerySnapshot = await getDocs(enfQ);

		if (enfQuerySnapshot.empty) {
      alert("No user found with this id number.");
      return;
    }

		const enfDoc = enfQuerySnapshot.docs[0];
    const enfData = enfDoc.data();

		await uploadPhotoEvidenceToSupabase(photo);

    try {
      await addDoc(collection(db, "tickets"), {
        name,
        plateNo: plate,
        violation,
        fineAmount: parseFloat(fine),
        status: "Pending",
				photoEvidence: photo?.uri,
				userId: ownerId, // default status
				userFirstName: ownerData.firstName,
				userLastName: ownerData.lastName,
        enforcerId: user?.uid, // enforcer issuing ticket
				enforcerFirstName: enfData.firstName,
				enforcerLastName: enfData.lastName,
				dueDate: dueDate,
        dateIssued: serverTimestamp(), // store Firestore timestamp
      });

      alert("Ticket issued successfully!");
			setLoading(false);
			setConfirmModal(false);
      setName("");
      setPlate("");
      setViolation("");
      setFine("");
			setPhoto(undefined);
			await addDoc(collection(db, "notification"), {
				userId: ownerId,
				enforcerId: user?.uid,
				dateIssued: serverTimestamp(),
				dueDate: dueDate,
				violation,
				status: "Unread"
			})

    } catch (error) {
      console.error("Error issuing ticket:", error);
      alert("Failed to issue ticket.");
    }
  }

	const handlePhoto = async () => {
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  if (!result.canceled) {
    console.log("Photo taken:", result.assets[0].uri);
    // save to state
    setPhoto(result.assets[0]);
  }
};

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Issue Ticket"
        }}
      />
			<ScrollView className='p-4'>
				<View className='bg-background border border-ytheme p-4 rounded-xl gap-3' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>

					<View>
						<Text className='font-extralight text-xs mb-1'>Name of Violator</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='e.g. Justin Nabunturan'
							placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							value={name}
							onChangeText={setName}
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Plate No.</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='123 LBC'
							placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							value={plate}
							onChangeText={setPlate}
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Violation</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='Illegal Parking'
							placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							value={violation}
							onChangeText={setViolation}
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Fine Amount</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='2000.00'
							placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
							value={fine}
							onChangeText={setFine}
						/>
					</View>

					<View>
						<View className="flex flex-row justify-between mr-4">
							<Text className='font-extralight text-xs mb-1'>Due Date</Text>
						</View>
						<Pressable onPress={()=>setOpenDatePicker(true)}>
							<View className="flex flex-row p-2 gap-2">
								<Text className='border-b border-foreground/10 font-extralight'>
								{dueDate === null
									? '--:--:----'
									: `${DateMonths[dueDate!.getMonth()]}-${dueDate!.getDate()}-${dueDate!.getFullYear()}`}
								</Text>
								<Calendar 
									color={THEME.light.border}
								/>
							</View>
						</Pressable>
						{openDatePicker && (
						<DateTimePicker
							value={dueDate ?? new Date()}
							mode="date"
							display="spinner"
							onChange={(event, selectedDate) => {
							setOpenDatePicker(false);
							if (selectedDate && event.type === 'set') {setDueDate(selectedDate);console.log(selectedDate)};
							}}
							
						/>
						)}
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Photo Evidence</Text>
						{!photo ? (
							<Pressable onPress={handlePhoto}>
								<View className='flex flex-col justify-center items-center p-8 border border-dashed border-border rounded-lg'>
									<Camera 
										size={24}
										color={'#e5e5e5'}
									/>
									<Text className='text-border'>Add Photo</Text>
								</View>
							</Pressable>
						) : (
							<View className='border border-ytheme rounded-lg'>
								<Image 
									source={{ uri: photo.uri }}
									height={200}
									className='rounded-lg'
								/>
							</View>
						)}
					</View>

					<Pressable onPress={()=>setConfirmModal(true)}>
						<View className='flex flex-row justify-center p-3 bg-ytheme rounded-xl mb-6'>
							<Text className='text-white font-semibold'>Issue Ticket</Text>
						</View>
					</Pressable>
					<Modal
						animationType="fade"
						transparent={true}
						visible={confirmModal}
					>
						<View className="flex-1 justify-center items-center bg-foreground/20 p-4">
							{loading && (
								<ActivityIndicator size={50} />
							)}
							{!loading && (
								<View className="p-4 rounded-lg bg-background border border-ytheme">
									<Text className="text-lg">Confirm Issue Ticket</Text>
									<Text className="text-sm font-light">Are you sure you want to issue this Ticket?</Text>
									<View className="flex flex-row justify-evenly my-4">
										<Pressable onPress={()=>setConfirmModal(false)} className="px-6 py-1 bg-foreground/20 rounded-lg">
											<Text className="text-background">Cancel</Text>
										</Pressable>
										<Pressable className="px-6 py-1 bg-ytheme rounded-lg">
											<Text onPress={handleIssueTicket} className="text-background">Submit</Text>
										</Pressable>
									</View>
								</View>
							)}
						</View>
					</Modal>
				
				</View>
			</ScrollView>
		</>
	)
}