import { View, Text, StatusBar, TextInput, Pressable, Alert, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import { useState, useEffect } from 'react';
import { router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import api from '@//services/api'
import axios from 'axios';

export default function Signup() {

	const [nome, setNome] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telefone, setTelefone] = useState('')


function handlerLogin(){
	router.replace('/signin')
}

async function handlerAccount(){

	if (!nome || !username || !password || !email || !telefone) {		
		Alert.alert('Erro', 'Por favor, preencha todos os campos.')
		return
	}

	try {
        const response = await api.post(`/user/register`, {
            nome: nome,
            username: username,
            email: email,
            password: password,
            telefone: telefone,
        })

        if (response.status === 201) {
            router.replace({
				pathname: '/signin',
				params: { message: 'Cadastrado com sucesso!' }
			});
        } else {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário', response.data?.error || 'Erro desconhecido');
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
			const errorMessage = error.response?.data?.error || 'Erro desconhecido';
            Alert.alert('Erro ao enviar dados', errorMessage);
        } else {
            Alert.alert('Erro', 'Ocorreu um erro ao processar a requisição.');
        }
    }
}

  return (
	<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<View className='bg-sky-100 w-full h-full'>
      			<StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>
      			<Animatable.View className='flex-2' delay={500} animation={'fadeInRight'}>
      			  <Text className='text-3xl mt-10 mb-12 ms-10 text-sky-600'>Cadastre-se</Text>
      			</Animatable.View>
	  			<Animatable.View className='flex-1 rounded-t-3xl justify-start items-start bg-sky-600' animation={'fadeInUp'}>
					<View className='w-full p-10 top-7 bottom-7'>
						<Text className='text-sky-100 text-2xl mb-1'>
							<FontAwesome6 name='signature' size={20} color={'#e0f2fe'}/> Nome</Text>
						<TextInput
							className='w-full border-b-hairline text-sky-100'
							placeholder='Digite seu nome'
							placeholderTextColor={'#bae6fd'}
							value={nome}
							onChangeText={setNome}
						/>

						<Text className='text-sky-100 text-2xl mt-7 mb-1'>
							<FontAwesome6 name='user-check' size={20} color={'#e0f2fe'}/> Usuário</Text>
						<TextInput
							className='w-full border-b-hairline text-sky-100'
							placeholder='Digite seu usuário'
							placeholderTextColor={'#bae6fd'}
							value={username}
							onChangeText={setUsername}
						/>

						<Text className='text-sky-100 text-2xl mt-7 mb-1'>
							<FontAwesome6 name='envelope-circle-check' size={20} color={'#e0f2fe'}/> Email
						</Text>
						<TextInput
							className='w-full border-b-hairline text-sky-100'
							placeholder='Digite seu email'
							placeholderTextColor={'#bae6fd'}
							value={email}
							onChangeText={setEmail}
						/>

						<Text className='text-sky-100 text-2xl mt-7 mb-1'>
							<FontAwesome6 name='mobile' size={20} color={'#e0f2fe'}/> Telefone
						</Text>
						<TextInput
							className='w-full border-b-hairline text-sky-100'
							placeholder='Digite seu telefone'
							placeholderTextColor={'#bae6fd'}
							value={telefone}
							onChangeText={(text) => setTelefone(text.replace(/[^0-9]/g, ''))} // Filtra apenas números
  							keyboardType="phone-pad"
						/>

						<Text className='text-sky-100 text-2xl mt-7 mb-1'>
							<FontAwesome6 name='lock' size={20} color={'#e0f2fe'} /> Senha
							</Text>
						<TextInput
							className='w-full border-b-hairline text-sky-100'
							placeholder='Digite sua senha...'
							placeholderTextColor={'#bae6fd'}
							value={password}
							onChangeText={setPassword}
							secureTextEntry={true} 
			  				autoCapitalize="none" 
						/>
					</View>
	  				<View className='w-full flex-col flex justify-center items-center p-7 top-7'>
	  					<Pressable 
							className='w-full justify-center items-center rounded-full flex-row p-4 gap-2 bg-sky-950' 
							onPress={handlerAccount}
							>
							<FontAwesome6 name='user-plus' size={22} color={'#e0f2fe'}/>
							<Text className='text-sky-100 text-xl font-bold'>Criar conta</Text>
	  					</Pressable>
	  					<Pressable 
							className='pt-5'
							onPress={handlerLogin}
	  					 >
							<Text className='text-sky-200 text-lg'>Já possui uma conta? Acessar</Text>
	  					</Pressable>
	  				</View>  
	  			</Animatable.View>
    		</View>
		</ScrollView>
	</KeyboardAvoidingView>  
  )
}