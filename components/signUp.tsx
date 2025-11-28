import { ActivityIndicator, Alert, Image, type ImageStyle, Modal, Platform, Pressable, TextInput, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useColorScheme } from 'nativewind';
import { THEME } from '@/lib/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpComponent({ onSwitch }: { onSwitch: () => void}){
  const { colorScheme } = useColorScheme();

  const[loading,setLoading] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [phone,setPhone] = useState('');
  const [plate, setPlate] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const [nextForm, setNextForm] = useState(false)

  const [selectedRole, setSelectedRole] = useState("user");

  const handleNext = () => {
    if(nextForm){
      handleSignUp();
      return;
    }
    setNextForm(true)
  }

  const handleBack = () => {
    setNextForm(false);
  }

  const handleSignUp = async () => {
    if(!firstName || !lastName || !email || !phone || !plate || !password){
      Alert.alert("Error", "Please fill in all fields!")
      return;
    }
    if(password !== confirm){
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    setLoading(true);
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user
      await signOut(auth);

      await setDoc(doc(db, "Users", user.uid), {
        id: user.uid,
        firstName,
        lastName,
        email,
        role: selectedRole,
        phone,
        plate: [plate],
        createdAt: new Date()
      })

      
      setLoading(false);
      Alert.alert("Success", "Account created successfully!");
      onSwitch();
    } catch(err){
      console.error(err);
      if (err instanceof Error) {
        Alert.alert("Sign Up Failed", err.message);
      } else {
        Alert.alert("Sign Up Failed", "An unknown error occurred");
      }
    }
  }

  return(
    <>
      
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 10}>
      
      <ScrollView>
      <View className='flex flex-col items-center gap-2 w-full p-4 rounded-lg'>
        <Text className='text-2xl font-semibold text-foreground'>Create Account</Text>
        <Text className='text-foreground/50'>Join DriveFine today</Text>

        {!nextForm && (
          <>
            <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>First Name</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Enter your First Name'
            placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        
        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Last Name</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Enter your Last Name'
            placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Email Address</Text>
            <TextInput 
              className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
              placeholder='email@email.com'
              placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View className='flex flex-col w-full mb-1'>
            <Text className='text-foreground text-xs mb-1'>Password</Text>
            <TextInput 
              className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
              placeholder='Create a password'
              placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View className='flex flex-col w-full mb-2'>
            <Text className='text-foreground text-xs mb-1'>Confirm Password</Text>
            <TextInput 
              className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
              placeholder='Re-enter your password'
              placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              value={confirm}
              onChangeText={setConfirm}
            />
          </View>
          </>
        )}

        {nextForm && (
          <>
            
            <View className="flex flex-col w-full mb-1">
              <Text className='text-foreground text-xs mb-1'>Role</Text>
              <View className='flex flex-row gap-2'>
                <Pressable className='flex-1' onPress={()=>setSelectedRole('user')}>
                  <View className={`flex flex-row justify-center ${selectedRole === 'user' ? 'bg-ytheme' : 'bg-background'} border border-ytheme px-1 py-2 rounded-lg`}>
                    <Text className={`${selectedRole === 'user' ? 'text-background' : 'text-foreground'} font-medium`}>User</Text>
                  </View>
                </Pressable>
                <Pressable className='flex-1' onPress={()=>setSelectedRole('enforcer')}>
                  <View className={`flex flex-row justify-center ${selectedRole === 'enforcer' ? 'bg-ytheme' : 'bg-background'} border border-ytheme px-1 py-2 rounded-lg`}>
                    <Text className={`${selectedRole === 'enforcer' ? 'text-background' : 'text-foreground'} font-medium`}>Enforcer</Text>
                  </View>
                </Pressable>
              </View>
            </View>

            <View className='flex flex-col w-full mb-1'>
              <Text className='text-foreground text-xs mb-1'>Gender</Text>
              <View className="flex flex-row gap-2">
                <Pressable onPress={()=>setGender('Male')} className={`flex-1 py-2 px-4 rounded-lg border border-ytheme ${gender === 'Male' ? 'bg-ytheme' : ''}`}>
                  <Text className={`text-sm text-center ${gender === 'Male' ? "text-background" : ''}`}>Male</Text>
                </Pressable>
                <Pressable onPress={()=>setGender('Female')} className={`flex-1 py-2 px-4 rounded-lg border border-ytheme ${gender === 'Female' ? 'bg-ytheme' : ''}`}>
                  <Text className={`text-sm text-center ${gender === 'Female' ? "text-background" : ''}`}>Female</Text>
                </Pressable>
              </View>
            </View>
            
            

            <View className='flex flex-col w-full mb-1'>
              <Text className='text-foreground text-xs mb-1'>Phone Number</Text>
              <TextInput 
                className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
                placeholder='e.g. 0944 455 5464'
                placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            {selectedRole === 'user' && (
              <View className='flex flex-col w-full mb-1'>
                <Text className='text-foreground text-xs mb-1'>Plate No.</Text>
                <TextInput 
                  className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
                  placeholder='ABC 123'
                  placeholderTextColor={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
                  value={plate}
                  onChangeText={setPlate}
                />
              </View>
            )}
          </>
        )}

        <Pressable className='w-full' onPress={handleNext}>
          <View className='flex items-center py-3 bg-ytheme rounded-lg'>
            <Text className='text-foreground font-semibold'>Next</Text>
          </View>
        </Pressable>

        {nextForm && (
          <>
            <Pressable className='w-full' onPress={handleBack}>
              <View className='flex items-center py-3 bg-ytheme rounded-lg'>
                <Text className='text-foreground font-semibold'>Back</Text>
              </View>
            </Pressable>
          </>
        )}

        <View className='border-t border-foreground/5 w-full'></View>
        <Text className='text-foreground text-sm'>Already have an account?</Text>
        <Pressable className='w-full' onPress={onSwitch}>
          <View className='flex items-center py-3 bg-ytheme rounded-lg mb-6'>
            <Text className='text-foreground font-semibold'>Sign in</Text>
          </View>
        </Pressable>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
      >
        <View className="bg-foreground/10 flex-1 flex flex-row items-center justify-center">
          {loading && (
            <ActivityIndicator size={50}/>
          )}
        </View>
        
      </Modal>
      </ScrollView>
      
      </KeyboardAvoidingView>
    </>
  )
}