import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights1PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">General Responsibilities of a Driver</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>1.</Text></View>
							<Text>Must have secure an appropriate driver's license to carry it at all times while driving a motor vehicle.</Text>
						</View>
						
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>2.</Text></View>
							<Text>Must know, follow and abide the land transportation laws, rules and regulations.</Text>
						</View>

						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>3.</Text></View>
							<Text>Must be a defensive driver.</Text>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>4.</Text></View>
							<Text>Ensure that the vehicle he is driving is duly registered, roadworthy and emission compliant.</Text>
						</View>

						{/* 5 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>5.</Text></View>
							<Text>Secure and safeguard the vehicle until it is returned to the designated location.</Text>
						</View>

						{/* 6 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>6.</Text></View>
							<Text>Regularly conduct proper motor vehicle pre-trip inspection (BLOWBAGGAS).</Text>
						</View>

						{/* 7 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>7.</Text></View>
							<Text>Ensure that the vehicle is kept clean, tidy and in good working condition at all times.</Text>
						</View>

						{/* 8 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>8.</Text></View>
							<Text>Knowledgeable on what to do and act in case of accident or incident.</Text>
						</View>

						{/* 9 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>9.</Text></View>
							<Text>Know his rights and privilege as holder of a driver's license.</Text>
						</View>

						{/* 10 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>10.</Text></View>
							<Text>Always observe road safety, discipline and courtesy.</Text>
						</View>

						{/* 11 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>11.</Text></View>
							<Text>Must be in a healthy condition and no contagious disease that can affect him and his passenger/s.</Text>
						</View>

						{/* 12 */}
						<View className="flex flex-row items-start ml-4 mr-8 gap-2">
							<View className="p-1 rounded-full"><Text>12.</Text></View>
							<Text>Return "lost and found" items.</Text>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}