import { Tabs } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs 
		screenOptions={
			{
				tabBarStyle:{
					backgroundColor: '#0c4a6e'
				},

				tabBarLabelStyle:{
					color: '#e0f2fe',
					fontSize: 11		
				}
			}
		}
	>
        <Tabs.Screen name='index' 
        	options={
            	{
					headerShown: false,
            	  	title: 'Vagas', 
					headerTintColor: '#f0f9ff', 				  	
				  	tabBarIcon: ({focused, size}) =>{				
						if(focused){
							return <FontAwesome6 name='briefcase' color={'#f0f9ff'} size={size}/>
						}

						return <FontAwesome6 name='briefcase' color={'#93c5fd'} size={size}/>						
				  	}
            	}
          	} />

		<Tabs.Screen name='registered' 
        	options={
            	{
					headerShown: false,
            	  	title: 'Candidaturas', 
				  	headerTintColor: '#e0f2fe', 
				  	tabBarIcon: ({focused, size}) =>{				
						if(focused){
							return <FontAwesome6 name='business-time' color={'#f0f9ff'} size={size}/>
						}

						return <FontAwesome6 name='business-time' color={'#93c5fd'} size={size}/>	
				  	}
            	}
          	} />

			<Tabs.Screen name='setings' 
        		options={
            		{
						headerShown: false,
            		  	title: 'Configurações', 
					  	headerTintColor: '#e0f2fe', 
					  	tabBarIcon: ({focused, size}) =>{				
							if(focused){
								return <FontAwesome6 name='user-gear' color={'#e0f2fe'} size={size}/>
							}

							return <FontAwesome6 name='user-gear' color={'#93c5fd'} size={size}/>
					  	}
            		}
          		} />
    </Tabs>
  )
}