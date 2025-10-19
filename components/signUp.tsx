import { Image, type ImageStyle, Pressable, TextInput, View } from 'react-native';
import { Text } from '@/components/ui/text';

export default function SignUpComponent({ onSwitch }: { onSwitch: () => void}){
  return(
    <>
      <View className='flex flex-col items-center gap-2 w-full p-4 rounded-lg'>
        <Text className='text-2xl font-semibold text-foreground'>Create Account</Text>
        <Text className='text-foreground/50 mb-4'>Join DriveFine today</Text>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>First Name</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Enter your First Name'
          />
        </View>
        
        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Last Name</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Enter your Last Name'
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Phone Number</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='e.g. 0944 455 5464'
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Driver's License Number</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='N01-23-456789'
          />
        </View>

        <View className='flex flex-col w-full mb-1'>
          <Text className='text-foreground text-xs mb-1'>Password</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Create a password'
          />
        </View>

        <View className='flex flex-col w-full mb-2'>
          <Text className='text-foreground text-xs mb-1'>Confirm Password</Text>
          <TextInput 
            className='bg-foreground/10 px-4 py-3 rounded-lg w-full text-foreground focus:border focus:border-foreground'
            placeholder='Re-enter your password'
          />
        </View>

        <Pressable className='w-full'>
          <View className='flex items-center py-3 bg-ytheme rounded-lg'>
            <Text className='text-foreground font-semibold'>Next</Text>
          </View>
        </Pressable>

        <View className='border-t border-foreground/5 w-full mb-2'></View>
        <Text className='text-foreground text-sm'>Already have an account?</Text>
        <Pressable className='w-full' onPress={onSwitch}>
          <View className='flex items-center py-3 bg-ytheme rounded-lg'>
            <Text className='text-foreground font-semibold'>Sign in</Text>
          </View>
        </Pressable>
      </View>
    </>
  )
}