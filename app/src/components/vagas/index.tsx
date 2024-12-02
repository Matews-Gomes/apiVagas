import { View } from 'react-native'
import {useState, useEffect} from 'react'
import Cards from '../cards'
import VagasProps from '../../interfaces/vagasInterface'
import api from '@//services/api'

export default function Vagas() {

  const [vagas, setVagas] = useState<VagasProps[]>([])  

  useEffect(() => {
    async function getVagas(){
        try{
           const response = await api.get(`/vagas`)
           setVagas(response.data)

        }catch(error){
            console.log('ERRO: ' + error)
        }
    }

    getVagas()
  }, [])

  return (
    <>
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {vagas.map( item => (
                <Cards vaga={item} key={item.id}/>
            ))}
        </View>

    </>
  )
}