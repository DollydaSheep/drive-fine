import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { ActivityIndicator, Alert, Linking, Modal, Pressable, TextInput, View } from "react-native";
import { Text } from '@/components/ui/text';
import { Check } from "lucide-react-native";
import { useState } from "react";
import { useColorScheme } from "nativewind";
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updatePassword } from "firebase/auth";

export default function ChangePassScreen(){
	const { colorScheme } = useColorScheme();

	const auth = getAuth();

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmation, setConfirmation] = useState(false);
	const [loading, setLoading] = useState(false);


	const reauthenticate = async (currentPassword: string) => {
		const user = auth.currentUser;

		if (!user || !user.email) return;

		const credential = EmailAuthProvider.credential(
			user.email,
			currentPassword
		);

		await reauthenticateWithCredential(user, credential);
	};

	const handleChangePassword = async () => {
		try {
			if (!currentPassword || !newPassword) {
				Alert.alert("Error", "Please fill all fields!");
				return;
			}

			if (newPassword.length < 6) {
				Alert.alert("Weak Password", "Password must be at least 6 characters");
				return;
			}

			setLoading(true);

			const auth = getAuth();
			const user = auth.currentUser;

			if (!user || !user.email) {
				Alert.alert("Error", "User not authenticated");
				return;
			}

			// ✅ Reauthenticate first
			const credential = EmailAuthProvider.credential(
				user.email,
				currentPassword
			);

			await reauthenticateWithCredential(user, credential);

			// ✅ Then update password
			await updatePassword(user, newPassword);

			Alert.alert("Success", "Password changed successfully!");

			setCurrentPassword("");
			setNewPassword("");

		} catch (error: any) {
			console.log("Password update failed:", error.message);
			setConfirmation(false)
			if (error.code === "auth/wrong-password") {
				Alert.alert("Error", "Current password is incorrect");
			} 
			else if (error.code === "auth/weak-password") {
				Alert.alert("Error", "New password is too weak");
			} 
			else if (error.code === "auth/requires-recent-login") {
				Alert.alert("Session Expired", "Please log in again");
			} 
			else {
				Alert.alert("Error", error.message);
			}

		} finally {
			setLoading(false); // ✅ Always reset loading
			setConfirmation(false)
		}
	};

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Change Password"
        }}
      />
			<View className="p-4 gap-2">
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-foreground font-bold">Current Password</Text>
					<TextInput 
						className="border border-border py-3 px-4 rounded-lg"
						placeholder="Enter current password"
						placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
						value={currentPassword}
						onChangeText={setCurrentPassword}
					/>
				</View>
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-foreground font-bold">New Password</Text>
					<TextInput 
						className="border border-border py-3 px-4 rounded-lg"
						placeholder="Enter new password"
						placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
						value={newPassword}
						onChangeText={setNewPassword}
					/>
				</View>
				
				<Pressable onPress={()=>{
					if (!currentPassword || !newPassword) {
						Alert.alert("Error", "Please fill all fields!");
						return;
					}
					setConfirmation(true)
				}}>
					<View className="p-4 bg-ytheme rounded-lg">
						<Text className="text-white font-bold text-center">Change Password</Text>
					</View>
				</Pressable>
			</View>
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
						<View className="p-4 rounded-lg bg-background border border-ytheme">
							<Text className="text-lg">Confirm Changes</Text>
							<Text className="text-sm font-light">Are you sure you want to change password?</Text>
							<View className="flex flex-row justify-evenly my-4">
								<Pressable onPress={()=>setConfirmation(false)} className="px-6 py-1 bg-foreground/20 rounded-lg">
									<Text className="text-background">Cancel</Text>
								</Pressable>
								<Pressable className="px-6 py-1 bg-ytheme rounded-lg">
									<Text onPress={handleChangePassword} className="text-background">Submit</Text>
								</Pressable>
							</View>
						</View>
					)}
				</View>
				
			</Modal>
		</>
	)
}