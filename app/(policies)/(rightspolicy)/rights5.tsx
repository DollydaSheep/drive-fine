import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights5PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Responsibilities of a Taxi, TNVS and UV Express Driver</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						{/* 1 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>1.</Text></View>
							<Text>
								Oblige and follow the passenger's suggested route provided that it is in accordance with traffic rules and regulations.
							</Text>
						</View>

						{/* 2 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>2.</Text></View>
							<Text>
								Refuse additional passengers except those approved by the onboard passenger.
							</Text>
						</View>

						{/* 3 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>3.</Text></View>
							<Text>
								Avoid negotiation of the fare before, during, or after the trip.
							</Text>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>4.</Text></View>
							<Text>
								Carry passengers safely and conveniently in the shortest time possible.
							</Text>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}