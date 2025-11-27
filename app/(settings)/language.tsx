import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';
import { Check } from "lucide-react-native";

export default function LanguageScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Language"
        }}
      />
			<View className="p-4 gap-2">
				<View className="flex flex-row justify-between border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-foreground">English</Text>
					<Check />
				</View>
			</View>
		</>
	)
}