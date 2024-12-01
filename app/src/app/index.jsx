import { View, Text, Pressable, StatusBar, Linking } from 'react-native'
import { router } from 'expo-router'
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Welcome() {
  const whatsappNumber = '5511999999999'
  
  const isVacancyOpen = true

  function handlerLogin(){
    router.push('/signin')
  }

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem('@token')
      await AsyncStorage.removeItem('@user')
      
      router.replace('/signin')
    } catch (error) {
      console.error('Erro no logout:', error)
    }
  }

  function handleWhatsAppContact() {
    const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}`
    
    Linking.canOpenURL(whatsappUrl).then((supported) => {
      if (supported) {
        Linking.openURL(whatsappUrl)
      } else {
        Linking.openURL(`https://wa.me/${whatsappNumber}`)
      }
    }).catch((error) => {
      console.error('Erro ao abrir WhatsApp:', error)
    })
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

          {isVacancyOpen && (
            <Pressable 
              className='absolute top-16 w-3/4 justify-center items-center rounded-full flex-row p-4 gap-2 bg-green-600'
              onPress={handleWhatsAppContact}
            >
              <Text className='text-white font-bold text-xl'>Contate-nos no WhatsApp</Text>
            </Pressable>
          )}
        </View>
      </Animatable.View>   		
    </View>
  )
}