
import { Alert, Image, type ImageStyle, Pressable, TextInput, View, ActivityIndicator } from 'react-native';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';


export default function SignInComponent({ onSwitch }: { onSwitch: () => void}){

  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!userID || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userID, password);
      const user = userCredential.user;
      Alert.alert("Success", `Welcome back, ${user.email}`);
      // 🔹 You can navigate to home screen here (e.g. router.push('/home'))
    } catch (error: any) {
      console.error("Login error:", error);
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return(
    <>
      {loading && (
        <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size={60} />
          <Text>Loading...</Text>
        </View>
      )}
      {!loading && (
        <>
          <View className='flex flex-col items-center mb-4'>
            <Image 
              source={require('@/assets/images/logo.png')}
              resizeMethod='resize'
              resizeMode='cover'
              style={{
                width: 200,
                height: 200,
              }}
            />
            <Text className='text-center text-foreground italic text-sm font-medium -mt-5'>Your all-in-one solution for managing traffic violations and fines</Text>
          </View>
          <View className='flex flex-col items-center gap-2 w-full p-4 rounded-lg'>
            <Text className='text-2xl font-semibold text-foreground'>Sign In</Text>
            <View className='flex flex-col w-full mb-1'>
              <Text className='text-foreground text-xs mb-1'>User ID</Text>
              <TextInput 
                className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
                placeholder='Enter your User ID'
                value={userID}
                onChangeText={setUserID}
              />
            </View>
            <View className='flex flex-col w-full mb-2'>
              <Text className='text-foreground text-xs mb-1'>Password</Text>
              <TextInput 
                className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
                placeholder='Enter your password'
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Pressable className='w-full' onPress={handleLogin}>
              <View className='flex items-center py-3 bg-ytheme rounded-lg'>
                <Text className='text-foreground font-semibold'>Sign In</Text>
              </View>
            </Pressable>
            <Pressable className='mb-2'>
              <Text className='text-ytheme text-sm'>Forgot Password?</Text>
            </Pressable>
            <View className='border-t border-foreground/5 w-full mb-2'></View>
            <Text className='text-foreground text-sm'>Don't have an account?</Text>
            <Pressable className='w-full' onPress={onSwitch}>
              <View className='flex items-center py-3 bg-ytheme rounded-lg'>
                <Text className='text-foreground font-semibold'>Create Account</Text>
              </View>
            </Pressable>
          </View>
        </>
      )}
    </>
  )
}