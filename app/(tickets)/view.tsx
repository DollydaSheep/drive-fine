import { THEME } from "@/lib/theme";
import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';
import { ArrowUpDown } from "lucide-react-native";



export default function ViewTicketsScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "View Tickets"
        }}
      />
			<View className='flex-1'>
				<ScrollView
					horizontal={true}
					className="flex-1"
				>
				<View className='flex-1 bg-background mb-8' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>
					<View className="flex flex-row items-center gap-4 p-2 bg-foreground/50 rounded-t-md">
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Violation</Text>
							
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Last Name</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">First Name</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Date Issued</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Enforcer</Text>
						</View>
						<View style={{width: 100}} className="flex flex-row gap-1 justify-center items-center">
							<Text className="text-center">Fine Amount</Text>
						</View>
					</View>

					<View className="flex flex-row items-center gap-4 p-2 bg-foreground/10 rounded-t-md">
						<View style={{width: 100}}>
							<Text className="text-center">Illegal Parking</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Calzada</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Mel James</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Oct-27-2025</Text>
						</View>
						<View style={{width: 100}} >
							<Text className="text-center">Enforcer Nabunturan</Text>
						</View>
						<View style={{width: 100}} >
							<Text className="text-center">P2000.00</Text>
						</View>
					</View>

					<View className="flex flex-row items-center gap-4 p-2 bg-background rounded-t-md">
						<View style={{width: 100}}>
							<Text className="text-center">Lane Violation</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Yrog-irog</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Maril</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Aug-26-2025</Text>
						</View>
						<View style={{width: 100}} >
							<Text className="text-center">Enforcer Gabales</Text>
						</View>
						<View style={{width: 100}} >
							<Text className="text-center">P200.00</Text>
						</View>
					</View>

					<View className="flex flex-row items-center gap-4 p-2 bg-foreground/10 rounded-t-md">
						<View style={{width: 100}}>
							<Text className="text-center">No Helmet</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Romero</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Ken</Text>
						</View>
						<View style={{width: 100}}>
							<Text className="text-center">Jan-24-2025</Text>
						</View>
						<View style={{width: 100}} >
							<Text className="text-center">Enforcer Rodrigo</Text>
						</View>
						<View style={{width: 100}} >
							<Text className="text-center">P500.00</Text>
						</View>
					</View>

				</View>
				</ScrollView>
			</View>
		</>
	)
}