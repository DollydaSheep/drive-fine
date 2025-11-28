import { Text } from "@/components/ui/text";
import { auth } from "@/lib/firebase";
import { THEME } from "@/lib/theme";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { FileWarning, Flag, Languages, Lock, LogOut, Moon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { Pressable, ScrollView, View } from "react-native";


export default function HistoryScreen(){
  const { colorScheme } = useColorScheme();

  const handleLogout = async () => {
        signOut(auth)
          .then(()=>{
            console.log("User Logged Out");
          })
          .catch((err)=>{
            console.error(err.message);
          })
      }

  return(
    <>
      <ScrollView>
        <View className="flex-1 p-4 gap-2">
          <Pressable onPress={()=>router.push("/terms")}>
            <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
              <FileWarning 
                size={24}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
              <Text>Terms & Conditions</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>router.push("/language")}>
            <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
              <Languages 
                size={24}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
              <Text>Language</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>router.push("/report")}>
            <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
              <Flag 
                size={24}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
              <Text>Report & Feedback</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>router.push("/darkmode")}>
            <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
              <Moon 
                size={24}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
              <Text>Dark / Light Mode</Text>
            </View>
          </Pressable>

          <Pressable onPress={()=>router.push("/security")}>
            <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
              <Lock 
                size={24}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
              <Text>Security</Text>
            </View>
          </Pressable>

          <Pressable onPress={handleLogout}>
            <View className="flex flex-row items-center gap-2 p-3 bg-red-500 rounded-lg">
              <LogOut 
                size={24}
                color={colorScheme === 'dark' ? THEME.dark.foreground : THEME.light.foreground}
              />
              <Text>Logout</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </>
  )
}