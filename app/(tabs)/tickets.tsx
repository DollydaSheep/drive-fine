import { Text } from "@/components/ui/text";
import { THEME } from "@/lib/theme";
import { Bell, Calendar } from "lucide-react-native";
import { View } from "react-native";


export default function TicketsScreen(){
  return(
    <>
      <View className="flex-1 p-4">
        <View className="flex flex-row p-4 border border-ytheme rounded-lg gap-2">
          <View className="p-2 bg-foreground/5 rounded-lg">
            <Bell />
          </View>
          <View className="flex">
            <Text className="text-lg font-medium text-red-500">Ticket is due</Text>
            <Text className="text-sm font-light">Violation: Illegal Parking</Text>
            <View className="flex flex-row gap-1 items-center">
              <Calendar 
                size={16}
                color={THEME.light.border}
              />
              <Text className="text-xs font-light text-border">10-27-2025</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}