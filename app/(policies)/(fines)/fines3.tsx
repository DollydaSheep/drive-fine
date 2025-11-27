import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Fines3PolicyScreen(){
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

									{/* A. DRIVING AN UNREGISTERED MOTOR VEHICLE */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">A. DRIVING AN UNREGISTERED MOTOR VEHICLE</Text>
											<Text></Text>
											<Text className="text-foreground">
												This includes driving with an improperly registered motor vehicle or a motor vehicle with
												expired, revoked, suspended or invalid registration, unregistered or fake substitute or
												replacement engine, engine block or chassis.
											</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Php 10,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">
												In addition, if the violation has exceeded one (1) month, the motor vehicle shall be
												impounded and released only upon valid registration and payment of appropriate fines and
												penalties.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												For undocumented engines, the motor vehicle shall be impounded and barred for a period of
												one (1) year from payment of the fines.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Undocumented engines shall likewise be confiscated in favor of the government.
											</Text>
										</View>
									</View>

									{/* B. UNAUTHORIZED MOTOR VEHICLE MODIFICATION */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">B. UNAUTHORIZED MOTOR VEHICLE MODIFICATION</Text>
											<Text></Text>
											<Text className="text-foreground">
												This includes change in color and other unauthorized modifications of the standard
												manufacturer's specifications not covered by Section A.
											</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">
												In addition, the motor vehicle shall be released only upon inspection, correction of defect,
												and payment of the fine.
											</Text>
										</View>
									</View>

									{/* C. OPERATING A RIGHT HAND DRIVE MOTOR VEHICLE */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">C. OPERATING A RIGHT HAND DRIVE MOTOR VEHICLE</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Php 50,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">
												In addition, the motor vehicle shall be impounded and subject to inspection, correction of
												defect, and payment of the fine.
											</Text>
										</View>
									</View>

									{/* D. MOTOR VEHICLE OPERATING WITHOUT/IMPROPER/UNAUTHORIZED PARTS */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												D. MOTOR VEHICLE OPERATING WITHOUT OR WITH DEFECTIVE / IMPROPER / UNAUTHORIZED ACCESSORIES,
												DEVICES, EQUIPMENT AND PARTS
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Includes bells/sirens/whistles, blinkers, horns, early warning device (EWD), grill/s,
												jalousies, brakes, lights, mirrors, mufflers, metallic tires, speedometer, windshield,
												wipers, or any accessory that is prejudicial to road safety.
											</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">
												The motor vehicle shall be impounded until properly corrected or removed and payment of fine.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Improper or unauthorized accessories shall be confiscated in favor of the government.
											</Text>
										</View>
									</View>

									{/* E. FAILURE TO ATTACH / IMPROPER ATTACHMENT OF LICENSE PLATES */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												E. FAILURE TO ATTACH OR IMPROPER ATTACHMENT / TAMPERING OF AUTHORIZED LICENSE PLATES / THIRD PLATE STICKER
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Includes attachment of unauthorized plates or devices that impede visibility or reflectivity.
											</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">
												Authorized plates must be properly attached; unauthorized devices are confiscated in favor of
												the government.
											</Text>
										</View>
									</View>

									{/* F. SMOKE BELCHING */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">F. SMOKE BELCHING (Section 46, RA 8749)</Text>
											<Text></Text>
											<Text className="text-foreground">
												Any vehicle suspected through visual signs shall undergo emission testing. The vehicle shall
												be impounded until it passes emission standards and fines are paid.
											</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">Offenses:</Text>
											<Text className="text-foreground">• 1st – Up to Php 2,000.00</Text>
											<Text className="text-foreground">• 2nd – Up to Php 4,000.00</Text>
											<Text className="text-foreground">• 3rd – 1-year suspension of MVR + up to Php 6,000.00</Text>
											<Text className="text-foreground">• Succeeding – 1-year suspension of registration</Text>
											<Text></Text>
											<Text className="text-foreground">
												Drivers and operators must undergo a DENR pollution control seminar.
											</Text>
										</View>
									</View>

									{/* G. FRAUD IN RELATION TO MV REGISTRATION */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												G. FRAUD IN RELATION TO THE REGISTRATION OF THE MOTOR VEHICLE AND/OR ITS RENEWAL
											</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Php 3,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">
												The motor vehicle shall be impounded and barred from registration for one (1) year from the
												payment of the fine.
											</Text>
										</View>
									</View>

									{/* H. OTHER REGISTRATION-RELATED VIOLATIONS */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												H. ALL OTHER VIOLATIONS IN CONNECTION WITH MOTOR VEHICLE REGISTRATION RENEWAL / OPERATION
											</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">Php 2,000.00</Text>
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