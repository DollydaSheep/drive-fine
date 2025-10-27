import { Text } from "@/components/ui/text";
import { FileWarning, Flag, Languages, Lock, LogOut, Moon } from "lucide-react-native";
import { ScrollView, View } from "react-native";


export default function HistoryScreen(){
  return(
    <>
      <ScrollView>
        <View className="flex-1 p-4 gap-2">
          <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
            <FileWarning 
              size={24}
            />
            <Text>Terms & Conditions</Text>
          </View>

          <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
            <Languages 
              size={24}
            />
            <Text>Language</Text>
          </View>

          <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
            <Flag 
              size={24}
            />
            <Text>Report & Feedback</Text>
          </View>

          <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
            <Moon 
              size={24}
            />
            <Text>Dark / Light Mode</Text>
          </View>

          <View className="flex flex-row items-center gap-2 p-3 bg-ytheme rounded-lg">
            <Lock 
              size={24}
            />
            <Text>Security</Text>
          </View>

          <View className="flex flex-row items-center gap-2 p-3 bg-red-500 rounded-lg">
            <LogOut 
              size={24}
            />
            <Text>Logout</Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}