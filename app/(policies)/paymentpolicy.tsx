import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function PaymentPolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Payment Policies"
        }}
      />
			<View className="p-4 gap-2">
				<View className="border border-ytheme p-4 rounded-lg gap-2">
					<Text className="text-lg font-semibold mb-2">Payment Policies</Text>
					<View className="flex flex-row items-start ml-4 mr-4 gap-2">
						<View className="p-1 mt-2 bg-ytheme rounded-full"></View>
						<Text>All fines must be paid within 15 days of issuance</Text>
					</View>
					<View className="flex flex-row items-start ml-4 mr-4 gap-2">
						<View className="p-1 mt-2 bg-ytheme rounded-full"></View>
						<Text>Late payments incur 10% additional penalty</Text>
					</View>
					<View className="flex flex-row items-start ml-4 mr-4 gap-2">
						<View className="p-1 mt-2 bg-ytheme rounded-full"></View>
						<Text>You can contest violations within 7 days</Text>
					</View>
					<View className="flex flex-row items-start ml-4 mr-4 gap-2">
						<View className="p-1 mt-2 bg-ytheme rounded-full"></View>
						<Text>Payment can be made online or at authorized centers</Text>
					</View>
					<View className="flex flex-row items-start ml-4  gap-2">
						<View className="p-1 mt-2 bg-ytheme rounded-full"></View>
						<Text>Receipts should be kept for 2 years</Text>
					</View>
				</View>
			</View>
		</>
	)
}