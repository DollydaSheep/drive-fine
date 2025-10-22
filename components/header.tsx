import { Image, ImageBackground, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { CircleAlert, User } from 'lucide-react-native';

export default function HeaderComponent(){
  return(<>
    <ImageBackground 
      source={require('@/assets/images/cover.png')}
      className='py-3 rounded-b-2xl z-50 flex flex-col items-start' 
      style={{boxShadow:"0 3px 3px rgba(0,0,0,0.2)" }}
    >
    <View className='flex flex-row justify-between items-center mt-7 mb-4 w-full px-4'>
      <View className='flex flex-row items-center bg-background py-1 px-3 rounded-full'>
        <Image
          source={require('@/assets/images/logoP.png')}
          resizeMethod='resize'
          style={{
            width: 25,
            height: 30
          }}
        />
        <Image
          source={require('@/assets/images/logoDrive.png')}
          className='-mx-5'
          resizeMethod='scale'
          style={{
            width: 150,
            height: 30,
            transform: 'scale(0.6)'
          }}
        />
      </View>
      <View className='p-3 rounded-full bg-background'>
        <User 
          size={16}
        />
      </View>
    </View>
    
    <View className='px-3 w-full'>
      <View className='bg-background p-4 rounded-lg'>
        <Text className='text-foreground font-semibold'>Total Fines</Text>
        <Text className='font-bold text-4xl text-ytheme'>₱2,000</Text>
        <View className='flex flex-row justify-between'>
          <View className='flex flex-row items-center gap-1'>
            <CircleAlert 
              size={16}
              color={"rgb(249 115 22)"}
            />
            <Text className='text-orange-500 text-sm'>Payment due</Text>
          </View>
          <View className='flex flex-row items-center gap-1'>
            <View className='p-1 bg-ytheme rounded-full' />
            <Text className='text-ytheme text-xs font-medium'>1 Unpaid Ticket</Text>
          </View>
        </View>
      </View>
    </View>
    
  </ImageBackground>
  </>)
}