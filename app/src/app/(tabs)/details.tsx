import { View, StatusBar, Pressable, Linking, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import Header from '@//components/header'
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage';
import VagasProps from '@//interfaces/vagasInterface';

export default function Details() {

	const { vagaById } = useLocalSearchParams();
	const vaga = vagaById ? JSON.parse(vagaById as string) : null;

	const handleApply = async (vaga: VagasProps) => {
		try {
		  	const message = `Olá, estou interessado na vaga "${vaga.titulo}" da empresa ${vaga.empresa.empresa}.`;
	  
		  	const phone = vaga.empresa.telefone.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
		  	const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
	  
		  	const supported = await Linking.canOpenURL(whatsappUrl);
		  	if (supported) {
				await Linking.openURL(whatsappUrl);
		  	} else {
				console.log('WhatsApp não suportado.');
		  	}
			
		  	const storedVagas = await AsyncStorage.getItem('@candidaturas');
		  	const candidaturas = storedVagas ? JSON.parse(storedVagas) : [];
		  	const updatedCandidaturas = [...candidaturas, vaga];
		  	await AsyncStorage.setItem('@candidaturas', JSON.stringify(updatedCandidaturas));
	  
		  	console.log('Candidatura salva com sucesso!');
		} catch (error) {
		  console.log('Erro ao processar a candidatura:', error);
		}
	  };

  return (
    <View className='bg-sky-100 w-full' style={{flex: 1}}>
      <StatusBar backgroundColor={'#7DD3FC'} barStyle={'light-content'}/>
	  	<View className='p-4'>
		  <Header/>
		  <Pressable className='w-full h-44 md:60 rounded-2xl' key='1'>
                <Animatable.Image 
                    className='w-full h-44 md:60 rounded-2xl' 
                    source={{uri: vaga.empresa.imageUrl}}
					animation={'flipInY'}
                />
            </Pressable>
		</View>
      		
			<Animatable.View 
				className='w-full rounded-t-3xl px-7 bg-sky-600' 
				style={{flex: 2}}
				delay={600}
				animation={'fadeInUp'}
			>
				<View className='flex flex-col pt-16'>
    				<View className='w-full flex flex-row items-center justify-between'>
    				    <Text className='text-sky-100 font-semibold text-xl'>
    				        Empresa: 
    				    </Text>
    				    <View className='flex flex-row items-center gap-2'>
    				        <Text className='text-sky-100 text-lg'>
    				            Situação: 
    				        </Text>
    				        <Text className={`font-extrabold text-lg ${
    				            vaga.situacao ? 'text-green-500' : 'text-red-500'
    				        }`}>
    				            {vaga.situacao ? 'Aberta' : 'Fechada'}
    				        </Text>
    				    </View>
    				</View>
    				<Text className='text-sky-100 font-semibold text-lg capitalize mt-4'>
    				    {vaga.empresa.empresa}
    				</Text>					
				</View>
				<View className='flex flex-col items-start justify-start gap-2 pt-10 px-2'>
					<Text className='text-sky-100 font-semibold text-xl'>
						Descrição: 
					</Text>
					<Text className='text-sky-100 font-semibold text-lg capitalize'>
						{vaga.descricao}
					</Text>
				</View>
				<View className='flex flex-row items-start justify-start gap-2 pt-10 px-4'>
					<Text className='text-sky-100 font-semibold text-xl'>
						Contato: 
					</Text>
					<Text className='text-sky-100 font-semibold text-lg capitalize'>
						{vaga.empresa.telefone}
					</Text>
				</View>
			</Animatable.View>
			<Pressable
    			className={`${
    				            vaga.situacao ? '' : 'opacity-50'} w-10/12 absolute rounded-full bg-blue-100 h-12 mb-5 flex items-center justify-center`}
    			style={{ bottom: 20, alignSelf: 'center' }}
    			onPress={() => handleApply(vaga)}
				disabled={!vaga.situacao}
  			>
    			<Text 
					className={`font-bold text-lg ${
						vaga.situacao ? 'text-sky-950' : 'text-red-500'
					}`}
				>{vaga.situacao ? 'Candidatar-se' : 'Encerrada'}</Text>
  			</Pressable>
    </View>
  )
}