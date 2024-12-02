import Header from '@//components/header'
import Banner from '@//components/banner'
import Search from '@//components/search'
import Section from '@//components/section'
import TrendingVagas from '@//components/trending'
import Vagas from '@//components/vagas'
import Constants from 'expo-constants'
import { View, ScrollView } from 'react-native'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView className='flex-1 bg-sky-100' showsVerticalScrollIndicator={false}>
      <View className='w-full px-4' style={{marginTop: statusBarHeight}}>
			<Header/>
			<Banner/>
		    <Search/>		
      </View>  
	  <Section 
	  		name='Vagas em alta'
			label='veja mais'
			action={() => {
				console.log('CLICOU NO VEJA MAIS');

			}}
			size='text-2xl'
		/>

		<TrendingVagas/>

	  <Section 
	  		name='Todas as vagas'
			label=''
			action={() => {
				console.log('CLICOU NO VEJA MAIS');

			}}
			size='text-xl'
		/>		
		
		<Vagas/>		
    </ScrollView>
    
  )
}