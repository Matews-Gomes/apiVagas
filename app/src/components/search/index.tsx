import { View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

export default function Search() {
  return (
    <View className='w-full flex-row border border-sky-900 h-14 rounded-full items-center gap-2 px-4'>
        <FontAwesome6 name='magnifying-glass' size={24} color='#0c4a6e'/>
      <TextInput className=' w-full h-full flex-1 bg-transparent text-sky-900' placeholder='Pesquise uma vaga' placeholderTextColor='#0c4a6e'/>
    </View>
  )
}