import { FlatList } from 'react-native'
import {useState, useEffect} from 'react'
import VagasProps from '../../interfaces/vagasInterface'
import api from '@//services/api'
import TrendingCards from '../trendings'

export default function TrendingVagas() {

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
    <FlatList
        horizontal={true}
        data={vagas}
        renderItem={({item}) => <TrendingCards vaga={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
    />
  )
}