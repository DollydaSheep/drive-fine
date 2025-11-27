import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights9PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Common Traffic Violations of Public Utility Vehicle Drivers That Causes Heavy Traffic</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						{/* 1 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>1.</Text></View>
							<Text>
								Stopping (loading and unloading passengers) outside of stopping zone and disregarding other motorists the right of way.
							</Text>
						</View>

						{/* 2 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>2.</Text></View>
							<Text>
								Violating Traffic Lights or Signals where driver beats the red light upon seeing the yellow flashing light.
							</Text>
						</View>

						{/* 3 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>3.</Text></View>
							<Text>
								Distracted driving by talking or chatting with passengers, eating, receiving phone calls, or composing text messages.
							</Text>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>4.</Text></View>
							<Text>
								Speeding as a result of inducing and convincing passengers that they will reach their destinations ahead of time.
							</Text>
						</View>

						{/* 5 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>5.</Text></View>
							<Text>
								Swerving through indiscriminate and unsafe changing of lanes.
							</Text>
						</View>

						{/* 6 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>6.</Text></View>
							<Text>
								Tailgating on super highways.
							</Text>
						</View>

						{/* 7 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 rounded-full"><Text>7.</Text></View>
							<Text>
								Counter Flow.
							</Text>
						</View>

						{/* 8 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>8.</Text></View>
							<Text>
								Unlawful stopping on pedestrian crosswalk to wait for possible passengers.
							</Text>
						</View>

						{/* 9 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>9.</Text></View>
							<Text>
								Delaying movement on GO signal traffic light to wait for passengers.
							</Text>
						</View>

						{/* 10 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1  rounded-full"><Text>10.</Text></View>
							<Text>
								Open Door.
							</Text>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}