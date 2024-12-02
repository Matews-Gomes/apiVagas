import { Image, Text, Pressable } from 'react-native'
import { router } from 'expo-router'
import VagasProps from '@//interfaces/vagasInterface'
import api from '@//services/api'

export default function TrendingCards({ vaga }: {vaga: VagasProps}) {

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
    <Pressable className='flex flex-col rounded-xl items-start justify-center' onPress={() => handlerDetails(vaga.id)}>
        <Image 
          className='w-32 h-32 rounded-xl'
          source={{ uri: vaga.empresa.imageUrl}}
		  resizeMode='cover'
		  />
      <Text 
        className='text-sky-900 mt-2 w-32 text-xl font-extralight leading-5'
        numberOfLines={2}
        >
            {vaga.titulo}
        </Text>
    </Pressable>
  )
}