import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { Linking, Pressable, ScrollView, View } from "react-native";
import { Text } from '@/components/ui/text';

export default function Fines5PolicyScreen(){
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
												1. Colorum Violation - A motor vehicle is considered operating as “colorum” under any of the following circumstances:
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												a. A private motor vehicle operating as a PUV but without proper authority from the LTFRB:
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												b. A PUV operating outside of its approved route or area without a prior permit from the Board or outside the exceptions provided under existing memorandum circulars;
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												c. A PUV operating differently from its authorized denominations (ex. those approved as school service but operating as UV express, or those approved as tourist bus transport but operating as city or provincial bus); and
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												d. A PUV with suspended or cancelled CPC and Decision/Order of the suspension or cancellation is executory; and
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												e. A PUV with expired CPC and without a pending application for extension of validity timely filed before the Board.
											</Text>
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">1st Offense</Text>
											<Text></Text>
											<Text className="text-foreground">
												• BUS - Php 1,000,000.00 and minimum impounding of unit for three (3) months
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• TRUCK - Php 200,000.00 and minimum impounding of unit for three (3) months
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• JEEPNEY - Php 50,000.00 and minimum impounding of unit for three (3) months
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• VAN - Php 200,000.00 and minimum impounding of unit for three (3) months
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• SEDAN - Php 120,000.00 and minimum impounding of unit for three (3) months
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• MC - Php 6,000.00 and minimum impounding of unit for three (3) months
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												Status of CPC:
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												1. Revocation of the ENTIRE Certificate of Public Convenience (“CPC”) where the apprehended vehicle belongs (expect when apprehended vehicle is with private/green plate);
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												2. Blacklisting of the apprehended vehicle and all other authorized units included in the CPC from being used as a public utility vehicle; and
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												3. Revocation of the registration of the apprehended ve­hicle and all other authorized units included in the franchise.
											</Text>
											<Text></Text>
											<Text className="text-foreground font-bold">
												2nd Offense
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												1. Revocation of ALL CPCs (entire fleet) of the operator;
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												2. Disqualification of the operator, and, in case of a corporation, all its stockholders and directors, to operate any kind of public land transportation;
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												3. Blackisting of ALL authorized units (entire fleet) of the operator from being used as public utility vehicle; and
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												4. Revocation of the registration of ALL authorized units (entire fleet) of the operator.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												In deteremining the frequency of offenses, LTFRB and its RFRBs will count offenses against operators and not against a particular motor vehicle or CPC. Hence, the second apprehension of a vehicle belonging to the same operator, regardless of whether the first and second vehicle apprehended are included in the same or different CPCs, shall be counted as (2nd) offense.
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												If a private motor vehicle operating as a PUV but without proper authority from the LTFRB is apprehended, the LTFRB or RFRBs shall, in addition to the abovementioned fines, impounding, and penalty, disqualify the registered owner, and, in case of a corporation, all its stockholders and directors, to operate any kind of public land transportation.
											</Text>
										</View>
									</View>

									{/* B. AXLE OVERLOADING */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">2. Refusal to render service to the public or convey passenger to destination*</Text>
										</View>
										<View className="flex-1 bg-background p-2">
											
											<Text className="text-foreground">
												• 1st Offense - Php 5,000.00
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days
											</Text>
											<Text></Text>
											<Text className="text-foreground">
												• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized
											</Text>
										</View>
									</View>

									{/* C. OPERATING A PASSENGER BUS/TRUCK WITH CARGO EXCEEDING 160 KILOGRAMS */}
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												3. Overcharging I undercharging of fare*
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												3. Overcharging I undercharging of fare*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												4. Failure to provide proper body markings
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												5. No franchise I Certificate of Convenience or evidence of franchise presented during apprehension or carried inside the motor vehicle*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												6. Fraud and falsities such as presentation of fake and spurious CPC, OR/CR, plates, stickers and tags*
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">Revocation/Cancellation of the franchise/Certificate of Public Convenience, after due notice of hearing pursuant to LTFRB</Text>
											<Text></Text>
											<Text className="text-foreground">Memorandum Circular No. 2013 - 003</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												7. Employing reckless, insolent, discourteous or arrogant drivers
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												8. Allowing an unauthorized driver to drive PUV or allowing a driver to drive PUV without bringing his/her driver's license
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												9. Operating the units I with defective parts and accessories*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												10. Failure to provide fare discount to those entitled under existing laws and pertinent Memorandum circulars of the LTFRB*
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												11. Failure to provide the Board with complete, correct, and updated operator's information (such as, but not limited to address, contact numbers, list of drivers, etc.) and other forms of misrepresentation
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												12. Failure to display "No Smoking" signage and/or allowing personnel or passenger to smoke inside the vehicle
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												13. Fast, tampered, defective taximeter or operating without or with an old seal taximeter (TX only)*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												14. Tampered, broken, joined, reconnected, fake or altered sealing wire (TX only)*
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												15. Violation of color scheme or design / Adoption of new color design without authority from the Board (PUB and TX only)
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												16. Unregistered or unauthorized J trade/business name (PUB and TX only)
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												17. No Panel Route (PUJ, PUB, UV)
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												18. No sign board* (PUJ, PUB , UV)
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												19. Pick and Drop of Passengers outside the terminal (PUJ, PUB,UV)*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												20. Carrying of illegal and/or prohibited cargoes *
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												21. Failure to provided fire extinguisher and required "STOP and GO" signage for use of each vehicle (STS only)*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>
									
									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												22. Trip cutting (PUJ, PUB, UV)
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												23. Failure to display fare matrix (PUJ,PUB,UV)*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground font-bold">
												24. Failure to display the International Symbol of Accessibility inside the units and/or failure to designate seats specifically for the use of Persons with Disabilities or failure or refusal to transport PWD's (PUJ, PUB, TTS, UV)
											</Text>
											
										</View>
										<View className="flex-1 bg-foreground/5 p-2">
											<Text className="text-foreground">• 1st Offense - Php 50,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 75,000.00 and impounding unit of at forty-five (45) days. An impounding fee of P 500.00 per day shall be imposed.</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 100,000.00 and cancellation of CPC</Text>
											
										</View>
									</View>

									<View style={{width: 500}} className="flex-row gap-1">
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground font-bold">
												25. Breach of franchise conditions under 2011 Revised Terms and Conditions of CPC not otherwise here in provided.*
											</Text>
											
										</View>
										<View className="flex-1 bg-background p-2">
											<Text className="text-foreground">• 1st Offense - Php 5,000.00</Text>
											<Text></Text>
											<Text className="text-foreground">• 2nd Offense - Php 10,000.00 and impounding of unit for thirty (30) days</Text>
											<Text></Text>
											<Text className="text-foreground">• 3rd and subsequent Offenses - Php 15,000.00 and cancellation of CPC where the unit is authorized</Text>
											
										</View>
									</View>

								</View>
							</View>
						</ScrollView>
					</View>				
				</ScrollView>
				<Text></Text>
				<Text className="text-foreground mt-1">
					Except in cases of colorum violation, as stated in number one (1), the LTFRB, in the application of these fines and penalties, shall count offenses against operators and not against a particular motor vehicle or CPC. Hence, the second offense committed by a different vehicle of the same operator shall be counted as second (2nd) offense and another offense by third vehicle with the same operator shall be counted as a third (3rd) offense, provided all apprehended vehicles belong to the same CPC.
				</Text>
				<Text className="text-foreground">
					Fines and penalties provided for under existing Memorandum Circulars of the LTFRB which are not provided for in this Joint Administrative Order shall continue to be applied by the Board and Regional Franchising and Regulatory Offices.
				</Text>
			</View>
			</ScrollView>
		</>
	)
}