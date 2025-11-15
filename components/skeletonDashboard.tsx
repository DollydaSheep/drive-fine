import { View } from "react-native";
import Skeletonbox from "./skeleton/skeletonbox";
import Skeletontext from "./skeleton/skeletontext";


export default function SkeletonDashboard(){
  return(
    <View className='flex-1 p-3 gap-3'>
      <Skeletontext width={100} height={24} />
      <Skeletonbox height={70} />
      <Skeletonbox height={70} />
      <Skeletonbox height={70} />
      <Skeletonbox height={70} />
      <Skeletontext width={100} height={24} />
      <Skeletonbox height={100} />
    </View>
  )
}