import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Fines4PolicyScreen(){
  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: ""
        }}
      />
			
			<ScrollView className="mb-8">
			<View className="flex-1 mb-8 p-4 gap-2">
				<ScrollView className="border border-ytheme rounded-lg">
					<View className="flex-1">
						<ScrollView horizontal={true} className="flex-1">
							<View className="flex-1">
								<View className="rounded-lg">
									{/* TABLE HEADER */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-ytheme p-2">
											<Text className="font-bold text-foreground text-center">Violation</Text>
										</View>
										<View className="flex-1 bg-ytheme p-2">
											<Text className="font-bold text-foreground text-center">Fine & Penalties</Text>
										</View>
									</View>

									{/* A. LOAD EXTENDING BEYOND PROJECTED WIDTH WITHOUT PERMIT */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												A. LOAD EXTENDING BEYOND PROJECTED WIDTH WITHOUT PERMIT
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Fine shall be imposed upon the driver of the motor vehicle for operating a motor vehicle
												with any part of the load extending beyond the projected width of the vehicle without
												special permit.
											</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Php 1,000.00</Text>
										</View>
									</View>

									{/* B. AXLE OVERLOADING */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">B. AXLE OVERLOADING</Text>
											<Text></Text>
											<Text className="text-foreground">
												An amount equivalent to 25% of MVUC at the time of infringement on the owner/operator or
												driver of trucks and trailers for loading beyond their registered gross weight.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												The penalty shall be waived for loads exceeding the registered GVW by a tolerance of less
												than 5%.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												No motor vehicle shall be allowed on the roadway if a dual-wheel axle load exceeds
												13,500 kgs or the vehicle load exceeds 150% of maximum allowable gross weight.
											</Text>
											<Text className="text-foreground">
												(To be computed based on formula.)
											</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">25% of MVUC</Text>
										</View>
									</View>

									{/* C. OPERATING A PASSENGER BUS/TRUCK WITH CARGO EXCEEDING 160 KILOGRAMS */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												C. OPERATING A PASSENGER BUS/TRUCK WITH CARGO EXCEEDING 160 KILOGRAMS
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Fine shall be imposed upon the driver and conductor of the motor vehicle.
											</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Php 1,000.00</Text>
										</View>
									</View>

								</View>
							</View>
						</ScrollView>
					</View>				
				</ScrollView>
			</View>
			</ScrollView>
		</>
	)
}