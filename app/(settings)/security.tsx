import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { ActivityIndicator, Alert, Linking, Modal, Pressable, TextInput, View } from "react-native";
import { Text } from '@/components/ui/text';
import { Check } from "lucide-react-native";
import { useState } from "react";
import { useColorScheme } from "nativewind";
import { deleteUser, EmailAuthProvider, getAuth, reauthenticateWithCredential } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function SecurityScreen(){

	const { colorScheme } = useColorScheme();

	const [confirmation, setConfirmation] = useState(false)
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const handleDeleteAccount = async () => {
		try {
			if (!password) {
				Alert.alert("Error", "Please enter your password");
				return;
			}

			setLoading(true);

			const auth = getAuth();
			const user = auth.currentUser;

			if (!user || !user.email) {
				Alert.alert("Error", "User not authenticated");
				setLoading(false);
				return;
			}

			// ✅ Step 1: Re-authenticate
			const credential = EmailAuthProvider.credential(
				user.email,
				password
			);

			await reauthenticateWithCredential(user, credential);

			await deleteDoc(doc(db, "Users", user.uid));

			// ✅ Step 2: Delete account
			await deleteUser(user);

			Alert.alert("Account Deleted", "Your account has been permanently deleted.");

			router.push('/');

			setLoading(false);

		} catch (error: any) {
			console.log("Delete failed:", error);

			setLoading(false);

			if (error.code === "auth/wrong-password") {
				Alert.alert("Error", "Incorrect password");
			} 
			else if (error.code === "auth/requires-recent-login") {
				Alert.alert("Session Expired", "Please log in again");
			} 
			else {
				Alert.alert("Error", error.message);
			}
		}
	};

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Security"
        }}
      />
			<Pressable onPress={()=>router.push("/changepass")}>
				<View className="p-4 gap-2">
					<View className="flex flex-row justify-between border border-ytheme p-4 rounded-lg gap-2">
						<Text className="text-foreground">Change Password</Text>
					</View>
				</View>
			</Pressable>
			<Pressable onPress={()=>setConfirmation(true)}>
				<View className="p-4 gap-2">
					<View className="flex flex-row justify-between bg-red-500 p-4 rounded-lg gap-2">
						<Text className="text-white">Delete Account</Text>
					</View>
				</View>
			</Pressable>
			<Modal
				animationType="fade"
				transparent={true}
				visible={confirmation}
			>
				<View className="bg-foreground/10 flex-1 flex flex-row items-center justify-center">
					{loading && (
						<ActivityIndicator size={50}/>
					)}
					{!loading && (
						<View className="p-4 rounded-lg bg-background border border-red-500">
							<Text className="text-lg">Delete Account</Text>
							<Text className="text-sm font-light">Are you sure you want to change password?</Text>
							<View className="p-4 rounded-lg gap-2">
								<Text className="text-foreground font-bold">Confirm Password</Text>
								<TextInput 
									className="border border-border py-3 px-4 rounded-lg"
									placeholder="Enter current password"
									placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
									value={password}
									onChangeText={setPassword}
								/>
							</View>
							<View className="flex flex-row justify-evenly my-4">
								<Pressable onPress={()=>setConfirmation(false)} className="px-6 py-1 bg-foreground/20 rounded-lg">
									<Text className="text-background">Cancel</Text>
								</Pressable>
								<Pressable className="px-6 py-1 bg-red-500 rounded-lg">
									<Text onPress={handleDeleteAccount} className="text-white">Delete</Text>
								</Pressable>
							</View>
						</View>
					)}
				</View>
				
			</Modal>
		</>
	)
}