import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Fines2PolicyScreen(){
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

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">A. DRIVING WITHOUT A VALID DRIVER'S LICENSE / CONDUCTOR'S PERMIT</Text>
											<Text></Text>
											<Text className="text-foreground ">This includes driving with an expired, revoked, suspended, inappropriate driver's license restriction code, inappropriate Driver's license classification, fake driver's license, tourist driving a motor vehicle with a valid foreign driving license beyond the 90-day maximum allowable period and a student driver driving without being accompanied by a duly licensed driver.</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground ">Php 3,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">In addition, the unlicensed or improperly licensed driver shall be disqualified from being granted a driver's license and driving a motor vehicle for a period of one (1) year from the payment of the fine.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">B. DRIVING A MOTOR VEHICLE USED IN THE COMMISSION OF A CRIME UPON CONVICTION BY A REGULAR COURT OF COMPETENT JURISDICTION</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground ">Php 10,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">In addition, the driver's license shall be confiscated and upon conviction for the crime, revoked and the driver shall be perpetually disqualified from being granted a driver's license and driving a motor vehicle.</Text>
											<Text></Text>
											<Text className="text-foreground ">The motor vehicle driven by the violator shall likewise be impounded until ordered to be released by a regular court of competent jurisdiction after payment of appropriate fines and penalties.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">C. COMMISSION OF A CRIME IN THE COURSE OF APPREHENSION UPON CONVICTION BY A REGULAR COURT OF COMPETENT JURISDICTION</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground ">Php 10,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">In addition, the driver's license shall be confiscated, and revoked upon conviction for the crime. The driver shall be disqualified from being granted a driver's license for a period of 5 years counted from the date of payment of appropriate fines and penalties</Text>
											<Text></Text>
											<Text className="text-foreground ">The motor vehicle driven by the violator shall likewise be impounded until ordered to be released by a regular court of competent jurisdiction after payment of appropriate fines and penalties.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">D. DRIVING A MOTOR VEHICLE UNDER THE INFLUENCE OF ALCOHOL, DANGEROUS DRUGS AND I OR SIMILAR SUBSTANCE UPON FINAL CONVICTION BY A REGULAR COURT OF C0MPETENT JURISDICTION (SECTION 12, R.A. 10586)</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground ">In addition to the fines and penalties prescribed by law: The non-professional driver's license of the person shall be confiscated and suspended for a period of twelve (12) months for the first conviction and perpetually revoked for the second conviction .</Text>
											<Text></Text>
											<Text className="text-foreground ">The suspension above shall commence upon the payment of the appropriate fines and penalties.</Text>
											<Text></Text>
											<Text className="text-foreground ">The professional driver's license of the person shall also be confiscated and perpetually revoked for the first conviction. The perpetual revocation of a driver's license shall disqualify the person from being granted any kind of driver's license thereafter.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">E. RECKLESS DRIVING</Text>
											<Text></Text>
											<Text className="text-foreground ">No person shall operate a motor vehicle on any highway recklessly or without reasonable caution considering the width, traffic, grades, crossing, curvatures, visibility and other condition of the highway and the conditions of the atmosphere and weather or so to endanger the property or the safety or rights or so as to cause excessive or unreasonable damage to the highway.</Text>
											<Text></Text>
											<Text className="text-foreground ">This includes driving with an improperly registered motor vehicle or a motor vehicle with expired, revoked, suspended or invalid registration, unregistered of fake substitute or replacement engine, engine block or chassis.</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground ">First Offense - Php 2,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Second Offense - Php 3,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Subsequent Offense - Php 10,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">In addition, the driver's license shall be suspended for a period of three (3) months for the second offense and six (6) months for the third offense from payment of fine and revocation of driver's license on the succeeding offense.</Text>
											<Text></Text>
											<Text className="text-foreground ">A revoked non-professional driver shall be disqualified from being granted a driver's license for a period of two (2) years counted from date of revocation.</Text>
											<Text></Text>
											<Text className="text-foreground ">A revoked professional driver shall be perpetually disqualified from getting any driver's license.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">F. SUBMISSION OF FAKE DOCUMENTS IN RELATION TO THE APPLICATION FOR A DRIVER'S LICENSE (NEW/RENEWAL)</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground ">Php 3,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">In addition, the driver's license shall be put on alarm, revoked and the driver shall be disqualified from being granted a driver's license and driving a motor vehicle for a period of one (1 ) year from the payment of the fine without prejudice to the filing of appropriate criminal charges.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">G.1 FAILURE TO WEAR THE PRESCRIBED SEATBELT DEVICE</Text>
											<Text></Text>
											<Text className="text-foreground ">This includes allowing a child 6 years old and below to be seated on the front passenger seat.</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground ">First Offense - Php 1,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Second Offense - Php 2,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Third Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">In addition the driver's license shall be suspended for a period of one (1) week from the payment of the fine for the third and each succeeding offense.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">G.2 FAILURE TO REQUIRE HIS/HER PASSENGER/S TO WEAR THE PRESCRIBED SEATBELT DEVICE (SECTION 12, R.A. 8750)</Text>
											<Text></Text>
											<Text className="text-foreground ">For Public Utility Vehicle, failure to post appropriate signage instructing front seat passengers to wear seatbelts when inside the vehicle.</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground ">For Public Utility Vehicle, both the driver and the operator are liable to pay a fine of Php 3,000.00 for every violation.</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">H. FAILURE TO WEAR THE STANDARD PROTECTIVE MOTORCYCLE HELMET OR FAILURE TO REQUIRE THE BACK RIDER TO WEAR THE STANDARD PROTECTIVE MOTORCYCLE HELMET, UNDER R.A. 10054</Text>
											<Text></Text>
											<Text className="text-foreground ">Wearing a helmet with a fake Philippines standard (PS) or import commodity clearance (IIC) sticker shall be tantamount to riding a moving motorcycle without wearing a helmet.</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground ">First Offense - Php 1,500.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Second Offense - Php 3,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Third Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground ">Fourth and Succeeding Offenses- Php 10,000.00</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">I. FAILURE TO CARRY DRIVER'S LICENSE, CERTIFICATE OF REGISTRATION OR OFFICIAL RECEIPT WHILE DRIVING A MOTOR VEHICLE</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground ">Php 1,000.00</Text>
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">J. ALL OTHER VIOLATIONS OF TRAFFIC RULES AND REGULATIONS*</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground ">Php 1,000.00</Text>
										</View>
									</View>
								</View>
							</View>
						</ScrollView>
					</View>				
				</ScrollView>
				<Text className="text-foreground">
					This includes the following traffic violations:
				</Text>
				<Text className="text-foreground mt-1">• Parking in an intersection</Text>
				<Text className="text-foreground">• Parking within 5 meters of the intersection</Text>
				<Text className="text-foreground">• Parking 4 meters from the driveway entrance</Text>
				<Text className="text-foreground">• Parking within 4 meters from a fire hydrant</Text>
				<Text className="text-foreground">• Parking in front of a private driveway</Text>
				<Text className="text-foreground">• Parking on the roadway side of any unmoving or parked MV at the curb or edge of the highway</Text>
				<Text className="text-foreground">• Parking at any place where signs of prohibitions have been installed</Text>
				<Text className="text-foreground">• Disregarding traffic signs</Text>
				<Text className="text-foreground">• Allowing passengers on top or cover of a motor vehicle except a truck helper</Text>
				<Text className="text-foreground">• Failure to provide canvass cover to cargoes or freight of trucks requiring the same</Text>
				<Text className="text-foreground">• Permitting passenger to ride on running board, step board, or mudguard of MV while in motion</Text>
				<Text className="text-foreground">• Failure to dim headlights when approaching another motor vehicle</Text>
				<Text className="text-foreground">• Driving in a place not intended for traffic or into place not allowed for parking</Text>
				<Text className="text-foreground">• Hitching or permitting a person, bicycle, motorcycle, tricycle, or skate roller to hitch to a motor vehicle</Text>
				<Text className="text-foreground">• Driving against traffic - failure to pass to the right when meeting vehicles coming towards</Text>
				<Text className="text-foreground">• Illegal turn - failure to conduct the motor vehicle to the right when turning left at intersections</Text>
				<Text className="text-foreground">• Illegal overtaking - failure to pass to the left except on multiple lanes in same direction</Text>
				<Text className="text-foreground">• Overtaking at unsafe distance</Text>
				<Text className="text-foreground">• Cutting an overtaken vehicle</Text>
				<Text className="text-foreground">• Failure to give way to an overtaking vehicle</Text>
				<Text className="text-foreground">• Increasing speed when being overtaken</Text>
				<Text className="text-foreground">• Overtaking when left side is not visible or clear</Text>
				<Text className="text-foreground">• Overtaking upon a crest of a grade</Text>
				<Text className="text-foreground">• Overtaking upon a curve</Text>
				<Text className="text-foreground">• Overtaking at any railway grade crossing</Text>
				<Text className="text-foreground">• Overtaking at an intersection</Text>
				<Text className="text-foreground">• Overtaking on "men working" or "caution" signs</Text>
				<Text className="text-foreground">• Overtaking in a "no overtaking" zone</Text>
				<Text className="text-foreground">• Failure to yield the right of way (multiple conditions)</Text>
				<Text className="text-foreground">• Failure to stop before traversing a "through highway" or railroad crossing</Text>
				<Text className="text-foreground">• Failure to yield right of way when entering a highway or to emergency vehicles</Text>
				<Text className="text-foreground">• Failure to give proper signal before starting, stopping, or turning</Text>
				<Text className="text-foreground">• Illegal turn (right or left) not following proper lane rules</Text>
				<Text className="text-foreground">• Failure to stop motor and notch handbrake when unattended</Text>
				<Text className="text-foreground">• Unsafe towing</Text>
				<Text className="text-foreground">• Obstruction of other vehicles while discharging/loading passengers or freight</Text>
				<Text className="text-foreground">• Motorcycle carrying more passengers or cargo than allowed</Text>
				<Text className="text-foreground">• Refusal to render service or convey passengers to destination</Text>
				<Text className="text-foreground">• Overcharging or undercharging of fare</Text>
				<Text className="text-foreground">• No franchise / CPC or failure to present evidence during apprehension</Text>
				<Text className="text-foreground">• Fraud and falsities (fake CPC, OR/CR, plates, stickers, tags)</Text>
				<Text className="text-foreground">• Operating the unit with defective parts/accessories</Text>
				<Text className="text-foreground">• Failure to provide fare discounts as required</Text>
				<Text className="text-foreground">• Tampered, defective, or unsealed taximeter</Text>
				<Text className="text-foreground">• No sign board</Text>
				<Text className="text-foreground">• Pick-up/drop-off of passengers outside the terminal</Text>
				<Text className="text-foreground">• Carrying illegal or prohibited cargoes</Text>
				<Text className="text-foreground">• Failure to provide fire extinguisher and "STOP and GO" signage</Text>
				<Text className="text-foreground">• Trip cutting</Text>
				<Text className="text-foreground">• Failure to display fare matrix</Text>
				<Text className="text-foreground">• Breach of franchise conditions under 2011 Revised Terms and Conditions of CPC not otherwise provided</Text>
			</View>
			</ScrollView>
		</>
	)
}