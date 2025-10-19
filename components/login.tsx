import { Dimensions, Image, type ImageStyle, Pressable, TextInput, View } from 'react-native';
import { Text } from '@/components/ui/text';
import SignInComponent from './signIn';
import { useState } from 'react';
import SignUpComponent from './signUp';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function LoginScreen() {

  const [isLogin, setIsLogin] = useState(true);
  const translateX = useSharedValue(0);

  const [current, setCurrent] = useState<'signin' | 'signup'>('signin');

  const handleOnSwitch = (target: 'signin' | 'signup') => {
    if (target === 'signup') {
      translateX.value = withTiming(-width, { duration: 500 });
      setCurrent('signup');
    } else {
      translateX.value = withTiming(0, { duration: 500 });
      setCurrent('signin');
    }
  };

  const handleTest = () => {

  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return(
    <>
      <View className='flex-1 justify-center items-center bg-background'>
        <Animated.View
        className="flex-row w-full"
        style={animatedStyle}
      >
        {/* Sign In Screen */}
        <View style={{ width }}>
          <SignInComponent onSwitch={() => handleOnSwitch('signup')} />
        </View>

        {/* Sign Up Screen */}
        <View style={{ width }}>
          <SignUpComponent onSwitch={() => handleOnSwitch('signin')} />
        </View>

      </Animated.View>
      </View>
    </>
  )
}