import { Alert, Image, type ImageStyle, Pressable, TextInput, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ScrollView } from 'react-native';

export default function SignUpComponent({ onSwitch }: { onSwitch: () => void}){

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignUp = async () => {
    if(!firstName || !lastName || !email || !phone || !driverLicense || !password){
      Alert.alert("Error", "Please fill in all fields!")
      return;
    }
    if(password !== confirm){
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    
    try{
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user
      await signOut(auth);

      await setDoc(doc(db, "Users", user.uid), {
        firstName,
        lastName,
        phone,
        driverLicense,
        createdAt: new Date()
      })

      

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
      <ScrollView>
      <View className='flex flex-col items-center gap-2 w-full p-4 rounded-lg'>
        <Text className='text-2xl font-semibold text-foreground'>Create Account</Text>
        <Text className='text-foreground/50'>Join DriveFine today</Text>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>First Name</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Enter your First Name'
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        
        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Last Name</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Enter your Last Name'
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Email Adress</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='email@email.com'
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Phone Number</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='e.g. 0944 455 5464'
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Driver's License Number</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='N01-23-456789'
            value={driverLicense}
            onChangeText={setDriverLicense}
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Password</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Create a password'
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className='flex flex-col w-full mb-2'>
          <Text className='text-foreground text-xs mb-1'>Confirm Password</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Re-enter your password'
            value={confirm}
            onChangeText={setConfirm}
          />
        </View>

        <Pressable className='w-full' onPress={handleSignUp}>
          <View className='flex items-center py-3 bg-ytheme rounded-lg'>
            <Text className='text-foreground font-semibold'>Next</Text>
          </View>
        </Pressable>

        <View className='border-t border-foreground/5 w-full'></View>
        <Text className='text-foreground text-sm'>Already have an account?</Text>
        <Pressable className='w-full' onPress={onSwitch}>
          <View className='flex items-center py-3 bg-ytheme rounded-lg'>
            <Text className='text-foreground font-semibold'>Sign in</Text>
          </View>
        </Pressable>
      </View>
      </ScrollView>
    </>
  )
}