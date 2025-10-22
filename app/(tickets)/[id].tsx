import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function TicketDetails() {

  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen 
        options={{
          title: `Ticket No. ${id}`
        }}
      />
      <View>
        <Text>Ticket number {id}</Text>
      </View>
    </>
  )
}

