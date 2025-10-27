import { THEME } from "@/lib/theme";
import { Stack } from "expo-router";
import { View } from "react-native";
import { Text } from '@/components/ui/text';
import { useColorScheme } from "nativewind";


export default function UserTicketHistory(){

	const { colorScheme } = useColorScheme();

	return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "History"
        }}
      />
			<View className="flex-1 p-4">

        <View className='py-3 px-4 rounded-lg border border-ytheme'>
					<View className='flex flex-row justify-between items-center'>
						<Text className='text-foreground font-medium'>No Seatbelt</Text>
						<Text className='text-xs font-medium text-foreground/50 bg-green-500/20 px-3 py-1 rounded-full'>Paid</Text>
					</View>
					<Text className='font-light text-sm text-foreground'>2025-09-15</Text>
					<View className='flex flex-row justify-between items-center mt-2'>
						<Text className="text-sm font-light text-foreground/80">Amount Paid</Text>
						<Text className='text-lg font-semibold text-foreground'>₱200.00</Text>
					</View>
				</View>

			</View>
		</>
	)
}