import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights3PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Responsibilities of a Motorcycle Rider/Driver</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						{/* 1 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>1.</Text></View>
							<Text>Ensure to wear a Standard Protective Motorcycle Helmet and other protective gears.</Text>
						</View>

						{/* 2 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>2.</Text></View>
							<Text>The back rider must also wear a protective helmet and safety gear.</Text>
						</View>

						{/* 3 (with bullets) */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>3.</Text></View>
							<View className="flex-1">
								<Text>Must ensure a child below 18 years old meets the following conditions:</Text>

								<View className="flex flex-row gap-2 mt-2 ml-2">
									<Text>•</Text>
									<Text>The child's arms can reach around and grasp the waist of the rider.</Text>
								</View>

								<View className="flex flex-row gap-2 ml-2">
									<Text>•</Text>
									<Text>The child is wearing a standard protective helmet or gear.</Text>
								</View>

								<View className="flex flex-row gap-2 ml-2">
									<Text>•</Text>
									<Text>The child can comfortably reach his/her feet on the foot peg.</Text>
								</View>

							</View>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>4.</Text></View>
							<Text>Switch ON the headlights when riding the motorcycle.</Text>
						</View>

						{/* 5 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>5.</Text></View>
							<Text>Passengers and their belongings must be transported safely and efficiently.</Text>
						</View>

						{/* 6 (with bullet sub-items) */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>6.</Text></View>
							<View className="flex-1">
								<Text>Must ensure that motorcycle accessories conform with safety standards, such as:</Text>

								<View className="flex flex-row gap-2 mt-2 ml-2">
									<Text>•</Text>
									<Text>
										Custom-made top boxes (e.g., for food delivery) must not exceed 2ft × 2ft × 2ft, 
										must be inspected/registered with LTO, and must not obstruct side mirrors.
									</Text>
								</View>

								<View className="flex flex-row gap-2 ml-2">
									<Text>•</Text>
									<Text>Top boxes may only carry a maximum of two (2) helmets.</Text>
								</View>

								<View className="flex flex-row gap-2 ml-2">
									<Text>•</Text>
									<Text>
										Saddle bags must not be higher than the motorcycle seat and must not exceed 
										14 inches from the sides; length must not go beyond the tail end or tail lights.
									</Text>
								</View>

							</View>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}