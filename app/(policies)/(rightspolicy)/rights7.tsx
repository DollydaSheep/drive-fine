import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights7PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Responsibilities of a Truck Driver</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						{/* 1 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>1.</Text></View>
							<Text>
								Ensure that legal documents of delivery goods are carried.
							</Text>
						</View>

						{/* 2 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>2.</Text></View>
							<Text>
								Properly account for the goods before and after the trip.
							</Text>
						</View>

						{/* 3 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>3.</Text></View>
							<Text>
								Check goods conformity to width, weight, and height restrictions.
							</Text>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>4.</Text></View>
							<Text>
								Ensure that goods are properly secured and safe.
							</Text>
						</View>

						{/* 5 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>5.</Text></View>
							<Text>
								Ensure that perishable goods are delivered on time.
							</Text>
						</View>

						{/* 6 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>6.</Text></View>
							<Text>
								Ensure that safety gadgets are properly in place.
							</Text>
						</View>

						{/* 7 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>7.</Text></View>
							<Text>
								Driver has sufficient knowledge and completed training on handling cargoes.
							</Text>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}