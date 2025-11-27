import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { ActivityIndicator, Alert, Linking, Modal, Pressable, TextInput, View } from "react-native";
import { Text } from '@/components/ui/text';
import { Check } from "lucide-react-native";
import { useState } from "react";
import { useColorScheme } from "nativewind";

export default function ReportScreen(){
	const { colorScheme } = useColorScheme();

	const [feedback, setFeedback] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);

	const handleReport = () => {
		if(!feedback && !description){
			Alert.alert("Error", "Please fill in all fields!")
			return;
		}
		setLoading(true)
		setTimeout(()=>{
			setLoading(false);
			setDescription("")
			setFeedback("");
			Alert.alert("Feedback Submitted", "Thank you for your feedback!")
		},1000)
	}

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Report & Feedback"
        }}
      />
			<View className="p-4 gap-2">
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-foreground font-bold">Feedback Type</Text>
					<TextInput 
						className="border border-border py-3 px-4 rounded-lg"
						placeholder="Bug Report"
						placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
						value={feedback}
						onChangeText={setFeedback}
					/>
				</View>
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-foreground font-bold">Description</Text>
					<TextInput 
						className="border border-border py-3 px-4 pb-24 rounded-lg"
						placeholder="Tell us more about your feedback..."
						placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
						value={description}
						onChangeText={setDescription}
					/>
				</View>
				<Pressable onPress={handleReport}>
					<View className="p-4 bg-ytheme rounded-lg">
						<Text className="text-white font-bold text-center">Submit Feedback</Text>
					</View>
				</Pressable>
			</View>
			<Modal
				animationType="fade"
				transparent={true}
				visible={loading}
			>
				<View className="bg-foreground/10 flex-1 flex flex-row items-center justify-center">
					<ActivityIndicator size={50}/>
				</View>
				
			</Modal>
		</>
	)
}