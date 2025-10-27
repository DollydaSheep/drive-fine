import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Text } from '@/components/ui/text';
import { ChevronRight } from "lucide-react-native";
import { useColorScheme } from "nativewind";


export default function UserViewTickets(){

	const { colorScheme } = useColorScheme();

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "My Tickets"
        }}
      />
			<View className="flex-1 p-4 gap-2">
				<Pressable onPress={()=>{router.push({
            pathname: '/(tickets)/[id]',
            params: { id: 1 }
          })}}>
            <View className='py-3 px-4 rounded-lg border border-ytheme'>
              <View className='flex flex-row justify-between items-center'>
                <Text className='text-foreground font-medium'>Illegal Parking</Text>
              </View>
							<Text className="text-sm">Enforcer Nabunturan</Text>
              <Text className='font-light text-sm text-foreground'>2025-10-10</Text>
              <View className='flex flex-row justify-between mt-2'>
                <Text className='text-lg font-semibold text-foreground'>₱2,000.00</Text>
                <ChevronRight 
                  size={20}
                  color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                />
              </View>
            </View>
          </Pressable>

					<View className='py-3 px-4 rounded-lg border border-ytheme'>
            <View className='flex flex-row justify-between items-center'>
              <Text className='text-foreground font-medium'>No Seatbelt</Text>
            </View>
						<Text className="text-sm">Enforcer Nabunturan</Text>
            <Text className='font-light text-sm text-foreground'>2025-09-15</Text>
            <View className='flex flex-row justify-between mt-2'>
              <Text className='text-lg font-semibold text-foreground'>₱200.00</Text>
              <ChevronRight 
                size={20}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
            </View>
          </View>
			</View>
		</>
	)
}