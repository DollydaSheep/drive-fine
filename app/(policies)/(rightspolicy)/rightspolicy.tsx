import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function RightsPolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Rights, Duties and Responsibilities of Drivers</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights1")}>
							<Text>General Responsibilities of a Driver</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights2")}>
							<Text>Responsibilities of a Bus, Taxis, Jeepney, UV Express and TNVS Drivers</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights3")}>
							<Text>Responsibilities of a Motorcycle Rider/Driver</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights4")}>
							<Text>Responsibilities of a School Bus Driver</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights5")}>
							<Text>Responsibilities of a Taxi, TNVS and UV Express Drivers</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights6")}>
							<Text>Responsibilities of a Tricycle Rider/Driver</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights7")}>
							<Text>Responsibilities of a Truck Driver</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights8")}>
							<Text>Rights of Driver during Apprehension</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/rights9")}>
							<Text>Common Traffic Violations of Public Utility Vehicle Drivers that causes Heavy Traffic</Text>
						</Pressable>
					</View>
				</ScrollView>
			</View>
		</>
	)
}