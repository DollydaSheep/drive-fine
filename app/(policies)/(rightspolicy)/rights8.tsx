import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Rights8PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Rights of Driver During Apprehension</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						{/* 1 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>1.</Text></View>
							<Text>
								Right to know the complete name and rank of the Apprehending Traffic Officer.
							</Text>
						</View>

						{/* 2 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>2.</Text></View>
							<Text>
								Right to know the exact alleged traffic violation.
							</Text>
						</View>

						{/* 3 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>3.</Text></View>
							<Text>
								Right to know how and when to pay the violation.
							</Text>
						</View>

						{/* 4 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>4.</Text></View>
							<Text>
								Right to contest within a prescribed period.
							</Text>
						</View>

						{/* 5 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>5.</Text></View>
							<Text>
								Right to request and to see the traffic mission/deployment order.
							</Text>
						</View>

						{/* 6 */}
						<View className="flex flex-row items-start ml-4 mr-4 gap-2">
							<View className="p-1 mt-2 rounded-full"><Text>6.</Text></View>
							<Text>
								Right to explain the circumstances behind the apprehension.
							</Text>
						</View>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}