import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights2PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Responsibilities of a Bus, Taxis, Jeepney, UV Express and TNVS Drivers</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						{/* 1 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>1.</Text></View>
							<Text>Respect the privacy of the passenger.</Text>
						</View>

						{/* 2 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>2.</Text></View>
							<Text>Collect the authorized fare.</Text>
						</View>

						{/* 3 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>3.</Text></View>
							<Text>Display the duly authorized fare matrix.</Text>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>4.</Text></View>
							<Text>Issue official fare receipt/ticket.</Text>
						</View>

						{/* 5 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>5.</Text></View>
							<Text>Return the full amount of ticket fare whenever the trip is cut.</Text>
						</View>

						{/* 6 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>6.</Text></View>
							<Text>Give discounts to PWDs, Students and Senior Citizens in accordance with the law.</Text>
						</View>

						{/* 7 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>7.</Text></View>
							<Text>Assist passengers during loading and unloading of heavy baggage.</Text>
						</View>

						{/* 8 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>8.</Text></View>
							<Text>Convey passengers no more than the sitting capacity of the vehicle.</Text>
						</View>

						{/* 9 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>9.</Text></View>
							<Text>Accommodate PWDs, Pregnant Women and Senior Citizens and provide designated seats.</Text>
						</View>

						{/* 10 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>10.</Text></View>
							<Text>Request the passenger to fasten their seatbelt.</Text>
						</View>

						{/* 11 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>11.</Text></View>
							<Text>Inform passengers on the prohibition of SMOKING on a public utility vehicle.</Text>
						</View>

						{/* 12 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>12.</Text></View>
							<Text>Inform the passenger not to distract the driver while the vehicle is in motion.</Text>
						</View>

						{/* 13 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>13.</Text></View>
							<Text>Convey passengers only at the correct loading/unloading zone.</Text>
						</View>

						{/* 14 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>14.</Text></View>
							<Text>Be polite and courteous.</Text>
						</View>

						{/* 15 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>15.</Text></View>
							<Text>Assist passengers who are in need of immediate or emergency action.</Text>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}