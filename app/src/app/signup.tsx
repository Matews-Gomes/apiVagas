import { View, Text, StatusBar, TextInput, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Ionicons, Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

export default function Signup() {

function handlerLogin(){
	router.replace('/signin')
}

  return (
    <View className='bg-sky-100 w-full h-full'>
      <StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>
      <Animatable.View className='flex-2' delay={500} animation={'fadeInRight'}>
        <Text className='text-3xl mt-10 mb-12 ms-10 text-sky-600'>Cadastre-se</Text>
      </Animatable.View>
	  <Animatable.View className='flex-1 rounded-t-3xl justify-start items-start bg-sky-600' animation={'fadeInUp'}>
		<View className='w-full p-10 top-7 bottom-7'>
			<Text className='text-sky-100 text-2xl mb-1'>
				<Feather name='user' size={20} color={'#e0f2fe'}/> Nome</Text>
			<TextInput
				className='w-full border-b-hairline'
				placeholder='Digite seu nome'
				placeholderTextColor={'#bae6fd'}
			/>

			<Text className='text-sky-100 text-2xl mt-7 mb-1'>
				<Feather name='mail' size={20} color={'#e0f2fe'}/> Email
			</Text>
			<TextInput
				className='w-full border-b-hairline'
				placeholder='Digite seu email'
				placeholderTextColor={'#bae6fd'}
			/>

			<Text className='text-sky-100 text-2xl mt-7 mb-1'>
				<Feather name='phone' size={20} color={'#e0f2fe'}/> Telefone
			</Text>
			<TextInput
				className='w-full border-b-hairline'
				placeholder='Digite seu telefone'
				placeholderTextColor={'#bae6fd'}
			/>

			<Text className='text-sky-100 text-2xl mt-7 mb-1'>
				<Feather name='lock' size={20} color={'#e0f2fe'} /> Senha
				</Text>
			<TextInput
				className='w-full border-b-hairline'
				placeholder='Digite sua senha...'
				placeholderTextColor={'#bae6fd'}
			/>
		</View>
		
	  	<View className='w-full flex-col flex justify-center items-center p-7 top-7'>
	  		<Pressable className='w-full justify-center items-center rounded-full flex-row p-4 gap-2 bg-sky-950' >
				<Feather name='user-plus' size={22} color={'#e0f2fe'}/>
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
  )
}