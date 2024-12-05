import { View, Text, Pressable, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import { FontAwesome6 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Header() {

    const router = useRouter();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userData = await AsyncStorage.getItem('@user_data');
            if (userData) {
              const parsedUser = JSON.parse(userData);
              setUsername(parsedUser?.username || 'Usuário'); 
            }
          } catch (error) {
            console.error('Erro ao buscar os dados do usuário:', error);
          }
        };
    
        fetchUserData();
      }, []);

    const handleLogout = async () => {
        try {

          await AsyncStorage.removeItem('@user_data');

          Alert.alert('Sucesso', 'Você foi deslogado com sucesso.')

          router.replace('/')

        } catch (error) {
          Alert.alert('Erro', 'Ocorreu um erro ao deslogar. Tente novamente.')
          console.error('Erro ao deslogar:', error)
        }
      };

  return (
    <View className='w-full flex flex-row items-center justify-between mb-4'>
        <Pressable className='w-10 h-10 bg-sky-100 rounded-full flex justify-center'>
            <FontAwesome6 name='bars' size={24} color='#082f49'/>
        </Pressable>
        <View className='flex flex-col items-center justify-center'>
            <Text className='text-sky-950 text-center text-sm'>Bem vindo(a)</Text>
            <View className='w-full flex flex-row items-center justify-center gap-1'>
                <FontAwesome6 name='circle-user' size={20} color='#0369a1'/>
                <Text 
                    className='text-sky-950 text-sm font-extrabold'
                    style={{textTransform: 'capitalize'}}
                    >
                    {username}
                </Text>
            </View>
        </View>
        <Pressable 
            className='w-10 h-10 bg-sky-100 rounded-full flex justify-center'
            onPress={handleLogout}
        >
            <FontAwesome6 name='right-from-bracket' size={24} color='#082f49'/>
        </Pressable>
    </View>
  )
}