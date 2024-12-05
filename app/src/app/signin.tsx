
import { View, Text, StatusBar, TextInput, Pressable, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import { router, useLocalSearchParams  } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'
import { FontAwesome6 } from '@expo/vector-icons'
import api from '@//services/api'
import axios from 'axios';

export default function Signin() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handlerRegister(){
		router.replace('/signup')
	}

	async function handlerLogin(){

		if (!email || !password ) {		
			Alert.alert('Erro', 'Por favor, preencha todos os campos.')
			return
		}

		try{

			const response = await api.post(`/auth/login`, {				
				email: email,
				password: password		
			})

			if (response.status === 200) {
				const user = response.data.user;

				await AsyncStorage.setItem('@user_data', JSON.stringify(user));

				router.replace({
					pathname: '/home',
					params: { user: JSON.stringify(user) }
				})

			} else {
				Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário', response.data?.error || 'Erro desconhecido');
			}
			
		}catch(error){
			if (axios.isAxiosError(error)) {
				const errorMessage = error.response?.data?.error || 'Erro desconhecido';
				Alert.alert('Erro ao enviar dados', errorMessage);
			} else {
				Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
			}
		}
	}

	const { message } = useLocalSearchParams()

  return (
    <View className='bg-sky-100 w-full h-full'>
		{message && (
            <Animatable.View 
				className="w-full justify-center items-center p-4 bg-green-200"
				delay={600} animation={'fadeInDown'}
				>
                <Text className="text-green-800 text-lg">{message}</Text>
            </Animatable.View>
        )}
      <StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>
      <Animatable.View className='flex-2' delay={500} animation={'fadeInLeft'}>
        <Text className='text-3xl mt-10 mb-12 ms-10 text-sky-600'>Bem vindo(a)</Text>
      </Animatable.View>
	  <Animatable.View className='flex-1 rounded-t-3xl justify-start items-start bg-sky-600' animation={'fadeInUp'}>
		<View className='w-full p-10 top-7 bottom-7'>
			<Text className='text-sky-100 text-2xl bottom-1'>
				<FontAwesome6 name='envelope-circle-check' size={20} color={'#e0f2fe'}/> Email</Text>
			<TextInput
				className='w-full border-b-hairline text-sky-100'
				placeholder='Digite seu email...'
				placeholderTextColor={'#bae6fd'}
				keyboardType="email-address"
				autoCapitalize="none"
				autoComplete="email"
				value={email}
				onChangeText={setEmail}
			/>

			<Text className="text-sky-100 text-2xl mt-7 mb-1">
			  <FontAwesome6 name="lock" size={20} color={'#e0f2fe'} /> Senha
			</Text>
			<TextInput
			  className="w-full border-b-hairline text-sky-100"
			  placeholder="Digite sua senha..."
			  placeholderTextColor={'#bae6fd'}
			  secureTextEntry={true} 
			  autoCapitalize="none" 
			  value={password}
			  onChangeText={setPassword}
			/>
		</View>
		
	  	<View className='w-full flex-col flex justify-center items-center p-7 top-7'>
	  		<Pressable 
				onPress={handlerLogin}
				className='w-full justify-center items-center rounded-full flex-row p-4 gap-2 bg-sky-950' 
				>
				<Text className='text-sky-100 text-xl font-bold'>Acessar</Text>
	  		</Pressable>
	  		<Pressable 
				className='pt-5'
				onPress={handlerRegister}
	  		 >
				<Text className='text-sky-200 text-lg'>Não possui uma conta? Cadastre-se</Text>
	  		</Pressable>
	  	</View>  
	  </Animatable.View>
    </View>
  )
}