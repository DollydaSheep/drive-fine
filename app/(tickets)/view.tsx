import { THEME } from "@/lib/theme";
import { Stack } from "expo-router";
import { View } from "react-native";


export default function ViewTicketsScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "View Tickets"
        }}
      />
			<View className='flex-1 p-4'>
				<View className='flex-1 bg-background border border-ytheme overflow-clip rounded-xl gap-3 mb-6' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>
					<View className="flex flex-row items-center gap-4 p-4 bg-gray-500 rounded-t-lg">

					</View>
				</View>
			</View>
		</>
	)
}