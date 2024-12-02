import { useEffect, useState } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VagasProps from '@//interfaces/vagasInterface';
import Header from '@//components/header'

export default function Registered() {

  const [registeredVagas, setRegisteredVagas] = useState([]);

  useEffect(() => {
    const loadRegisteredVagas = async () => {
      try {
        const storedVagas = await AsyncStorage.getItem('@candidaturas');
        if (storedVagas) {
          setRegisteredVagas(JSON.parse(storedVagas));
        }
      } catch (error) {
        console.error('Erro ao recuperar as vagas cadastradas:', error);
      }
    };

    loadRegisteredVagas();
  }, []);

  const renderItem = ({ item }: { item: VagasProps }) => (
    <View className='p-4'>
      <Text className='font-bold text-lg'>{item.titulo}</Text>
      <Text className='text-sm text-gray-500'>{item.empresa.empresa}</Text>
      <Text className={`font-extrabold text-sm ${item.situacao ? 'text-green-500' : 'text-red-500'}`}>
        {item.situacao ? 'Aberta' : 'Fechada'}
      </Text>
    </View>
  );

  return (
    <View className='bg-sky-100 w-full p-4' style={{flex: 1}}>
      <StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>
       <Header/>
       <FlatList
        data={registeredVagas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  )
}