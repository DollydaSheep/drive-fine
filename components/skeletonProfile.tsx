import { View } from "react-native";
import Skeletoncircle from "./skeleton/skeletoncircle";
import Skeletontext from "./skeleton/skeletontext";


export default function SkeletonProfile(){
  return(
    <View className="p-4 pt-8 gap-4">
      <View className="flex flex-row justify-center">
        <Skeletoncircle size={90} />
      </View>
      <View className="flex flex-row justify-center pb-4">
        <Skeletontext width={100} height={30} />
      </View>
      <Skeletontext height={50} />
      <Skeletontext height={50} />
      <Skeletontext height={50} />
      <Skeletontext height={50} />
      <Skeletontext height={50} />
    </View>
  )
}