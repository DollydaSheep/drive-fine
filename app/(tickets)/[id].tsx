import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from '@/components/ui/text';
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { THEME } from '@/lib/theme';

export default function TicketDetails() {

  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: THEME.light.ytheme},
          headerTitle: () => (
            <>
              <Text className='text-xl font-medium'>Ticket Details</Text>
              <Text className='text-xs font-light'>Ticket #{id}</Text>
            </>
          )
        }}
      />
      <View className='p-4'>
        <View className='bg-background border border-ytheme p-4 rounded-xl gap-3' style={{boxShadow: "0 3px 4px rgba(0,0,0,0.1)"}}>
          <View className='flex flex-row justify-between items-center'>
            <Text className='text-foreground text-lg font-semibold'>Illegal Parking</Text>
            <Text className='text-xs font-medium text-foreground/50 bg-ytheme/50 px-3 py-1 rounded-full'>Pending</Text>
          </View>

          <View>
            <Text className='font-extralight text-xs'>Date Issued</Text>
            <Text className='text-foreground'>2025-10-10</Text>
          </View>

          <View>
            <Text className='font-extralight text-xs'>Issued by</Text>
            <Text className='text-foreground'>Enforcer Nabunturan</Text>
          </View>

          <View>
            <Text className='font-extralight text-xs'>Plate Number</Text>
            <Text className='text-foreground'>123 LBC</Text>
          </View>

          <View>
            <Text className='font-extralight text-xs'>Fine Amount</Text>
            <Text className='text-foreground font-semibold text-2xl'>₱2000.00</Text>
          </View>

          <Pressable>
            <View className='flex flex-row justify-center p-3 bg-ytheme rounded-xl'>
              <Text className='text-background font-semibold'>Pay Now</Text>
            </View>
          </Pressable>
        
        </View>
      </View>
    </>
  )
}

