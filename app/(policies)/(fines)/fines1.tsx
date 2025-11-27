import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Fines1PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<View className="flex-1 mb-8 p-4 gap-2">
				<Text className="text-foreground text-lg">Temporary Operator's Permit (TOP)</Text>
				<ScrollView className="">
					<View className="mb-2 border border-ytheme p-4 rounded-lg gap-2">
						
						<Text>
							Serves as a permit to operate a motor vehicle for a period of seventy-two (72) hours only. All apprehensions are deemed admitted unless contested by filling a written contest within five (5) days from date of apprehension. Failure of the driver to pay the corresponding penalty within fifteen (15) days from the date of apprehension shall cause automatic suspension of his driver's license for a period of thirty (30) days from the date of apprehension, in addition to the fines and penalties prescribed hereunder. The LTO shall resolve a contested case within five (5) days from receipt of said written contest.
						</Text>
						<Text>
							The imposition of the fines and penalties shall be without prejudice to any criminal action that may be instituted under existing laws, rules and regulations.
						</Text>

					</View>
					
				</ScrollView>
			</View>
		</>
	)
}