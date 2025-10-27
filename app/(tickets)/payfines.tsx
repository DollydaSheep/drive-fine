import { THEME } from "@/lib/theme";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';
import { useState } from "react";
import { Check } from "lucide-react-native";


export default function PayFinesScreen(){

	const [checked, setChecked] = useState(false);

	const handleCheck = () => {
		setChecked(!checked);
	}

	return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Pay Fines"
        }}
      />
			<View className="flex-1 p-4">
				<Pressable onPress={handleCheck}>
					<View className="flex flex-row items-start gap-4 py-3 px-4 rounded-lg border border-ytheme">
						<View className={`mt-2 rounded-sm border border-foreground ${checked ? 'bg-ytheme border-ytheme' : 'p-2'}`}>
							{checked && (
								<Check 
									size={16}
									color={THEME.light.background}
								/>
							)}
						</View>
						<View>
							<Text className='text-foreground font-medium'>Illegal Parking</Text>
							<Text className='font-light text-sm text-foreground'>2025-10-10</Text>
							<Text className='text-lg font-semibold text-foreground'>₱2000.00</Text>
						</View>
					</View>
				</Pressable>

			</View>
			<View className="p-4">
				<View className="flex w-full p-4 bg-background rounded-lg border border-ytheme" style={{marginBottom: 35}}>
					<View className="flex flex-row justify-between">
						<Text className="font-light text-foreground">Subtotal</Text>
						<Text className="text-lg font-medium">P{checked ? "2000.00" : "0.00"}</Text>
					</View>
					<Pressable>
						<View className={`py-3 px-4 rounded-lg ${checked ? "bg-ytheme" : "bg-foreground/10"} flex flex-row justify-center`}>
							<Text className="text-background font-medium">Proceed to Payment</Text>
						</View>
					</Pressable>
				</View>
			</View>
			
		</>
	)
}