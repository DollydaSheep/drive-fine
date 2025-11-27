import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function TermsScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Terms & Conditions"
        }}
      />
			<View className="p-4 gap-2">
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-lg font-semibold mb-2">1. Acceptance of Terms</Text>

					<Text className="text-foreground">
						By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement...
					</Text>
					<Text className="text-lg font-semibold mb-2">2. User Agreement</Text>

					<Text className="text-foreground">
						Users must be at least 13 years old to use this service. By creating an account, you confirm that...
					</Text>
					
					<Text className="text-lg font-semibold mb-2">3. Privacy Policy</Text>
					
					<Text className="text-foreground">
						We collect and process your personal data in accordance with applicable privacy laws...
					</Text>
					
					<Text className="text-lg font-semibold mb-2">4. Data Usage</Text>
					
					<Text className="text-foreground">
						Your data will be used to improve services and may be shared with third parties...
					</Text>
					
					<Text className="text-lg font-semibold mb-2">5. Account Termination</Text>
					
					<Text className="text-foreground">
						We reserve the right to terminate accounts that violate these terms...
					</Text>
					
				</View>
			</View>
		</>
	)
}