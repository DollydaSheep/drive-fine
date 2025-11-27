import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function FinesPolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Fines and Penalties for Violations</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/fines1")}>
							<Text>Temporary Operator's Permit (TOP)</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/fines2")}>
							<Text>Licensing</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/fines3")}>
							<Text>Registration, Renewal or Operation</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/fines4")}>
							<Text>Dimension, Specifications, Weight and Load Limits</Text>
						</Pressable>
					</View>
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						<Pressable onPress={()=>router.push("/fines5")}>
							<Text>Franchise</Text>
						</Pressable>
					</View>
				</ScrollView>
			</View>
		</>
	)
}