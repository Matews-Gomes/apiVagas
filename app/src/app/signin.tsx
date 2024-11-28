import { View, Text, StatusBar, TextInput, Pressable } from 'react-native'
import { router } from 'expo-router'
import * as Animatable from 'react-native-animatable'

export default function Signin() {

	function handlerRegister(){
		router.replace('/signup')
	}

  return (
    <View className='bg-sky-100 w-full h-full'>
      <StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>
      <Animatable.View className='flex-2' delay={500} animation={'fadeInLeft'}>
        <Text className='text-3xl mt-10 mb-12 ms-10 text-sky-600'>Bem vindo(a)</Text>
      </Animatable.View>
	  <Animatable.View className='flex-1 rounded-t-3xl justify-start items-start bg-sky-600' animation={'fadeInUp'}>
		<View className='w-full p-10 top-7 bottom-7'>
			<Text className='text-sky-100 text-2xl bottom-1'>Email</Text>
			<TextInput
				className='w-full border-b-hairline'
				placeholder='Digite seu email...'
				placeholderTextColor={'#bae6fd'}
			/>

			<Text className='text-sky-100 text-2xl top-7'>Senha</Text>
			<TextInput
				className='w-full border-b-hairline top-7'
				placeholder='Digite sua senha...'
				placeholderTextColor={'#bae6fd'}
			/>
		</View>
		
	  	<View className='w-full flex-col flex justify-center items-center p-7 top-7'>
	  		<Pressable className='w-full justify-center items-center rounded-full flex-row p-4 gap-2 bg-sky-950' >
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