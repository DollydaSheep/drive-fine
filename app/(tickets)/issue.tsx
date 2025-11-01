import { THEME } from '@/lib/theme'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Text } from '@/components/ui/text';
import { Pressable, TextInput, View, Image } from 'react-native';
import { useState } from 'react';
import { useAuth } from '@/hooks/useUserRole';
import { addDoc, collection, doc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Camera } from 'lucide-react-native';
import * as ImagePicker from "expo-image-picker";
import { supabase } from "@/lib/supabase";
import * as FileSystem from "expo-file-system/legacy";
import { decode } from 'base64-arraybuffer';


export default function IssueTicketScreen(){

	const { user } = useAuth();

	const [name, setName] = useState('');
	const [plate, setPlate] = useState('');
	const [violation, setViolation] = useState('');
	const [fine, setFine] = useState('');
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
    if (!name || !plate || !violation || !fine || !photo) {
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
        enforcerId: user?.uid, // enforcer issuing ticket
        dateIssued: serverTimestamp(), // store Firestore timestamp
      });

      alert("Ticket issued successfully!");
      setName("");
      setPlate("");
      setViolation("");
      setFine("");
			setPhoto(undefined);

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