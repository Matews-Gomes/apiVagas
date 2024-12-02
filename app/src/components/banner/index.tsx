import { Image, Pressable, View } from 'react-native'
import PagerView from 'react-native-pager-view'
 
export default function Banner() {
  return (
    <View className='w-full h-36 rounded-2xl mt-5 mb-4'>
        <PagerView style={{flex:1}} initialPage={0} pageMargin={14}>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='1'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner1.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='2'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner2.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='3'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner3.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='4'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner4.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='5'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner5.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='6'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner6.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='7'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner7.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:60 rounded-2xl' key='8'>
                <Image 
                    className='w-full h-36 md:60 rounded-2xl' 
                    source={require('../../../assets/images/banner8.png')}
                />
            </Pressable>
        </PagerView>   
    </View>
  )
}