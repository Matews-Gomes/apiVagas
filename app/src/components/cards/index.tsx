import { Pressable, Text, Image, View } from 'react-native'
import { router } from 'expo-router'
import VagasProps from '@//interfaces/vagasInterface'
import api from '@//services/api'

export default function Cards({ vaga }: {vaga: VagasProps}) {

	async function handlerDetails(id: string){

		try{
			const response = await api.get(`vagas/${id}`)
			if(response.data){
				router.push({
					pathname: '/details',
					params: { vagaById: JSON.stringify(response.data) }
				})
			}
		}catch(error){
            console.log('ERRO: ' + error)
        }
	}
   
  return (
    <Pressable className='flex flex-row items-center justify-start gap-2' onPress={() => handlerDetails(vaga.id)}>
        <Image 
            className='w-16 h-16 rounded-2xl'
            source={{ uri: vaga.empresa.imageUrl}}
            resizeMode='cover'
        />      
      <View className='flex flex-col items-start justify-start'>
      <Text className='text-sky-900 font-extrabold text-xl'>{vaga.titulo}</Text>
        <Text className='text-sky-700'>{vaga.empresa.empresa}</Text>
        <Text className={`font-extrabold text-sm ${
                  vaga.situacao ? 'text-green-500' : 'text-red-500'
              }`}>
          {vaga.situacao ? 'Aberta' : 'Fechada'}
        </Text>
      </View>     
    </Pressable>
  )
}