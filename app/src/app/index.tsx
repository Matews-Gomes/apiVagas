import { View, Text, Pressable, StatusBar } from 'react-native'
import { router } from 'expo-router'
import * as Animatable from 'react-native-animatable'


export default function Welcome() {


  function handlerLogin(){
    router.push('/signin')
  }


  return (
    <View className="w-full h-full flex flex-1 justify-center items-center bg-sky-100">
      <StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>


        <View className='w-full flex justify-center items-center' style={{flex: 2}}>
            <Animatable.Image
                className='w-full'
                style={{width: 280, height: 180}}
                source={require('../../assets/images/logo.png')}
                animation={'flipInY'}
            />
        </View>
     
        <Animatable.View
            className='w-full rounded-t-3xl px-7 bg-sky-600'
            style={{flex: 1}}
            delay={600}
            animation={'fadeInUp'}
            >
        <Text className='text-3xl text-sky-100 mt-7 mb-3'>Encontre a vaga ideal e dê o próximo passo na sua jornada profissional.</Text>
        <Text className='text-sky-100 text-xl my-1.5'>Seu futuro está a um clique de distância!</Text>
            <View className='justify-center items-center top-16'>
                <Pressable
                  className='absolute w-3/4 justify-center items-center rounded-full flex-row p-4 gap-2 bg-sky-950'
                  onPress={handlerLogin}
                  >
                  <Text className='text-sky-100 font-bold text-xl'>Vamos começar</Text>
                </Pressable>
            </View>
        </Animatable.View>          
    </View>
  )
}
