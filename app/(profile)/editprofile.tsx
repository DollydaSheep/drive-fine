import { THEME } from "@/lib/theme";
import { router, Stack } from "expo-router";
import { ActivityIndicator, Image, Modal, Platform, Pressable, ScrollView, TextInput, View } from "react-native";
import { Text } from '@/components/ui/text';
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useUserRole";
import { doc, DocumentData, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import * as FileSystem from "expo-file-system/legacy";
import { decode } from 'base64-arraybuffer';
import { supabase } from "@/lib/supabase";
import { Calendar, Pencil, PlusCircle, User, XCircle } from "lucide-react-native";
import DatePicker from 'react-native-date-picker'
import SkeletonProfile from "@/components/skeletonProfile";
import DateMonths from "@/lib/months";
import DateTimePicker from '@react-native-community/datetimepicker';
import { KeyboardProvider, KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useColorScheme } from "nativewind";


export default function EditProfileScreen(){

  const { colorScheme } = useColorScheme();
  const { user } = useAuth();

  const [profile, setProfile] = useState('');
  const [mimetype, setMimetype] = useState<string | undefined>('');
  const [profileData, setProfileData] = useState<DocumentData>();
  const [loading, setLoading] = useState(true);

  const [changedProfile, setChangedProfile] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plate, setPlate] = useState<string[]>([]);
  const [newPlate, setNewPlate] = useState('');

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [changesModal, setChangesModal] = useState(false);

  const [deletePlateNo, setDeletePlateNo] = useState(false);

  useEffect(() => {
    if (!user) return;

    const userDocRef = doc(db, "Users", user.uid);

    const unsubscribe = onSnapshot(userDocRef, (snap) => {
      console.log("snapshot")
      if (snap.exists()) {
        const data = snap.data();
        console.log(data);
        
        setFirstName(data.firstName ? data.firstName : '');
        setLastName(data.lastName ? data.lastName : '');
        setGender(data.gender ? data.gender : '');
        setBirthDate(data.birthDate ? data.birthDate.toDate() : null);
        setEmail(data.email ? data.email : '');
        setPhone(data.phone ? data.phone : '');
        setPlate(data.plate ? data.plate : '');

        console.log(new Date())

        if (data.profileImage) {
          setProfile(`${data.profileImage}?t=${Date.now()}`); // cache-bust
        }
        setLoading(false);
      } else {
        console.warn("User document not found");
      }
    });

    return () => unsubscribe();
  }, [user]);
  
  const uploadProfileToSupabase = async () => {
    try {
      setLoading(true);
      if (!user) {
        console.error("No user logged in");
        return;
      }

      if(changedProfile){
        const base64 = await FileSystem.readAsStringAsync(profile, {encoding: 'base64'});
        const filePath = `profile/${user?.uid}-profile.jpg`;
        const contentType = mimetype
        
        const binary = Uint8Array.from(
          atob(base64),
          (char) => char.charCodeAt(0)
        );

        // Upload to Supabase
        const { data, error } = await supabase.storage
          .from("profile-pictures")
          .upload(filePath, decode(base64), {
            contentType,
            upsert: true
          });

        if (error) throw error;

        const { data: urlData } = supabase
          .storage
          .from("profile-pictures")
          .getPublicUrl(filePath);

        const imageUrl = urlData?.publicUrl; 

        const cacheBustedUrl = `${imageUrl}?t=${Date.now()}`;

        // Save Supabase URL to Firebase user document
        await setDoc(doc(db, "Users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          email: email,
          birthDate,
          phone: phone,
          plate: plate,
          profileImage: cacheBustedUrl,
        }, { merge: true });

        if (error) throw error;

      } else {
        await setDoc(doc(db, "Users", user.uid), {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          email: email,
          birthDate: birthDate,
          phone: phone,
          plate: plate
        }, { merge: true });
      }

      setLoading(false);
      setChangesModal(false)
      return false

    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  const handleEditProfile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if(!result.canceled){
      
      setProfile(result.assets[0].uri)
      setMimetype(result.assets[0].mimeType)
      setChangedProfile(true)
      // const supabaseUrl = await uploadProfileToSupabase(result.assets[0]);

    }
  } 

  const handleSubmitChanges = async () => {
    const uploadState = await uploadProfileToSupabase();
    router.navigate('/profile')
  }

  const handleDeletePlateNo = () => {
    setDeletePlateNo(true);
  }
    
  const deletePlateFunction = (index: number) => {
    setPlate(plate.filter((_, i) => i !== index));
  };

  return(
		<>
			<Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          title: "Edit Profile"
        }}
      />
      <KeyboardProvider>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 100}>

      <ScrollView>
			<View className="flex-1 p-4">
        {loading && (
          <SkeletonProfile />
        )}
        {!loading && (
          <>
            <View className="flex flex-column justify-center items-center gap-2">
              <View className={`${profile ? 'p-1' : 'p-4'} rounded-full bg-black/10`}>
                {!profile ? (
                  <User 
                    size={56}
                    width={50}
                    height={50}
                  />
                ): (
                  <Image 
                    source={{ uri: profile}}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                )}
              </View>
              <Pressable onPress={handleEditProfile}>
                <View className="py-2 px-3 bg-foreground/20 justify-self-center rounded-lg">
                  <Text className="text-sm text-foreground">Change Profile Picture</Text>
                </View>
              </Pressable>  
            </View>

            <View className="flex flex-col gap-2">
              <View>
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>First Name</Text>
                </View>
                <View className="flex flex-row items-center">
                  <TextInput 
                    className="border-b border-foreground/20 text-foreground w-full"
                    placeholder="---"
                    placeholderTextColor={colorScheme === 'dark' ? THEME.dark.border : THEME.light.border}
                    value={firstName}
                    onChangeText={setFirstName}
                  />
                  <View className="absolute right-0">
                    <Pencil 
                      size={20}
                      color={THEME.light.border}
                    />
                  </View>
                </View>
              </View>

              <View>
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>Last Name</Text>
                </View>
                <View className="flex flex-row items-center">
                  <TextInput 
                    className="border-b border-foreground/20 w-full text-foreground"
                    placeholderTextColor={colorScheme === 'dark' ? THEME.dark.border : THEME.light.border}
                    placeholder="---"
                    value={lastName}
                    onChangeText={setLastName}
                  />
                  <View className="absolute right-0">
                    <Pencil 
                      size={20}
                      color={THEME.light.border}
                    />
                  </View>
                </View>
              </View>
              
              <View>
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>Gender</Text>
                </View>
                <View className="flex flex-row">
                  <Pressable onPress={()=>setGender('Male')} className={`py-2 px-4 rounded-lg ${gender === 'Male' ? 'bg-foreground/20' : ''}`}>
                    <Text className={`text-sm ${gender === 'Male' ? "text-background" : ''}`}>Male</Text>
                  </Pressable>
                  <Pressable onPress={()=>setGender('Female')} className={`py-2 px-4 rounded-lg ${gender === 'Female' ? 'bg-foreground/20' : ''}`}>
                    <Text className={`text-sm ${gender === 'Female' ? "text-background" : ''}`}>Female</Text>
                  </Pressable>
                </View>
              </View>

              <View>
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>Birthday</Text>
                </View>
                <Pressable onPress={()=>setOpenDatePicker(true)}>
                  <View className="flex flex-row p-2 gap-2">
                    <Text className="text-foreground">
                      {birthDate === null
                        ? '--:--:----'
                        : `${DateMonths[birthDate.getMonth()]}-${birthDate.getDate()}-${birthDate.getFullYear()}`}
                    </Text>
                    <Calendar 
                      color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                    />
                  </View>
                </Pressable>
                {openDatePicker && (
                  <DateTimePicker
                    value={birthDate ?? new Date()}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                      setOpenDatePicker(false);
                      if (selectedDate && event.type === 'set') {setBirthDate(selectedDate);console.log(selectedDate)};
                    }}
                    
                  />
                )}
              </View>

              <View>
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>Email</Text>
                </View>
                <View className="flex flex-row items-center">
                  <TextInput 
                    className="border-b border-foreground/20 text-foreground w-full"
                    placeholder="---"
                    placeholderTextColor={colorScheme === 'dark' ? THEME.dark.border : THEME.light.border}
                    value={email}
                    onChangeText={setEmail}
                  />
                  <View className="absolute right-0">
                    <Pencil 
                      size={20}
                      color={THEME.light.border}
                    />
                  </View>
                </View>
              </View>

              <View>
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>Phone / Contact No.</Text>
                </View>
                <View className="flex flex-row items-center">
                  <TextInput 
                    className="border-b border-foreground/20 text-foreground w-full"
                    placeholder="---"
                    placeholderTextColor={colorScheme === 'dark' ? THEME.dark.border : THEME.light.border}
                    value={phone}
                    onChangeText={setPhone}
                  />
                  <View className="absolute right-0">
                    <Pencil 
                      size={20}
                      color={THEME.light.border}
                    />
                  </View>
                </View>
              </View>

              <View className="mb-4">
                <View className="flex flex-row justify-between mr-4">
                  <Text className='font-extralight text-sm'>Plate No.</Text>
                </View>
                {plate && plate.map((p,index)=>(
                  <View key={index} className="mb-2">
                    <View className="flex flex-row items-center">
                      <Text>{p}</Text>
                      <Pressable onPress={handleDeletePlateNo} className="absolute right-0 p-2">
                        <View >
                          <XCircle 
                            size={28}
                            color={"#da1f1fff"}
                          />
                        </View>
                      </Pressable>
                    </View>
                    <Modal
                      animationType="fade"
                      transparent={true}
                      visible={deletePlateNo}
                    >
                      <View className="flex-1 justify-center items-center bg-foreground/20 p-4">
                        {loading && (
                          <ActivityIndicator size={50} />
                        )}
                        {!loading && (
                          <View className="p-4 rounded-lg bg-background border border-ytheme">
                            <Text className="text-lg">Delete Plate No.</Text>
                            <Text className="text-sm font-light">Are you sure you want to delete plate no.?</Text>
                            <View className="flex flex-row justify-evenly my-4">
                              <Pressable onPress={()=>setDeletePlateNo(false)} className="px-6 py-1 bg-foreground/20 rounded-lg">
                                <Text className="text-background">Cancel</Text>
                              </Pressable>
                              <Pressable className="px-6 py-1 bg-ytheme rounded-lg">
                                <Text onPress={()=>deletePlateFunction(index)} className="text-background">Submit</Text>
                              </Pressable>
                            </View>
                          </View>
                        )}
                      </View>
                    </Modal>
                  </View>
                ))}
                <View className="flex flex-row items-center">
                  <TextInput 
                    className="border-b border-foreground/20 text-foreground w-full"
                    placeholder="---"
                    placeholderTextColor={colorScheme === 'dark' ? THEME.dark.border : THEME.light.border}
                    value={newPlate}
                    onChangeText={setNewPlate}
                  />
                  <Pressable className="bg-background p-2 absolute right-0" onPress={()=>{
                    if (newPlate.trim() === "") return;
                    setPlate([...plate, newPlate]);
                    setNewPlate("");
                  }}>
                    <View>
                      <PlusCircle 
                        size={28}
                        color={"#2ab42aff"}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
              

              <Pressable onPress={()=>setChangesModal(true)} className="px-4 py-2 mb-6 bg-ytheme self-end rounded-lg">
                <Text>Accept Changes</Text>
              </Pressable>

            </View>
          </>
        )}
        <Modal
          animationType="fade"
          transparent={true}
          visible={changesModal}
        >
          <View className="flex-1 justify-center items-center bg-foreground/20 p-4">
            {loading && (
              <ActivityIndicator size={50} />
            )}
            {!loading && (
              <View className="p-4 rounded-lg bg-background border border-ytheme">
                <Text className="text-lg">Confirm Changes</Text>
                <Text className="text-sm font-light">Are you sure you want to make those changes?</Text>
                <View className="flex flex-row justify-evenly my-4">
                  <Pressable onPress={()=>setChangesModal(false)} className="px-6 py-1 bg-foreground/20 rounded-lg">
                    <Text className="text-background">Cancel</Text>
                  </Pressable>
                  <Pressable className="px-6 py-1 bg-ytheme rounded-lg">
                    <Text onPress={handleSubmitChanges} className="text-background">Submit</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>
        </Modal>
      </View>
      </ScrollView>

      </KeyboardAvoidingView>
      </KeyboardProvider>
		</>
	)
}