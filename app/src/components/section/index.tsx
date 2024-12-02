import { View, Text, Pressable } from 'react-native'
import React from 'react'

interface Props{
    name: string
    size: 'text-lg' | 'text-xl' | 'text-2xl'
    label: string
    action: () => void
}

export default function Section({name, size,label, action}: Props) {
  return (
    <View className='w-full flex flex-row items-center justify-between px-4'>
      <Text className={`${size} font-semibold my-4 self-start text-sky-900`}>{name}</Text>
      <Pressable onPress={action}>
        <Text className='text-sky-950 font-bold'>{label}</Text>
      </Pressable>
    </View>

  )
}