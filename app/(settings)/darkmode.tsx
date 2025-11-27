import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { ActivityIndicator, Alert, Appearance, Linking, Modal, Pressable, TextInput, View } from "react-native";
import { Text } from '@/components/ui/text';
import { Check } from "lucide-react-native";
import ToggleSwitch from 'toggle-switch-react-native'
import { useState } from "react";
import { useAppRefresh } from "@/hooks/refreshcontext";

export default function ReportScreen(){

	const { darkmode, setDarkmode } = useAppRefresh();

	const handleToggle = () => {
		setDarkmode(!darkmode)
		if(darkmode){
			Appearance.setColorScheme('light')
		} else {
			Appearance.setColorScheme('dark')
		}
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
				<View className="flex flex-row justify-between border border-ytheme p-4 rounded-lg gap-2">
					<View>
						<Text className="text-foreground font-bold">Dark Mode</Text>
						<Text className="text-foreground font-light text-sm">Use dark theme</Text>
					</View>
					<ToggleSwitch 
						isOn={darkmode}
						trackOnStyle={{backgroundColor:"#00c951"}}
						trackOffStyle={{backgroundColor:"#364153"}}
						onColor="green"
						offColor="red"
						label=""
						size="large"
						onToggle={handleToggle}
					/>
				</View>
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-foreground font-bold">Theme Preview</Text>
					<View className="p-4 bg-white border border-border rounded-sm mb-4">
						<View className="p-4 bg-ytheme rounded-sm mb-2">
							<Text className="text-black">Light Mode</Text>
						</View>
						<Text className="text-black text-[10px]">This is how the app looks in light mode.</Text>
					</View>
					<View className="p-4 border border-border bg-black rounded-sm">
						<View className="p-4 bg-ytheme rounded-sm mb-2">
							<Text className="text-white">Dark Mode</Text>
						</View>
						<Text className="text-white text-[10px]">This is how the app looks in light mode.</Text>
					</View>
				</View>
			</View>
		</>
	)
}