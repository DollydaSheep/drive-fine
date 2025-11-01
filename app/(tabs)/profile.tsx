import { Text } from "@/components/ui/text";
import { THEME } from "@/lib/theme";
import { Minus, MinusCircle, Pencil, PlusCircle, User } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { Image, Platform, Pressable, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "@/hooks/useUserRole";
import { supabase } from "@/lib/supabase";
import * as FileSystem from "expo-file-system/legacy";
import { decode } from 'base64-arraybuffer';

export default function AboutScreen(){
  
  const { user } = useAuth();

  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!user) return;

    const userDocRef = doc(db, "Users", user.uid);

    const unsubscribe = onSnapshot(userDocRef, (snap) => {
      console.log("snapshot")
      if (snap.exists()) {
        const data = snap.data();

        if (data.profileImage) {
          setProfile(`${data.profileImage}?t=${Date.now()}`); // cache-bust
        }
      } else {
        console.warn("User document not found");
      }
    });

    return () => unsubscribe();
  }, [user]);

  const uploadProfileToSupabase = async (asset: ImagePicker.ImagePickerAsset) => {
    try {

      if (!user) {
        console.error("No user logged in");
        return;
      }

      const base64 = await FileSystem.readAsStringAsync(asset.uri, {encoding: 'base64'});
      const filePath = `profile/${user?.uid}-profile.jpg`;
      const contentType = asset.mimeType
      
      const binary = Uint8Array.from(
        atob(base64),
        (char) => char.charCodeAt(0)
      );

      // Upload to Supabase
      const { data, error } = await supabase.storage
        .from("profile-pictures")
        .upload(filePath, decode(base64), {
          contentType,
          upsert: true
        });

      if (error) throw error;

      const { data: urlData } = supabase
        .storage
        .from("profile-pictures")
        .getPublicUrl(filePath);

      const imageUrl = urlData?.publicUrl; 

      const cacheBustedUrl = `${imageUrl}?t=${Date.now()}`;

      // Save Supabase URL to Firebase user document
      await setDoc(doc(db, "Users", user.uid), {
        profileImage: cacheBustedUrl,
      }, { merge: true });

      if (error) throw error;

    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  const handleEditProfile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if(!result.canceled){

      const supabaseUrl = await uploadProfileToSupabase(result.assets[0]);

    }


  } 

  return(
    <>
      <ScrollView>
        <View className="flex-1 p-4">
          
          <View className="flex flex-column justify-center items-center p-4 gap-2">
            <View className={`${profile ? 'p-1' : 'p-4'} rounded-full bg-black/10`}>
              {!profile ? (
                <User 
                  size={56}
                  width={50}
                  height={50}
                />
              ): (
                <Image 
                  source={{ uri: profile}}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
            </View>
            <Pressable onPress={handleEditProfile}>
              <View className="py-2 px-3 bg-foreground/20 justify-self-center rounded-lg">
                <Text className="text-sm text-background">Edit Profile Picture</Text>
              </View>
            </Pressable>  
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