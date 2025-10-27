import { THEME } from '@/lib/theme'
import { Stack, useLocalSearchParams } from 'expo-router'
import { Text } from '@/components/ui/text';
import { Pressable, TextInput, View } from 'react-native';


export default function IssueTicketScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Issue Ticket"
        }}
      />
			<View className='p-4'>
				<View className='bg-background border border-ytheme p-4 rounded-xl gap-3' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>

					<View>
						<Text className='font-extralight text-xs mb-1'>Name of Violator</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='e.g. Justin Nabunturan'
							
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Plate No.</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='123 LBC'
							
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Violation</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='Illegal Parking'
							
						/>
					</View>

					<View>
						<Text className='font-extralight text-xs mb-1'>Fine Amount</Text>
						<TextInput 
							className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
							placeholder='2000.00'
							
						/>
					</View>

					<Pressable>
						<View className='flex flex-row justify-center p-3 bg-ytheme rounded-xl'>
							<Text className='text-background font-semibold'>Issue Ticket</Text>
						</View>
					</Pressable>
				
				</View>
			</View>
		</>
	)
}