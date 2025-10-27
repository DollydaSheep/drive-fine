import { Text } from "@/components/ui/text";
import { THEME } from "@/lib/theme";
import { Minus, MinusCircle, Pencil, PlusCircle, User } from "lucide-react-native";
import { ScrollView, View } from "react-native";


export default function AboutScreen(){
  return(
    <>
      <ScrollView>
        <View className="flex-1 p-4">
          
          <View className="flex flex-row justify-center items-center p-4 mb-4">
            <View className="p-4 rounded-full bg-black/10">
              <User 
                size={56}
              />
            </View>
          </View>

          <View className="flex flex-col gap-2">
            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>First Name</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>Mel</Text>
            </View>

            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>Last Name</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>Calzada</Text>
            </View>
            
            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>Gender</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>Male</Text>
            </View>

            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>Birthday</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>Oct-27-2002</Text>
            </View>

            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>Email</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>Mel@gmail.com</Text>
            </View>

            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>Phone / Contact No.</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>0961 054 6130</Text>
            </View>

            <View>
              <View className="flex flex-row justify-between mr-4">
                <Text className='font-extralight text-sm'>Plate No.</Text>
                <Pencil 
                  size={16}
                  color={THEME.light.border}
                />
              </View>
              <Text className='text-foreground text-lg'>123 LBC</Text>
            </View>

          </View>

        </View>
      </ScrollView>
    </>
  )
}